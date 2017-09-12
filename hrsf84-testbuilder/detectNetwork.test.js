/*
 * You'll eventually be given instructions how to use this file
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num%2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901231') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      return true;
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511567891123456').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511567891123456789').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567891123456').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567891123456789').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
      (function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of 16', function() {
          //console.log(prefix, '= Prefix ', (prefix + '1234567891123').length);
        detectNetwork(prefix + '1234567891123').should.equal('Discover');
      });
        it('has a prefix of ' + prefix + ' and a length of 19', function() {
          //console.log(prefix, '= Prefix ', (prefix + '1234567891123456').length);
        detectNetwork(prefix + '1234567891123456').should.equal('Discover');
      });
    })(prefix)
  } 
});




describe('Maestro', function() {
  var should = chai.should();

  var prefixes = [5018, 5020, 5038, 6304];
  for (var i = 0; i < 4; i++) {
    
    (function(i) {
      for (var length = 12; length <= 19; length++) {
        var placeHolders = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, 0, 11, 1, 22, 333, 4444, 55555, 666666, 7777777, 88888888];
          (function(length) {
          it('has a prefix of ' + prefixes[i] + ' and a length of ' + length, function() {
           

              detectNetwork(prefixes[i] + '5678901' + placeHolders[length]).should.equal('Maestro');
            });
          })(length)
      } 
    })(i);
  }
});




describe('should support China UnionPay', function() {
  var should = chai.should();
  for (var prefix = 622126; prefix <= 622925; prefix++) {
      (function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of 16', function() {
          //console.log(prefix, '= Prefix ', (prefix + '7890123456').length);
        detectNetwork(prefix + '7890123456').should.equal('China UnionPay');
      });
         it('has a prefix of ' + prefix + ' and a length of 17', function() {
          //console.log(prefix, '= Prefix ', (prefix + '78901234567').length);
        detectNetwork(prefix + '78901234567').should.equal('China UnionPay');
      });
          it('has a prefix of ' + prefix + ' and a length of 18', function() {
            //console.log(prefix, '= Prefix ', (prefix + '789012345678').length);
        detectNetwork(prefix + '789012345678').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 19', function() {
          //console.log(prefix, '= Prefix ', (prefix + '7890123456789').length);
        detectNetwork(prefix + '7890123456789').should.equal('China UnionPay');
      });
    })(prefix)
  } 

  for (var prefix = 6282; prefix <= 6288; prefix++) {
      (function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of 16', function() {
          //console.log(prefix, '= Prefix ', (prefix + '567890123456').length);
        detectNetwork(prefix + '567890123456').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 17', function() {
          //console.log(prefix, '= Prefix ', (prefix + '5678901234567').length);
        detectNetwork(prefix + '5678901234567').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 18', function() {
          //console.log(prefix, '= Prefix ', (prefix + '56789012345678').length);
        detectNetwork(prefix + '56789012345678').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 19', function() {
          //console.log(prefix, '= Prefix ', (prefix + '567890123456789').length);
        detectNetwork(prefix + '567890123456789').should.equal('China UnionPay');
      });
    })(prefix)
  } 

for (var prefix = 624; prefix <= 626; prefix++) {
      (function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of 16', function() {
          //console.log(prefix, '= Prefix ', (prefix + '4567890123456').length);
        detectNetwork(prefix + '4567890123456').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 17', function() {
          //console.log(prefix, '= Prefix ', (prefix + '45678901234567').length);
        detectNetwork(prefix + '45678901234567').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 18', function() {
          //console.log(prefix, '= Prefix ', (prefix + '456789012345678').length);
        detectNetwork(prefix + '456789012345678').should.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 19', function() {
          //console.log(prefix, '= Prefix ', (prefix + '4567890123456789').length);
        detectNetwork(prefix + '4567890123456789').should.equal('China UnionPay');
      });
    })(prefix)
  } 




});














describe('should support Switch', function() {
  var should = chai.should();

var prefixList = [4903, 4905, 4911, 4936, 6333, 6759];
for (var i = 0; i < prefixList.length; i++) {
var prefixToUse = prefixList[i];

      (function(prefixToUse) {
        it('has a prefix of ' + prefixToUse + ' and a length of 16', function() {
          //console.log(prefixToUse, '= prefixToUse ', (prefixToUse + '567890123456').length);
        detectNetwork(prefixToUse + '567890123456').should.equal('Switch');
      });
        it('has a prefix of ' + prefixToUse + ' and a length of 18', function() {
          //console.log(prefixToUse, '= prefixToUse ', (prefixToUse + '56789012345678').length);
        detectNetwork(prefixToUse + '56789012345678').should.equal('Switch');
      });
        it('has a prefix of ' + prefixToUse + ' and a length of 19', function() {
          //console.log(prefixToUse, '= prefixToUse ', (prefixToUse + '567890123456789').length);
        detectNetwork(prefixToUse + '567890123456789').should.equal('Switch');
      });
    })(prefixToUse)
  }


var prefixList2 = [564182, 633110];
for (var k = 0; k < prefixList2.length; k++) {
var prefixToUse2 = prefixList2[k];

      (function(prefixToUse2) {
        it('has a prefix of ' + prefixToUse2 + ' and a length of 16', function() {
          //console.log(prefixToUse2, '= prefixToUse2 ', (prefixToUse2 + '7890123456').length);
        detectNetwork(prefixToUse2 + '7890123456').should.equal('Switch');
      });
         it('has a prefix of ' + prefixToUse2 + ' and a length of 18', function() {
          //console.log(prefixToUse2, '= prefixToUse2 ', (prefixToUse2 + '789012345678').length);
        detectNetwork(prefixToUse2 + '789012345678').should.equal('Switch');
      });
        it('has a prefix of ' + prefixToUse2 + ' and a length of 19', function() {
          //console.log(prefixToUse2, '= prefixToUse2 ', (prefixToUse2 + '7890123456789').length);
        detectNetwork(prefixToUse2 + '7890123456789').should.equal('Switch');
      });
    })(prefixToUse2)
   }
 



});



