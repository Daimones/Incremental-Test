#Use to create local host
import http.server


PORT = 8001

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    ".js": "application/javascript",
});
server = http.server.HTTPServer(("", PORT), Handler)

print ("Serving at port", PORT)
print(Handler.extensions_map[".js"])
server.serve_forever()