function arraySort(anArray){
      if (typeof anArray === 'number'){  //does not accept numbers as input
         return 'invalid input';
       }
            else if (typeof anArray === 'string'){  //does not accept strings as input
                 return 'invalid input'; 
            }
                  else{ var evens = []; //array to hold even numbers
                        var odds  = []; //array to hold odd numbers
                        var chars = []; //array ti hold char strings
                        for (var num = 0; num < anArray.length; num++){  //loop through
                                    if ((anArray[num] % 2) === 0){
                                         evens.push(anArray[num]);
                                    }
                                      else if ((anArray[num] % 2) === 1){
                                           odds.push(anArray[num]);
                                      }
                                          else {
                                             chars.push(anArray[num]); 
                  } }  }var objArray = {
                                evens: evens.sort(), 
                                odds:  odds.sort(), 
                                chars: chars.sort()
                              }; 
                           return objArray;  
}  
//console.log(arraySort([4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f']));
module.exports = arraySort;