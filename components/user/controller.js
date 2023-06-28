import Store from './store.js'
export default class Controller {
  constructor () {
    this.store = new Store()
  }

  add (name) {
    return new Promise((resolve, reject) => {
      if (!name) return Promise.reject(new Error('Invalid Name'))
      const user = {
        name,
        date: this.addTime()
      }
      this.store.add(user)
      resolve(user)
    })
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(this.store.getAll())
    })
  }

  getById (id) {
    return new Promise((resolve, reject) => {
      resolve(this.store.getById(id))
    })
  }

  update (id, name) {
    return new Promise((resolve, reject) => {
      if (!id || !name) {
        reject(new Error('Invalid data'))
        return
      }
      resolve(this.store.update(id, name, this.addTime()))
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
