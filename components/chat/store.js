import Model from './models.js'

export default class Store {
    constructor() {}

    add(chat) {        
        const myChat = new Model(chat)
        return myChat.save()
    }

    async getAll() {
        return await Model.find()
    }

    async getById(userId) {
        return new Promise(async (resolve, reject) => {
            let filter = {}
            if (userId) {
                filter = {
                    users: userId
                }
            }

            const chatlist = await Model.find(filter)
                .populate('users')
                .exec()
                .catch(e => reject(e))
            resolve(chatlist)
        })
    }

    async delete(chatId) {
        if (await this.ifExist(chatId)) return await Model.findByIdAndDelete({ _id: chatId })
    }
    
    async ifExist(id) {
        const validateId = await Model.exists({ _id: id })
        if (!validateId) {
            throw new Error('Id no existe')
        }
        return true
    }
}