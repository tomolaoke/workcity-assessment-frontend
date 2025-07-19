const Navbar = () => {
  const isAuth = isAuthenticated();
  const role = getUserRole();

  const handleLogout = () => {
    removeToken();
    window.location.href = '/';
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-xl font-bold" aria-label="Workcity Home">Workcity</a>
        <div className="space-x-4">
          <a href="/" className="hover:underline" aria-label="Home">Home</a>
          {isAuth ? (
            <>
              <a href="/clients" className="hover:underline" aria-label="Client Dashboard">Clients</a>
              <a href="/projects" className="hover:underline" aria-label="Project Dashboard">Projects</a>
              {role === 'admin' && (
                <a href="/add-client" className="hover:underline" aria-label="Add Client">Add Client</a>
              )}
              <button onClick={handleLogout} className="hover:underline" aria-label="Logout">Logout</button>
            </>
          ) : (
            <>
              <a href="/login" className="hover:underline" aria-label="Login">Login</a>
              <a href="/signup" className="hover:underline" aria-label="Signup">Signup</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};