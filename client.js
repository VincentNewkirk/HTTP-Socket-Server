const net = require('net');

const client = new net.Socket();

client.connect({port: 8080}, (() => {
  console.log('Connected to server!');
}));