import express from 'express'
import router from './network/routes.js'
import db from './db.js'
import http from 'http'
import config from './config.js'
import socket from './socket.js'
import cors from 'cors'

const app = express()
const server = http.createServer(app)
socket.connect(server)

db(config.mongoDB.uri)
app.unsubscribe(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(router)
router(app)
app.use(`/${app}`, express.static('public'))

server.listen(config.port, () =>
  console.log(`La aplicacion esta escuchando en el puerto ${config.port}}`)
)
