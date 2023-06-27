import Store from './store.js'
export default class Controller {    
    constructor() {
        this.store = new Store()
    }
    add(user, message) {
        return new Promise((resolve, reject) => {
            if (!user || !message) {
                console.error('[messageControler] No hay usuario o mensaje');
                reject('Los datos son incorrectos')
                return
            }
            const fullMessage = {
                user,
                message,
                date: this.addTime()
            }
            this.store.add(fullMessage)            
            resolve(fullMessage)            
        })
    }
    getAll(filterUser) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getAll(filterUser))
        })        
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            resolve(this.store.getById(id))
        })        
    }
    update(id, message) {
        return new Promise(async (resolve, reject) => {
            if (!id || !message) {
                reject('Invalid data')
                return
            }
            resolve(await this.store.update(id, message, this.addTime()))
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
                .then(() => resolve())
                .catch(e => reject(e))
        })        
    }
    
    addTime() {
        return new Date().toLocaleString();
    }
}