const { useParams, useNavigate } = ReactRouterDOM;

const AddEditClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = React.useState(null);

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    if (getUserRole() !== 'admin') {
      navigate('/clients');
      return;
    }
    if (id) {
      api.getClients()
        .then((response) => {
          const foundClient = response.data.find((c) => c._id === id);
          setClient(foundClient || {});
        })
        .catch(() => setClient({}));
    } else {
      setClient({});
    }
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    if (id) {
      await api.updateClient(id, formData);
    } else {
      await api.createClient(formData);
    }
    navigate('/clients');
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">
        {id ? 'Edit Client' : 'Add Client'}
      </h1>
      {client && <ClientForm client={client} onSubmit={handleSubmit} />}
    </div>
  );
};