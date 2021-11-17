const http = require('http') ;

const server= http.createServer((req, res) => {
    if (req.url === "/") {
        res.write ("Server mounted")
        res.end()
    }
})

server.listen(8080);

console.log("Server escuchando en el puerto 8080")