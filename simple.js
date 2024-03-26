// method to be tested
const simple = val => {
    if (val % 3 == 0) {
        return 'A';
    } else if (val % 5 == 0) {
        return 'B';
    } else if (val % 7 == 0) {
        return 'C';
    } else {
        return val;
    }
}

module.exports = simple;