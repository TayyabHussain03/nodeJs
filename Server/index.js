const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("This is home page")
    }
    else if (req.url === "/contact") {
        res.end("This is contact page")
    }
    else if (req.url === "/about") {
        res.end("This is about page")
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 page Error</h1>")
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log('server chaalu hai')
})