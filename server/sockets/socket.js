const { io } = require('../server')
io.on('connection', (client) => {
    console.log('usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado')
    });
    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })
        // if(message.usuario){
        //     callback({
        //         resp:'Todo salido bien'
        //     });
        // }else{
        //     callback({
        //         resp:'todo salio mal'
        //     })
        // }
    })
})

