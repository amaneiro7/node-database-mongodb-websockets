import Store from './store.js'
import config from '../../config.js'
import websocket from '../../socket.js'

export default class Controller {
  constructor () {
    this.store = new Store()
  }

  add ({ chat, user, message, file }) {
    return new Promise((resolve, reject) => {
      if (!chat || !user || !message) {
        console.error('[messageControler] No hay chat, usuario o mensaje')
        reject(new Error('Los datos son incorrectos'))
        return
      }
      let fileUrl = ''
      if (file) {
        fileUrl = `${config.host}:${config.port}/${config.publicRoute}/files/${file.filename}`
      }
      const fullMessage = {
        chat,
        user,
        message,
        date: this.addTime(),
        file: fileUrl
      }
      websocket.socket.io.emit('message', fullMessage)
      this.store.add(fullMessage)
      resolve(fullMessage)
    })
  }

  getAll (filterUser) {
  }

  getById (id) {
    return new Promise((resolve, reject) => {
      resolve(this.store.getById(id))
    })
  }

  update (id, message) {
    return new Promise((resolve, reject) => {
      if (!id || !message) {
        reject(new Error('Invalid data'))
        return
      }
      resolve(this.store.update(id, message, this.addTime()))
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        console.error('[messageControler] No hay un Id valido')
        reject(new Error('Los datos son incorrectos'))
        return
      }
      this.store.delete(id)
        .then(() => resolve())
        .catch(e => reject(e))
    })
  }

  addTime () {
    return new Date().toLocaleString()
  }
}
