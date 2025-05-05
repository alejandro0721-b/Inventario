const express = require("express")
const router = express.Router()
const holaController = require("../controllers/holaMundo.controllers")

router.get("/",holaController.holaMundo)
router.get("/esteban",(req,res)=>{
    res.send("hola esteban")
})

module.exports = router