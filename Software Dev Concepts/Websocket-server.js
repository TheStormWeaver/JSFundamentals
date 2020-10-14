const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', function(ws) {
    ws.send('WSS Echo Server: Welcome!');

    ws.on('message', function(msg) {
        ws.send('You said: ' + msg);
    });
  
    let count = 0;
    setInterval(function() {
        ws.send('The server time is: ' + new Date());
    }, 3000);
});
