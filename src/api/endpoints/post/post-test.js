function PostTest( s ) {
    this.s = s;
}

PostTest.prototype.getS = function() {
    return this.s;
}

module.exports = PostTest;
