const { BrowserRouter, Routes, Route } = ReactRouterDOM;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clients" element={<ClientDashboard />} />
        <Route path="/clients/:id" element={<ClientProfile />} />
        <Route path="/add-client" element={<AddEditClient />} />
        <Route path="/edit-client/:id" element={<AddEditClient />} />
        <Route path="/projects" element={<ProjectDashboard />} />
        <Route path="/add-project" element={<AddEditProject />} />
        <Route path="/edit-project/:id" element={<AddEditProject />} />
        <Route path="*" element={<div className="container py-8">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));