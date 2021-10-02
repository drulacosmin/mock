var http = require('http');
var mockserver = require('mockserver');
 
http.createServer(mockserver('/workspace/mock/mocks')).listen(9001);