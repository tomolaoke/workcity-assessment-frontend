const { useNavigate } = ReactRouterDOM;

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({ email: '', password: '', role: 'user' });
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.signup(formData.email, formData.password, formData.role);
      setToken(response.data.token);
      navigate('/clients');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4" aria-label="Signup Form">
        {error && <p className="text-red-500" role="alert">{error}</p>}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium">Role</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          aria-label="Signup"
        >
          Signup
        </button>
      </form>
    </div>
  );
};