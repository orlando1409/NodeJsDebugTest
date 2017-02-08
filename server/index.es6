import http from 'http';
import test from './test';

http.createServer((req, res) => {
    res.writeHead(200, {'Conntent-Type': 'text/plain'});
    res.end('Greetings');    
}).listen(3000, '127.0.0.1');

test('Greetings from Test module');
console.log('Server running at http://127.0.0.1:3000/');