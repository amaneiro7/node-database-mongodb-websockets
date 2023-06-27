import Store from './store.js'
export default class Controller {    
    constructor() {
        this.store = new Store()
    }
    add(user, message) {
        return new Promise((resolve, reject) => {
            if (!user || !message) {
                console.error('[messageControler] No hay usuario o mensaje');
                throw new Error('Los datos son incorrectos')
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
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.store.getAll())
        })        
    }
    
    addTime() {
        return new Date().toLocaleString();
    }
}