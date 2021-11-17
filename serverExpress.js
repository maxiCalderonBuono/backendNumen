const express = require ('express') ;

const server= express();

server.get("/", (req,resp) => {
    resp.send("Pagina de inicio")
})

server.get("/otraruta", (req,resp) => {
    resp.send("Mensaje desde otra ruta")
})

server.listen (8080, () => console.log("Servidor corriendo en el puerto 8080"))