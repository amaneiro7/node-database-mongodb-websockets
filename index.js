import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// const express = require('express')
// const app = express()
// const server = require('http').Server(app)
// const io = require('socket.io')(server)
app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado')
  socket.emit('mensaje', 'Bienvenido!')
})

setInterval(() => {
  io.emit('mensaje', 'Hola, os escribo a todos')
}, 3000)

server.listen(8080, () => console.log('Servido iniciado en http://localhost:8080'))
