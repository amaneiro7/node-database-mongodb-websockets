import express from 'express'
import response from '../../network/response.js'
import Controller from './controller.js'
const controller = new Controller()
const router = express.Router()

// Crear un mensaje
router.post('/', (req, res) => {
  controller.add(req.body.chat, req.body.user, req.body.message)
    .then(data => response.success(req, res, data, 201))
    .catch(e => response.error(req, res, 'Informacion Invalida', 400, e)
    )
})
// Obtener la lista de mensajes
router.get('/', (req, res) => {
  const filterMessages = req.query.chat || null
  controller.getAll(filterMessages)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})
// Obtener un mensaje de mensajes
router.get('/:id', (req, res) => {
  controller.getById(req.params.id)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})
// Modificar un mensaje
router.patch('/:id', (req, res) => {
  controller.update(req.params.id, req.body.message)
    .then(dataInfo => response.success(req, res, dataInfo, 200))
    .catch(e => response.error(req, res, 'Informacion Interno', 500, e)
    )
})
router.delete('/:id', (req, res) => {
  controller.delete(req.params.id)
    .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`, 201))
    .catch(e => response.error(req, res, 'Informacion Interno', 500, e)
    )
})
export default router
