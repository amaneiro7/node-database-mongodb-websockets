import express from 'express'
import message from '../components/message/network.js'
import user from '../components/user/network.js'
const routes = (server) => {
    server.use('/message', message)
    server.use('/user', user)
}

export default routes