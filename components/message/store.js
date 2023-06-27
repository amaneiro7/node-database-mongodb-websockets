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
        if (await this.ifExist(id)) return await Model.findOne({ _id: id })
    }

    async update(id, message, updatedTime) {
        if (await this.ifExist(id)) return await Model.findOneAndUpdate(
            { _id: id },
            { $set: { message, date: updatedTime } },
            { new: true }
        )
    }
    async delete(id) {
        if (await this.ifExist(id)) return await Model.findByIdAndDelete({ _id: id })
    }
    
    async ifExist(id) {
        const validateId = await Model.exists({ _id: id })
        if (!validateId) {
            throw new Error('Id no existe')
        }
        return true
    }
}