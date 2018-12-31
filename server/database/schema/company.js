const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  id: {
    unique: true,
    type: String
  },
  company: String,
  logo: String,
  info: String,
  hot: String,

  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

jobSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }

  next()
})

mongoose.model('Company', jobSchema)