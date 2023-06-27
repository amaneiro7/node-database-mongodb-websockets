import mongoose from 'mongoose'

const Schema = mongoose.Schema
const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'user'
    }]
})

const model = mongoose.model('chat', mySchema)
export default model