const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema ({
    title: String,
    imgUrl: String,
    description: String
})

const Image = mongoose.model("imge",ImageSchema)
module.exports = Image