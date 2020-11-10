

var socket = io();
socket.on('connect', function () {
    console.log('conectados al servidor')
});
//escuchar informacion
socket.on('disconnect', function () {
    console.log('perdimos la conexcion')
});

//emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Paula Echeverri',
    mensaje: 'hello there'
}, function (resp) {
    console.log('se disparo  callback', resp)
});

socket.on('enviarMensaje', function (respuesta) {
    console.log('servidor:', respuesta);

})