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

    async getAll(filterUser) {
        let filter = {}
        if (filterUser !== null) {
            filter = { user: filterUser }
        }
        return await Model.find(filter)
    }

    async getById(id) {
        return await Model.findOne({_id: id})
    }

    async update(id, message, updatedTime) {
        return await Model.findOneAndUpdate(
            { _id: id },
            { $set: { message, date: updatedTime } },
            { new: true }
        )
    }
}