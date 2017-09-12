
var dataSet = [
   
    { name: 'Diner\'s Club',
      numberLength: [14],
      numberStart: ['38', '39']
    },
    
    { name: 'American Express',
      numberLength: [15],
      numberStart: ['34', '37']
    },
    
    { name: 'Visa',
      numberLength: [13, 16, 19],
      numberStart: ['4'] // 4
    },
    
    { name: 'MasterCard',
      numberLength: [16],
      numberStart: ['51', '52', '53', '54', '55']
    },
    
    { name: 'Discover',
      numberLength: [16, 19],
      numberStart: ['6011', '65'],
      numStartRange: ['644', '649']
    },
    
    { name: 'Maestro',
      numberLength: [12, 13, 14, 15, 16, 17, 18, 19],
      numberStart: ['5018', '5020', '5038', '6304']
    },
    
    { name: 'China UnionPay',
      numberLength: [16, 17, 18, 19],
      numberStart: ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'], 
      numStartRange: ['622126', '622925']
    },
    
    { name: 'Switch',
      numberLength: [16, 18, 19],
      numberStart: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'], 
    }
    
    ];

 
 
 
    
    
var detectNetwork = function(cardNumber) {


    function checkPrefixMatchWithRange (obj, cardNumber){
     
     if (obj.hasOwnProperty('numStartRange')) {
           for (var loopedIndexes = obj.numStartRange[0]; loopedIndexes <= obj.numStartRange[1]; loopedIndexes++) {
                var prefixUsedHere = cardNumber.substring(0, obj.numStartRange[0].length);
                if(prefixUsedHere == loopedIndexes) { 
                  return true;
                }
              }
      }
    }
      
//create prefix and check the prefix for a match
    function checkPrefixMatch (obj, cardNumber) {
        for (var j = 0; j < obj.numberStart.length; j++) {
          
          var prefixUsed = cardNumber.substring(0, obj.numberStart[j].length);
          for (var k = 0; k < obj.numberStart.length; k++) {
          
            if (prefixUsed === obj.numberStart[k]) {
              //console.log(prefixUsed);
              return true;
            }
          }
        }
      
    }
    
//check length for a match
    function checkLengthMatch (cardNumber, obj) {
        for (var m = 0; m < obj.numberLength.length; m++){
          if (cardNumber.length === obj.numberLength[m]) {
            return true;
          }
        }
    }
    

//longer prefix check 
function findLongestPrefix (array) {
  if (ret.length === 1) { return ret[0]; }
  if (ret.length > 1) {
    if ( ret[0] === 'Visa') { return 'Switch'; }
    if ( ret[1] === 'Visa') { return 'Switch'; }
  }
}
    

//core function 
var ret = [];
    for (var i = 0; i < dataSet.length; i++) {
      if ((checkPrefixMatch(dataSet[i], cardNumber) === true) || (checkPrefixMatchWithRange(dataSet[i], cardNumber)) === true) { 
        var currentSet = dataSet[i];
        if (checkLengthMatch(cardNumber, currentSet) === true) {
          //console.log( dataSet[i].name);
          ret.push(dataSet[i].name);
          
        }
        if(dataSet[i].hasOwnProperty('numStartRange')) {
          checkPrefixMatchWithRange(dataSet[i], cardNumber);
        }
      }
    }
     var answer = findLongestPrefix(ret);
     return answer;
};
