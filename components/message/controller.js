export default class ControllerMessage {
    constructor() {}
    addMessage(user, message) {
        return new Promise((resolve, reject) => {
            if (!user || !message) {
                console.error('[messageControler] No hay usuario o mensaje');
                throw new Error('Los datos son incorrectos')
                return false
            } 
            resolve({
                user,
                message,
                date: this.addTime()
            })            
        })
    }
    
    addTime() {
        return new Date().toLocaleString();
    }
}