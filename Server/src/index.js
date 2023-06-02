const server = require('./app')
const PORT = 3001
const { conn } = require('./database/index');



conn.sync({force: true})

server.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))



