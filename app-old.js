const http = require("http");

// req es la solicitud al webserver y res es lo que el servidor responde al cliente
http
  .createServer((req, res) => {
    // Lo siguiente le dice al nevegador que el archivo descargado es de extensión .csv
    /* res.setHeader("Content-Disposition", "attachment; filename = lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" }); */

    /*   res.write("id, nombre\n");
    res.write("1, Nicolás\n");
    res.write("2, Camilo\n");
    res.write("3, Alejandra\n");
    res.write("4, Pandora\n"); */

    res.write("Hola mundo");

    res.end();
  })
  .listen(8080);

console.log("Escuchando en el purto 8080");
