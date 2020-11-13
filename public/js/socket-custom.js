// io aparece gracias a la librería
var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Sin conexión al servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Rodrigo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

});