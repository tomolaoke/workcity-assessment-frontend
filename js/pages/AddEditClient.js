const AddEditClient = () => {
  const [client, setClient] = React.useState(null);
  const path = window.location.pathname;
  const clientId = path.split('/').pop();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/login';
      return;
    }
    if (getUserRole() !== 'admin') {
      window.location.href = '/clients';
      return;
    }
    if (clientId !== 'add-client') {
      api.getClients()
        .then((response) => {
          const foundClient = response.data.find((c) => c._id === clientId);
          setClient(foundClient || {});
        })
        .catch(() => setClient({}));
    }
  }, [clientId]);

  const handleSubmit = async (formData) => {
    if (clientId === 'add-client') {
      await api.createClient(formData);
    } else {
      await api.updateClient(clientId, formData);
    }
    window.location.href = '/clients';
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">
        {clientId === 'add-client' ? 'Add Client' : 'Edit Client'}
      </h1>
      {client && <ClientForm client={client} onSubmit={handleSubmit} />}
    </div>
  );
};