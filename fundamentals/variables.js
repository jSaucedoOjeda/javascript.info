/**
 * A variable is a named storage for data.
 */

 // To create (declare) a variable in JavaScript, use the 'let' keyword
 // And we can put some data it by using the asiggment operator
let message;
message = 'Hello';

//Or we can do it directly
let person = 'John';

//And now we can access it using the variable name:
alert(message);

//You can declare multiple variables in one line like this but it's not recommended.
let name = 'Josh', age = 16;

//In older scripts, you may also find another keyword: var
var message = 'Hello';

/**
 * The var keyword is almost the same as let. 
 * It also declares a variable, but in a slightly different, “old-school” way.
 */

 //Dont use it.

 /**
  * Variable naming
  */

//  The name must contain only letters, digits, or the symbols $ and _.
//  The first character must not be a digit.

//These two variables are different, because case Matters
let apple;
let AppLe;

/**
 * Constants
 */

 // To declare a constant variable use const instead of let
 const myBirthday = '10-08-1998';
 // Variables declared using const are called “constants”. They cannot be reassigned.
 // YWhen a programmer is sure that a variable will never change, they can declare it with const