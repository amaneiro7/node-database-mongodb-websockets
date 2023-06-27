import express from 'express'
import response from '../../network/response.js'
import Controller from './controller.js'
const controller = new Controller()
const router = express.Router()

router.get('/', (req, res) => {
    controller.getAll()
        .then(messageList => response.success(req, res, messageList, 200))
        .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})

router.post('/', (req, res) => {    
    controller.add(req.body.user, req.body.message)
        .then(dataInfo => response.success(req, res, dataInfo, 201)) 
        .catch(e => response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador')
    )
})

export default router