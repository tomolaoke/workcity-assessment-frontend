const { useNavigate, Link } = ReactRouterDOM;

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [clients, setClients] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    api.getClients()
      .then((response) => setClients(response.data))
      .catch((err) => setError(err.response?.data?.error || 'Failed to fetch clients'));
  }, [navigate]);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this client?')) {
      try {
        await api.deleteClient(id);
        setClients(clients.filter((client) => client._id !== id));
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to delete client');
      }
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      {error && <p className="text-red-500" role="alert">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div key={client._id} className="bg-white p-4 rounded shadow" role="article">
            <h2 className="text-lg font-semibold">{client.name}</h2>
            <p>{client.email}</p>
            <div className="mt-2 space-x-2">
              <Link
                to={`/clients/${client._id}`}
                className="text-blue-600 hover:underline"
                aria-label={`View profile of ${client.name}`}
              >
                View
              </Link>
              {getUserRole() === 'admin' && (
                <>
                  <Link
                    to={`/edit-client/${client._id}`}
                    className="text-green-600 hover:underline"
                    aria-label={`Edit ${client.name}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(client._id)}
                    className="text-red-600 hover:underline"
                    aria-label={`Delete ${client.name}`}
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