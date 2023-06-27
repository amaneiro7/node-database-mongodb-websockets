import mongoose from 'mongoose'

const Schema = mongoose.Schema
const mySchema = new Schema({
    user: {
        type: String,
        required: true
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