const { useParams, useNavigate } = ReactRouterDOM;

const ClientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = React.useState(null);
  const [projects, setProjects] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    api.getClients()
      .then((response) => {
        const foundClient = response.data.find((c) => c._id === id);
        setClient(foundClient || {});
      })
      .catch(() => setError('Failed to fetch client'));
    api.getProjectsByClient(id)
      .then((response) => setProjects(response.data))
      .catch(() => setError('Failed to fetch projects'));
  }, [id, navigate]);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Client Profile</h1>
      {error && <p className="text-red-500" role="alert">{error}</p>}
      {client && <ClientProfile client={client} />}
      <h2 className="text-xl font-bold mt-8 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow" role="article">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Deadline:</strong> {project.deadline ? new Date(project.deadline).toLocaleDateString() : 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};