import Model from './models.js'

export default class Store {
  add (user) {
    const myMessage = new Model(user)
    return myMessage.save()
  }

  async getAll () {
    return await Model.find()
  }

  async getById (id) {
    if (await this.ifExist(id)) return await Model.findOne({ _id: id })
  }

  async update (id, name, updatedTime) {
    if (await this.ifExist(id)) {
      return await Model.findOneAndUpdate(
        { _id: id },
        { $set: { name, date: updatedTime } },
        { new: true }
      )
    }
  }

  async delete (id) {
    if (await this.ifExist(id)) return await Model.findByIdAndDelete({ _id: id })
  }

  async ifExist (id) {
    const validateId = await Model.exists({ _id: id })
    if (!validateId) {
      throw new Error('Id no existe')
    }
    return true
  }
}
