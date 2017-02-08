'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (req, res) {
    res.writeHead(200, { 'Conntent-Type': 'text/plain' });
    res.end('Greetings');
}).listen(3000, '127.0.0.1');

(0, _test2.default)('Greetings from Test module');
console.log('Server running at http://127.0.0.1:3000/');
//# sourceMappingURL=index.js.map