var inquirer = require("inquirer")



inquirer
 .prompt([
     {
     type: "number",
     message: "Hello User. Welcome to the Just-The-Tip. \n\ How much was your check today? $",
     name: "check"
     },

     {
         type: "number",
         message: "What Percent would you tip? %",
         name: "tip"
     },

     {
        type: "confirm",
        message: "Would you like to split the check?",
        name: "split",

        if (y) {
            console.log("I'm a genius!")
        }
     }
 ]).then(function(inquirerResponse) {

    var check = parseInt(inquirerResponse.check);
    var percent = parseInt(inquirerResponse.tip) * .01;
    var tip = check * percent;
    var total = check + tip;

    console.log("the tip is $" + tip);


    console.log("the total is $" + total);
    // console.log(inquirerResponse.check)

 })
