import express from 'express'
import router from './network/routes.js'
import db from './db.js'
import config from './config.js'

db(config.mongoDB.uri)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(router)
router(app)
app.use('/app', express.static('public'))

app.listen(config.port)
console.log(`La aplicacion esta escuchando en el puerto ${config.port}}`)
