// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//false if the shift value is equal to 0, less than -25, greater than 25, or not present.
//


const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if(shift === 0||shift < -25||shift > 25||shift === undefined){
      return false;
        }
        //if not encoding, to get to decoded shift = shift-(shift*2)
        if(!encode){
          shift = shift - (shift *2);
        }
    //create accumulator
    let accumulator = "";
    //new string
    //eliminate that which would be false
     //for loop
      for( let i = 0; i < input.length; i++){
       let str = input[i].toLowerCase();
       let comparer = str.charCodeAt();       
      if(comparer >= 97 && comparer <= 122){
        const letterNum = comparer - 97;
        let letterShift = shift + letterNum;
        if (letterShift >= 0){
          letterShift = (letterShift %26) + 97;
        }else{
          letterShift += 26;
          letterShift = (letterShift %26) + 97;       
         }
         accumulator += String.fromCharCode(letterShift);
      // accumulator += String.fromCharCode(((comparer - 97 + shift) % 26) + 97)

      }else{
        accumulator += input[i];
      }      
        
                   
        }
        return accumulator  

      }

             
  
  
    return {
      caesar,
    };
  })();

module.exports = caesarModule.caesar;
