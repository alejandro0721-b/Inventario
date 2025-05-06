require("dotenv").config()

const express = require("express") //voy a usar la libreria express y guardamela en express
const mongoose = require("mongoose")

const holaRoutes = require("./routes/holaMundo.routes")
const app = express() 
const PORT = process.env.PORT || 3006 

app.set("port",PORT)
app.use("/api/hola", holaRoutes) //Ruta para poner en el Postman

app.get("/",(req,res) =>{
    res.send("Hola mundo")
})

//-----CONEXION A LA BASE DE DATOS---------
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Base de datos conectada"))
.catch(err=>console.error("No se pudo conectar a la base datos",err))

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

