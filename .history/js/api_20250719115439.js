const BASE_URL = 'http://localhost:5000/api';

const api = {
  // Auth API
  signup: async (email, password, role) => {
    return axios.post(`${BASE_URL}/auth/signup`, { email, password, role });
  },
  login: async (email, password) => {
    return axios.post(`${BASE_URL}/auth/login`, { email, password });
  },

  // Client API
  getClients: async () => {
    return axios.get(`${BASE_URL}/clients`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createClient: async (clientData) => {
    return axios.post(`${BASE_URL}/clients`, clientData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  updateClient: async (id, clientData) => {
    return axios.put(`${BASE_URL}/clients/${id}`, clientData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteClient: async (id) => {
    return axios.delete(`${BASE_URL}/clients/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  // Project API
  getProjects: async () => {
    return axios.get(`${BASE_URL}/projects`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getProjectsByClient: async (clientId) => {
    return axios.get(`${BASE_URL}/projects/client/${clientId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createProject: async (projectData) => {
    return axios.post(`${BASE_URL}/projects`, projectData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  updateProject: async (id, projectData) => {
    return axios.put(`${BASE_URL}/projects/${id}`, projectData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteProject: async (id) => {
    return axios.delete(`${BASE_URL}/projects/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};