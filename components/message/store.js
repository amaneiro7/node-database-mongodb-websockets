import Model from './models.js'

export default class Store {
    constructor() {}

    add(message) {        
        const myMessage = new Model(message)
        myMessage.save()
    }

    async getAll(filterUser) {
        return new Promise(async (resolve, reject) => {
            let filter = {}
            if (filterUser !== null) {
                filter = { user: filterUser }
            }
            const messages = Model.find(filter)
                .populate('user')
                .exec()                
                .catch(e => reject(e))
            resolve(messages)
        })
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