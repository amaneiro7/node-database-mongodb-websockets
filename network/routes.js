import message from '../components/message/network.js'
import user from '../components/user/network.js'
import chat from '../components/chat/network.js'

const routes = (server) => {
  server.use('/message', message)
  server.use('/user', user)
  server.use('/chat', chat)
}

export default routes
