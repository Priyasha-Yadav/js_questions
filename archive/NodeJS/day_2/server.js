const http = require('http');


const server = http.createServer((req, res) => {
    console.log('Methods:', req.method);
    console.log('Header:', req.headers);
    console.log('URL:', req.url);
    console.log(req);

    res.end('Hello')
})




server.listen(3000, () => {
    console.log('server started')
})


