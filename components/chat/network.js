import express from 'express'
import response from '../../network/response.js'
import Controller from './controller.js'
const controller = new Controller()
const router = express.Router()

// Establecer chat
router.post('/', (req, res) => {    
    controller.add(req.body.users)
        .then(data => response.success(req, res, data, 201)) 
        .catch(e => response.error(req, res, 'Informacion Invalida', 400, e)
        )
    })
// Obtener chats de un usuario
router.get('/:userId', (req, res) => {
    controller.getById(req.params.userId)
        .then(users => response.success(req, res, users, 200))
        .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})
// Eliminar chat
router.delete('/:id', (req, res) => {
    controller.delete(req.params.id)
        .then(() => response.success(req, res, `Chat ${req.params.id} eliminado`, 201)) 
        .catch(e => response.error(req, res, 'Informacion Interno', 500, e)
        )
})
export default router