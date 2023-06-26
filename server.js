import express from 'express'
import response from './network/response.js'
const router = express.Router()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
// app.use('/', (req, res) => {
//     res.send('Hola')
// })
router.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers['user-agent']);
    response.success(req, res, 'Mensaje obtenido exitosamente')
    // res.send('Hola desde get')
})

router.post('/message', (req, res) => {
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'Esto es una silumacion del error simulado')
    } else {
        response.success(req, res, 'Creado correctamente', 201)
    }
})

app.use('/app', express.static('public'))


app.listen(3000)
console.log('La aplicacion esta escuchando en http://localhost:3000');