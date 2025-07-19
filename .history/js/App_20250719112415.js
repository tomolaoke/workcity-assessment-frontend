const App = () => {
  const getPage = () => {
    const hash = window.location.hash || '#/';
    const route = hash.replace(/^#\//, '');
    if (route === '' || route === 'index.html') return <Home />;
    if (route === 'login') return <Login />;
    if (route === 'signup') return <Signup />;
    if (route === 'clients') return <ClientDashboard />;
    if (route.startsWith('clients/')) return <ClientProfile />;
    if (route === 'add-client' || route.startsWith('edit-client/')) return <AddEditClient />;
    if (route === 'projects') return <ProjectDashboard />;
    if (route === 'add-project' || route.startsWith('edit-project/')) return <AddEditProject />;
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