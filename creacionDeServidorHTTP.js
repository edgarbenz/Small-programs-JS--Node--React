const http = require("http");

const server = http.createServer((request,response) => {  //creamos un servidor http
    response.writeHead(200,{"Content-type": "text/plain"});   //cabeceras , va un texto 
    response.end("conexion establecida");  //respuesta del servidor
});

server.listen(1337,"127.0.0.1"); //arrancamos el servidor
console.log ("Servidor Arrancado en http://127.0.0.1:1337");