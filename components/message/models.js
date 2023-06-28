import mongoose from 'mongoose'

const Schema = mongoose.Schema
const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const model = mongoose.model('Message', mySchema)
export default model
