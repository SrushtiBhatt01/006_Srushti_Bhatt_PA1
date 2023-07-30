const http = require("http");
const static = require('node-static');

var fileServer = new static.Server('./file1.html');
const url = require('url');

var server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filepath = q.pathname;

    // serve static
    req.addListener('end', () => {
        fileServer.serve(req, res);
    }).resume();

    // GET method
    if (req.method === "GET" && filepath == "/") {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    }

    // POST method
    else if (req.method === "POST" && filepath == "/submit") {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString().split('&')[0].split('=')[1];
            body += chunk.toString().split('&')[1].split('=')[1];
        });

        req.on('end', () => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(body);
            res.end();
        })
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 page not found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log(`listening on port 3000`);
})