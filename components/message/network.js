import express from 'express'
import response from '../../network/response.js'
import ControllerMessage from './controller.js'
const controller = new ControllerMessage()
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        'custom-header': 'Nuestro valor personalizado'
    })
    response.success(req, res, 'Lista de mensajes')
})

router.post('/', (req, res) => {    
    controller.addMessage(req.body.user, req.body.message)
        .then(dataInfo => response.success(req, res, dataInfo, 201)) 
        .catch(e => response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador')
    )
})

export default router