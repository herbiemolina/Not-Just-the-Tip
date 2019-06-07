//import inquirer
var inquirer = require("inquirer")


//initialize inquirer
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
     }

 ]).then(function(inquirerResponse) {
//the user can split the check
    if (inquirerResponse.split) {
        // console.log("test")
        inquirer
        .prompt([
            {
                type: "number",
                message: "How many people are in your party that are splitting the check?",
                name:"party"
            }
        ]).then(function(partyCheck) {

            var party = parseInt(partyCheck.party);
            // console.log(party)
            var check = parseInt(inquirerResponse.check);
            // console.log(check)
            var percent = parseInt(inquirerResponse.tip) * .01;
            var tip = check * percent;
            var total = check + tip;
            var splitCheck = total / party 

            console.log("The tip is: $" + tip);
            console.log("the total is: $" + total);
            console.log ("If you split the check evenly, each parton owes: $" + parseFloat(splitCheck).toFixed(2))
        })

    }
    // the user can also choose not to split the check
    else {
        // console.log("test no")

        var check = parseInt(inquirerResponse.check);
        var percent = parseInt(inquirerResponse.tip) * .01;
        var tip = check * percent;
        var total = check + tip;
    
        console.log("the tip is: $" + tip);
    
    
        console.log("the total is: $" + total);
        // console.log(inquirerResponse.check)

    }

   

 })
