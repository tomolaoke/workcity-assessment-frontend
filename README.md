Workcity Assessment Frontend
This is the frontend for the Workcity Full-Stack & WordPress Developer Assessment, built with React and Tailwind CSS.
Features

Responsive pages: Home, Login, Signup, Client Dashboard, Add/Edit Client, Project Dashboard, Add/Edit Project, Client Profile
Tailwind CSS for styling
Axios for API calls
Accessibility standards (ARIA attributes, keyboard navigation)
JWT-based authentication

Setup Instructions

Clone the Repository:
git clone https://github.com/yourusername/workcity-assessment-frontend.git
cd workcity-assessment-frontend


Serve the Application:Use a local server (e.g., Python’s HTTP server):
python3 -m http.server 8000


Access the App:Open http://localhost:8000 in your browser.

Ensure Backend is Running:The frontend connects to the backend at http://localhost:5000/api. Ensure the workcity-assessment-backend is running.


Pages

Home: Welcome page with login/signup links.
Login/Signup: Authentication pages.
Client Dashboard: Lists all clients with view/edit/delete options (delete/edit for admins only).
Add/Edit Client: Form to add or edit clients (admin only).
Project Dashboard: Lists all projects with edit/delete options (admin only).
Add/Edit Project: Form to add or edit projects (admin only).
Client Profile: Displays client details and associated projects.

Assumptions

The backend API is running at http://localhost:5000.
Uses CDN-based React and Tailwind CSS for simplicity.
Client-side routing is implemented using window.location.
