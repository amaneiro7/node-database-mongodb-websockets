import express from 'express'
import response from '../../network/response.js'
import Controller from './controller.js'
const controller = new Controller()
const router = express.Router()

// Crear
router.post('/', (req, res) => {
  controller.add(req.body.name)
    .then(data => response.success(req, res, data, 201))
    .catch(error => response.error(req, res, 'Informacion Invalida', 400, error)
    )
})

// Obtener Todo
router.get('/', (req, res) => {
  controller.getAll()
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})
// Obtener uno
router.get('/:id', (req, res) => {
  controller.getById(req.params.id)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Unexpected Error', 500, e))
})
// Modificar
router.patch('/:id', (req, res) => {
  controller.update(req.params.id, req.body.name)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Informacion Interno', 500, e)
    )
})
// Eliminar
router.delete('/:id', (req, res) => {
  controller.delete(req.params.id)
    .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`, 201))
    .catch(e => response.error(req, res, 'Informacion Interno', 500, e)
    )
})
export default router
