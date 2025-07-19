const Login = () => {
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(formData.email, formData.password);
      setToken(response.data.token);
      window.location.href = '/clients';
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4" aria-label="Login Form">
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
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          aria-label="Login"
        >
          Login
        </button>
      </form>
    </div>
  );
};