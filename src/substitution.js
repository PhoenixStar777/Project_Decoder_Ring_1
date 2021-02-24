// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//will need map and 
//after defining encode and decode, return a decoded message
//ykrrpik is the result of encode
//if either encode, else to assume the other one (without typing decode)
//

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let correctAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!input || !alphabet || alphabet.length !== 26) return false
     for(let i = 0; i < alphabet.length; i++){
       for( let j = i+1; j < alphabet.length; j++){
        if (alphabet[i] === alphabet[j]){
          return false;
         }  }
        //define encode and decode 
        //
       }
       let cypher = [];
       
       if (encode){
         for(let i = 0; i < 26; i++){
           cypher[correctAlphabet[i]] = alphabet[i];
         } 
       } else {
          for (let i = 0; i < 26; i++) {
            cypher[alphabet[i]] = correctAlphabet[i];
          }          
       }
         let result = input.toLowerCase().split("").map(element => {
           if (element === " ") return (" ") 
            return cypher[element];
      
         })
              return result.join("");
    
        
     

    

  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
