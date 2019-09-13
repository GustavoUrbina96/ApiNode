import  mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import {ActorRouter} from './controllers/ActorController';
import {DirectorRouter} from './controllers/DirectorController';
//Conexion y declaracion
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/Series' ,{useNewUrlParser: true})
.then(()=>{
    
}).catch(err=> console.log ("Chales no se conecto :'v  "+ err))

const port = process.env.port || 1337
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Ruta de controladores.
app.use('/Actor',ActorRouter)
app.use('/Director',DirectorRouter)
//app.use('/Director',DirectorRouter)

//Prueba
app.get('/', (req, res)=> {
    res.send("API is running OK")
})

//Prueba saber el puerto
app.listen(port, ()=> {
    console.log('App is running in port: ' + port)
})


