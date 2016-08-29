// api file
var PostTest = require('./endpoints/post/post-test');

var t = new PostTest( "working" );

console.log( t.getS(); );
