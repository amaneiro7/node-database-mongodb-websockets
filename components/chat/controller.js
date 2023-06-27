import Store from './store.js'
export default class Controller {    
    constructor() {
        this.store = new Store()
    }
    add(users) {
        return new Promise((resolve, reject) => {
            if (!user || !Array.isArray(users)) return Promise.reject('Invalid user list')
            const chat = {
                users,
                date: this.addTime()
            }            
            this.store.add(chat)
            resolve(chat)
        })
    }
    getById(userId) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getById(userId))
        })        
    }    
    delete(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                console.error('[messageControler] No hay un Id valido');
                reject('Los datos son incorrectos')
                return
            }
            this.store.delete(id)
                .then(resolve())
                .catch(reject(e))
        })        
    }
    
    addTime() {
        return new Date().toLocaleString();
    }
}