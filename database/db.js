


const mysql = require('mysql')
const { dbKey } = require('../config/keys')
const db = mysql.createPool(dbKey)

module.exports = db 