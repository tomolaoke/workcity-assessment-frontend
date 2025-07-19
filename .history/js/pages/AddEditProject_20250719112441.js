const AddEditProject = () => {
  const [project, setProject] = React.useState(null);
  const [clients, setClients] = React.useState([]);
  const hash = window.location.hash || '#/';
  const projectId = hash.split('/').pop();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      window.location.hash = '#/login';
      return;
    }
    if (getUserRole() !== 'admin') {
      window.location.hash = '#/projects';
      return;
    }
    api.getClients()
      .then((response) => setClients(response.data))
      .catch(() => setClients([]));
    if (projectId !== 'add-project') {
      api.getProjects()
        .then((response) => {
          const foundProject = response.data.find((p) => p._id === projectId);
          setProject(foundProject || {});
        })
        .catch(() => setProject({}));
    }
  }, [projectId]);

  const handleSubmit = async (formData) => {
    if (projectId === 'add-project') {
      await api.createProject(formData);
    } else {
      await api.updateProject(projectId, formData);
    }
    window.location.hash = '#/projects';
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">
        {projectId === 'add-project' ? 'Add Project' : 'Edit Project'}
      </h1>
      {project && <ProjectForm project={project} clients={clients} onSubmit={handleSubmit} />}
    </div>
  );
};