

// =========================================================================
//
// Usage:
//
//   > node calculator.js add 10 2           --> 10 + 2     = 12
//   > node calculator.js substract 10 2     --> 10 - 2     =  8
//   > node calculator.js substract 10 2 3   --> 10 - 2 - 3 =  5
//   > node calculator.js multiply 10 2      --> 10 * 2     = 20
//   > node calculator.js multiply 10        --> 10         = 10
//
// =========================================================================

var Calculator = {

  add: function() {
    var args = Object.values(arguments);
    args.unshift('add');
    return this.calculate.apply(this, args);
  },

  substract: function() {
    var args = Object.values(arguments);
    args.unshift('substract');
    return this.calculate.apply(this, args);
  },

  multiply: function() {
    var args = Object.values(arguments);
    args.unshift('multiply');
    return this.calculate.apply(this, args);
  },

  divide: function() {
    var args = Object.values(arguments);
    args.unshift('divide');
    return this.calculate.apply(this, args);
  },

  calculate: function() {
    var args = Object.values(arguments);
    if (args.length < 2) return 0;

    var operator = args[0];
    var ret = +args[1];

    for (var i = 2, length = args.length; i < length; i++) {
      var num = +args[i];
      switch (operator) {
        case 'add':
          ret += num;
          break;
        case 'substract':
          ret -= num;
          break;
        case 'multiply':
          ret *= num;
          break;
        case 'divide':
          ret /= num;
          break;
        default:
          return 0;
      }
    }
    return ret;
  }

};

// console.log('10 + 2 = ' + Calculator.add(10, 2));
// console.log('10 - 2 = ' + Calculator.substract(10, 2));
// console.log('10 * 2 * 3 = ' + Calculator.multiply(10, 2, 3));
// console.log('32 / 2 / 2 / 2 = ' + Calculator.divide(32, 2, 2, 2));

var args = process.argv;
args.splice(0, 2);

console.log(args[0] + ' result: ' + Calculator.calculate.apply(null, args));
