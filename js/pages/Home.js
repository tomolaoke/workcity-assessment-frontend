const Home = () => {
  return (
    <div className="container text-center py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Workcity</h1>
      <p className="text-lg">Manage your clients and projects efficiently.</p>
      {!isAuthenticated() && (
        <div className="mt-4 space-x-4">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" aria-label="Go to Login">Login</a>
          <a href="/signup" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" aria-label="Go to Signup">Signup</a>
        </div>
      )}
    </div>
  );
};