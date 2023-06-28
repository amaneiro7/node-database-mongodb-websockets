import { Server } from 'socket.io'
const socket = {}

function connect (server) {
  socket.io = new Server(server)
  console.log('socket esta iniciado')
}

export default {
  connect,
  socket
}
