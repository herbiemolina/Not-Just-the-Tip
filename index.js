var inquirer = require("inquirer")



inquirer
 .prompt([
     {
     type: "input",
     message: "Hello User. Welcome to the Just-The-Tip. How much was your check today",
     name: "check"
     }
 ]).then(function(inquirerResponse) {

    var check = parseInt(inquirerResponse.check);
    var tip = check * .2;
    var total = check * 1.2;

    console.log("the tip is " + tip);
    console.log("the total is " + total);
    // console.log(inquirerResponse.check)

 })
