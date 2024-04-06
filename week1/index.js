import fs from 'fs';
import http from 'http';

http.createServer((req, res) => {
    let path = req.url.toLowerCase();
    switch(path) {
        case '/':
            fs.readFile('home.html', (err, data) => {
                if (err) {
                    return console.log(err);
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
            break;
        case '/about':
            fs.readFile('about.html', (err, data) => {
                if (err) {
                    return console.log(err);
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404:Page not found.');
    }
}).listen(process.env.PORT || 3000);