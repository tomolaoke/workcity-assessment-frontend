const { Link, useNavigate } = ReactRouterDOM;

const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = isAuthenticated();
  const role = getUserRole();

  const handleLogout = () => {
    removeToken();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" aria-label="Workcity Home">Workcity</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline" aria-label="Home">Home</Link>
          {isAuth ? (
            <>
              <Link to="/clients" className="hover:underline" aria-label="Client Dashboard">Clients</Link>
              <Link to="/projects" className="hover:underline" aria-label="Project Dashboard">Projects</Link>
              {role === 'admin' && (
                <Link to="/add-client" className="hover:underline" aria-label="Add Client">Add Client</Link>
              )}
              <button onClick={handleLogout} className="hover:underline" aria-label="Logout">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline" aria-label="Login">Login</Link>
              <Link to="/signup" className="hover:underline" aria-label="Signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};