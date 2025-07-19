const ProjectDashboard = () => {
  const [projects, setProjects] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/login';
      return;
    }
    api.getProjects()
      .then((response) => setProjects(response.data))
      .catch((err) => setError(err.response?.data?.error || 'Failed to fetch projects'));
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await api.deleteProject(id);
        setProjects(projects.filter((project) => project._id !== id));
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to delete project');
      }
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
      {error && <p className="text-red-500" role="alert">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow" role="article">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p><strong>Client:</strong> {project.client?.name}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Deadline:</strong> {project.deadline ? new Date(project.deadline).toLocaleDateString() : 'N/A'}</p>
            <div className="mt-2 space-x-2">
              {getUserRole() === 'admin' && (
                <>
                  <a
                    href={`/edit-project/${project._id}`}
                    className="text-green-600 hover:underline"
                    aria-label={`Edit ${project.title}`}
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="text-red-600 hover:underline"
                    aria-label={`Delete ${project.title}`}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};