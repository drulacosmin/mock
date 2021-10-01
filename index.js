var http = require('http');
var mockserver = require('mockserver');
 
http.createServer(mockserver('/Users/cosmindrula/Documents/mock/mocks')).listen(9001);