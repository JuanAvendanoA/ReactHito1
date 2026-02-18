import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Importar fileURLToPath

const router = express.Router();

// Usamos import.meta.url para obtener la ruta del archivo
const __filename = fileURLToPath(import.meta.url); // Convertir la URL del módulo en una ruta de archivo
const __dirname = path.dirname(__filename); // Obtener el directorio del archivo actual

// Ruta al archivo pizzas.json
const pizzasFilePath = path.join(__dirname, "../db", "pizzas.json");

// Ruta para obtener las pizzas
router.get("/", (req, res) => {
  fs.readFile(pizzasFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).json({ error: "No se pudo obtener las pizzas" });
    }

    try {
      const pizzas = JSON.parse(data); // Parsear el archivo JSON
      res.json(pizzas); // Enviar las pizzas como respuesta JSON
    } catch (parseError) {
      console.error("Error al procesar el archivo JSON:", parseError);
      return res
        .status(500)
        .json({ error: "Error al procesar los datos de las pizzas" });
    }
  });
});

export default router;
