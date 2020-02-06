function balancedParenthesis(str){

// Create a empty array
var obj1 = [];
// Declare a character stack which will hold an array of all the opening parenthesis.

let map = {
     '(': ')',
     '[': ']',
     '{': '}'
 }
 // Now traverse the expression string exp.
 // split the string
  var spl = str.split("");
 // loop through the split string
for(var i = 0; i < spl.length; i++){
 if (spl[i] === '(' || spl[i] === '{' || spl[i] === '[' ) {
       obj1.push(spl[i]);
       console.log("obj1", obj1)
     } else {
       // If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine 
       let last = obj1.pop();
         if (spl[i] !== map[last]) {
           console.log("spl[i]", spl[i])
           console.log("last", last)
           return false
           };
       }
     }
         // After complete traversal, if there is some starting bracket left in stack then “not balanced”
     if (obj1.length !== 0) {return false};
     // if it is empty
       return true;
}


 balancedParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")
 balancedParenthesis("[(])")