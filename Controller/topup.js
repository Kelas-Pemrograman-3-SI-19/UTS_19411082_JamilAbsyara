const topupModel = require('../model/topup')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        topupModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input topup'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input topup'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        topupModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        topupModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })