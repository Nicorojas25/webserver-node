const express = require("express"); // Express
const hbs = require("hbs"); // Handlebars
require("dotenv").config(); // Dotenv | variables de entorno

const app = express();
const port = process.env.PORT;

// Handelbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

// Se pueden crear diferentes rutas con express. El primer parámetro especifica la ruta.
// Especificada la carpeta publica, se hace innecesario lo que haya dentro del path /
/* app.get("/", (req, res) => {
  res.send("Home page");
}); */

/* app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo");
});
*/

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Nicolás Rojas",
    titulo: "Proyecto Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Nicolás Rojas",
    titulo: "Proyecto Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Nicolás Rojas",
    titulo: "Proyecto Node",
  });
});

/* app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
}); */

// Si se necesita enviar lo que hay dentro de un archivo en algún directorio, se hace lo siguiente:
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
