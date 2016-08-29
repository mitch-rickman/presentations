function Test( amount ) {
    this.amount = amount;
};

Test.prototype.getAmount = function() {
    return this.amount;
}

module.exports = Test;
