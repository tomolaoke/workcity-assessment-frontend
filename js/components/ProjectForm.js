const ProjectForm = ({ project = {}, clients = [], onSubmit }) => {
  const [formData, setFormData] = React.useState({
    title: project.title || '',
    description: project.description || '',
    client: project.client?._id || '',
    status: project.status || 'pending',
    deadline: project.deadline ? project.deadline.split('T')[0] : '',
  });
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto" aria-label="Project Form">
      {error && <p className="text-red-500" role="alert">{error}</p>}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="client" className="block text-sm font-medium">Client</label>
        <select
          name="client"
          id="client"
          value={formData.client}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
          aria-required="true"
        >
          <option value="">Select a client</option>
          {clients.map((client) => (
            <option key={client._id} value={client._id}>{client.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="deadline" className="block text-sm font-medium">Deadline</label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        aria-label={project._id ? 'Update Project' : 'Add Project'}
      >
        {project._id ? 'Update' : 'Add'} Project
      </button>
    </form>
  );
};