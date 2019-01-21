const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuairo conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectao');
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN'
             });
         } else {
             callback({
                 resp: 'TODO SALIO BIEN'
             });
         }*/
    });


});