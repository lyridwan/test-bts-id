const  {Pool} =  require('pg')

const db =  new Pool({
    database: "shoppingdb",
    password: "Pa55w0rd",
    port: "5432",
    host: "localhost",
    user: "fortest"
})

module.exports = db