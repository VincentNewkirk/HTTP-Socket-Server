const net = require('net');
const http = require('http');
const client = new net.Socket();

let now = new Date().toUTCString();
let fullURL= process.argv[2]; // URL
let pathway_start = fullURL.indexOf('/');
let host_name = fullURL.slice(0,pathway_start);
let pathway = fullURL.slice(pathway_start); // URI

client.connect({port: 80, host: host_name}, ()=>{
  console.log('Connected to server.');
  client.write(
    `GET ${pathway} HTTP/1.1\n`+
    `Host: ${host_name}\n`+
    `Date: ${now}\n`+
    `Connection: Keep-Alive\n`+
    `Accept: text/html, application/json\n\n`);
  client.on('data', (data)=>{
    process.stdout.write(data);
    // client.end();
  });
});