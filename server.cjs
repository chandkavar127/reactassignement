const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDirectory = __dirname;
const port = 3000;

const server = http.createServer((request, response) => {
  const requestedPath = request.url === "/" ? "/index.html" : request.url.split("?")[0];
  const filePath = path.join(rootDirectory, requestedPath);

  if (!filePath.startsWith(rootDirectory)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("File not found");
      return;
    }

    const extension = path.extname(filePath);
    const contentTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
    };
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "text/plain",
    });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
