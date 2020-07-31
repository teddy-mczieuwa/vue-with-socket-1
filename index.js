const express = require('express')()
const http = require('http').Server(express)
const io = require('socket.io')(http)

const position = {
    x: 200,
    y: 200
}

io.on('connection', socket => {
    socket.emit('position', position)

    socket.on('move', data => {
        switch (data) {
            case 'left':
                position.x -= 5
                io.emit('position', position)
                break;
            case 'right':
                position.x += 5
                io.emit('position', position)
                break;

            case 'up':
                position.y -= 5
                io.emit('position', position)
                break;

            case 'down':
                position.y += 5
                io.emit('position', position)
                break;
          
        }
    })
})


const PORT = 5000
http.listen(PORT, () => {
    console.log('app is listening on port ' + PORT)
})

