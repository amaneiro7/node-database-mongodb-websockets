import Model from './models.js'

export default class Store {
    constructor() {}

    add(chat) {        
        const myChat = new Model(chat)
        return myChat.save()
    }

    async getById(id) {
        return new Promise((resolve, reject) => {
            let filter = {}
            if (userId) {
                filter = {
                    users: userId
                }
            }

            const chatlist = Model.find(filter)
                .populate('users')
                .exec()
                .catch(e => reject(e))
            resolve(chatlist)
        })
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