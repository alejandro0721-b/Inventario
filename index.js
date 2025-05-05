const express = require("express") //voy a usar la libreria express y guardamela en express
const holaRoutes = require("./routes/holaMundo.routes")
require("dotenv").config()
const app = express() 
const PORT = process.env.PORT || 3006 

app.set("port",PORT)
app.use("/api/hola", holaRoutes) //Ruta para poner en el Postman

app.get("/",(req,res) =>{
    res.send("Hola mundo")
})

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

