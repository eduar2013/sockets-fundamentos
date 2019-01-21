var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});


//enviar informacion
socket.emit("enviarMensaje", {
    usuario: 'Luis eduardo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});