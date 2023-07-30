const http = require("http");
const fs = require('fs');

var server = http.createServer((req, res) => {

    // GET method
    if (req.method === "GET" && req.url === "/gethello") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hello NodeJS!!");
        res.end();
    }
    else if (req.method === "GET" && req.url === "/") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 page not found");
        res.end();
    }

    fs.readFile('q2.html', null, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('file Not found!!');

        }
        else {
            res.writeHead(200);
            res.write(data);
        }
        res.end();
    })


});

server.listen(5000, () => {
    console.log(`listening on port 5000`);
})
