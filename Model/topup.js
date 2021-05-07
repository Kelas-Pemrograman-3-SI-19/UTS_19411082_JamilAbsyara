const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const topupSchema = new Schema({

    pilihgame: {
        type : String
    },

    masukanuserid: {
        type : String
    },

    pilihnominaltopup:{
        type : String
    },

    pilihpembayaran: {
        type : String
    }
})

module.exports = mongoose.model('topup', topupSchema)