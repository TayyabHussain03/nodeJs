let fs = require('fs')
let http = require('http')
let server = http.createServer()

server.on('request', (req, res) => {
    const rsStream = fs.createReadStream('input.txt')

    rsStream.on('data', (data) => {
        res.end(data)
    })
    rsStream.on('end', () => {
        res.end()
    })
    rsStream.on('error', (error) => {
        res.end(error)
    })
})
server.listen(8000, "127.0.0.1", () => {
    console.log("server start")
})

