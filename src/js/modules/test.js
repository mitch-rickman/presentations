function Test( amount ) {
    this.amount = amount;
};

Test.prototype.getAmount = () => {
    return this.amount;
}

module.exports = Test;
