/**
 * The morden mode, "use strict"
 * The directive looks like a string: "use strict" or 'use strict'.
 *  When it is located at the top of a script, the whole script works the “modern” way.
 */

 "use strict";

 //Make sure that use strict is at the top of your scripts.

 /**
  * In this code, use strict is not enabled because is bellow of the alert: 
  
    alert("some code");
    
    "use strict";
*/

//Should we "use strict" ?
/**
 *  Modern JavaScript supports “classes” and “modules” – advanced language structures
 *  (we’ll surely get to them), that enable use strict automatically. 
 * So we don’t need to add the "use strict" directive, if we use them.
 * So, for now "use strict"; is a welcome guest at the top of your scripts.
 *  Later, when your code is all in classes and modules, you may omit it.
 */