const { useParams, useNavigate } = ReactRouterDOM;

const AddEditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = React.useState(null);
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    if (getUserRole() !== 'admin') {
      navigate('/projects');
      return;
    }
    api.getClients()
      .then((response) => setClients(response.data))
      .catch(() => setClients([]));
    if (id) {
      api.getProjects()
        .then((response) => {
          const foundProject = response.data.find((p) => p._id === id);
          setProject(foundProject || {});
        })
        .catch(() => setProject({}));
    } else {
      setProject({});
    }
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    if (id) {
      await api.updateProject(id, formData);
    } else {
      await api.createProject(formData);
    }
    navigate('/projects');
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">
        {id ? 'Edit Project' : 'Add Project'}
      </h1>
      {project && <ProjectForm project={project} clients={clients} onSubmit={handleSubmit} />}
    </div>
  );
};