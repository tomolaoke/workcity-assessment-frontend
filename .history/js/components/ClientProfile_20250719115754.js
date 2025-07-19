const ClientProfile = ({ client }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow" role="region" aria-label="Client Profile">
      <h2 className="text-xl font-bold mb-4">{client.name}</h2>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Phone:</strong> {client.phone || 'N/A'}</p>
      <p><strong>Created By:</strong> {client.createdBy?.email || 'Unknown'}</p>
      <p><strong>Created At:</strong> {new Date(client.createdAt).toLocaleDateString()}</p>
    </div>
  );
};