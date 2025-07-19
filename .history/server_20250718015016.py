import http.server
   import socketserver
   import os

   PORT = 8000

   class SPAHandler(http.server.SimpleHTTPRequestHandler):
       def do_GET(self):
           # Check if the requested path corresponds to a file
           if os.path.exists(self.path[1:]) and not os.path.isdir(self.path[1:]):
               super().do_GET()
           else:
               # Serve index.html for all other routes
               self.path = '/index.html'
               super().do_GET()

   with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
       print(f"Serving at http://localhost:{PORT}")
       httpd.serve_forever()