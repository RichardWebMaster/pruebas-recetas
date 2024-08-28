// middleware globales (se usan aqui mismo)
import express from "express";
import recipes from "./recipes.js";
const app = express();
app.use(express.json())

// Rutas Get

app.get("/recetas", (req, res) => {
    return res.json(recipes);
  });
app.get("/recetas/:id", (req, res) => {
  const ide = req.params.id
  const recid = recipes.find(data => data.id === ide) 
  // if(!recid)return res.json("no hay datos validos")
  if(recid)return res.json(recid)

  return res.json("no hay datos validos");

  });

  // Rutas Post
// Ruta POST para agregar una nueva receta


app.listen(3000, () => {
    console.log("Servidor aparece en el puerto 3000");
  });