import express from 'express'
import response from '../../network/response.js'
import Controller from './controller.js'
const controller = new Controller()
const router = express.Router()

// Obtener la lista de mensajes
router.get('/', (req, res) => {
    controller.getAll()
        .then(messageList => response.success(req, res, messageList, 200))
        .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})
// Crear un mensaje
router.post('/', (req, res) => {    
    controller.add(req.body.user, req.body.message)
        .then(dataInfo => response.success(req, res, dataInfo, 201)) 
        .catch(e => response.error(req, res, 'Informacion Invalida', 400, e)
        )
    })
    // Obtener un mensaje
router.patch('/:id', (req, res) => {
    controller.update(req.params.id, req.body.message)
        .then(dataInfo => response.success(req, res, dataInfo, 200)) 
        .catch(e => response.error(req, res, 'Informacion Interno', 500, e)
        )
})
export default router