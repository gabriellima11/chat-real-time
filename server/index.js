const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,  {cors:{origin:'http://localhost:5173'}})

io.on('connection', socket=>{
    console.log('Usuário conectado', socket.id)


    socket.on('disconnect', reason =>{
        console.log('Usuário desconectado!', socket.id)
    })

    socket.on('set_username', username =>{
        socket.data.username = username
    })

    socket.on('message', text =>{
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        })
    } )
})

server.listen(3001, () =>{console.log('Server iniciado!')})