const App = () => {
  const getPage = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') return <Home />;
    if (path === '/login') return <Login />;
    if (path === '/signup') return <Signup />;
    if (path === '/clients') return <ClientDashboard />;
    if (path.startsWith('/clients/')) return <ClientProfile />;
    if (path === '/add-client' || path.startsWith('/edit-client/')) return <AddEditClient />;
    if (path === '/projects') return <ProjectDashboard />;
    if (path === '/add-project' || path.startsWith('/edit-project/')) return <AddEditProject />;
    return <div className="container py-8">404 - Page Not Found</div>;
  };

  return (
    <div>
      <Navbar />
      {getPage()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));