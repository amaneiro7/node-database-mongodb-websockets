import Store from './store.js'
export default class Controller {    
    constructor() {
        this.store = new Store()
    }
    add(users) {
        return new Promise((resolve, reject) => {
            if (!users || !Array.isArray(users)) return Promise.reject('Invalid user list')
            const chat = {
                users,
                date: this.addTime()
            }            
            this.store.add(chat)
            resolve(chat)
        })
    }
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.store.getAll())
        })        
    }    
    getById(userId) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getById(userId))
        })        
    }    
    delete(chatId) {
        return new Promise((resolve, reject) => {
            if (!chatId) {
                console.error('[messageControler] No hay un Id valido');
                reject('Los datos son incorrectos')
                return
            }
            this.store.delete(chatId)
                .then(resolve())
                .catch(reject(e))
        })        
    }
    
    addTime() {
        return new Date().toLocaleString();
    }
}