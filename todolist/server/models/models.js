const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ListSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    isFinish: {
      type: Boolean,
      default: false
    }
})

const model = mongoose.model('List', ListSchema)

module.exports = model
