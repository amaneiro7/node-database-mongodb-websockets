import Store from './store.js'
import config from '../../config.js'
export default class Controller {
  constructor () {
    this.store = new Store()
  }

  add ({ chat, user, message, file }) {
    console.log(file)
    return new Promise((resolve, reject) => {
      if (!chat || !user || !message) {
        console.error('[messageControler] No hay chat, usuario o mensaje')
        reject(new Error('Los datos son incorrectos'))
        return
      }
      let fileUrl = ''
      if (file) {
        fileUrl = `http://localhost:${config.port}/app/files/${file.filename}`
      }
      const fullMessage = {
        chat,
        user,
        message,
        date: this.addTime(),
        file: fileUrl
      }
      this.store.add(fullMessage)
      resolve(fullMessage)
    })
  }

  getAll (filterUser) {
    return new Promise((resolve, reject) => {
      resolve(this.store.getAll(filterUser))
    })
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
