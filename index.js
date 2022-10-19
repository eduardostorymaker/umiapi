const express = require("express")
const cors = require('cors')
const routerAPI = require('./routes/')
const { config } = require('./configs/config')

const app = new express()

//cors
const whitelist = ['http://localhost:8080','http://localhost:3000','http://localhost:3005']
const options = {
    origin: (origin,callback) =>{
        if (whitelist.includes(origin) || !origin) {
            callback(null,true)
        } else {
            callback(new Error('no permitido'))
        }
    }
}
app.use(cors(options))

//Enviar archivos estaticos en la ruta principal
app.use(express.static('public'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

// app.get('/', (req,res) => {
//     res.json({
//         hola: "mundo"
//     })
// })

routerAPI(app)

app.listen(config.port,() => {
    console.log(`Listen on ${config.port}`)
})