import db from 'mongoose'
import Model from './models.js'
// mongodb+srv://amaneiro7:OL2zAEMYH5PJON36@cluster0.trucfof.mongodb.net/
db.Promise = global.Promise
db.connect('mongodb+srv://amaneiro7:OL2zAEMYH5PJON36@cluster0.trucfof.mongodb.net/', {
    useNewUrlParser: true
})
console.log('[db] Conectada con exito');
export default class Store {
    constructor() {}

    add(message) {
        
        const myMessage = new Model(message)
        myMessage.save()
    }

    async getAll() {
        const messages = await Model.find()
        return messages
    }
}