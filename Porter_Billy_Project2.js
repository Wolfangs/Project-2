//alert("JavaScript works!");

//Billy Porter
//SDI 1308
//Assignment 2
//August 15, 2013

var research = true;
var newTele = "Samsung";
var myBudget = 500;
var myStores = ["Best Buy", "Wal-Mart", "HHGregg", "Sears", "K-Mart"];

//My Outputs
console.log ("I'm in the market to buy a new " + newTele + " television.");
console.log ("My budget is $" + myBudget + ".");
console.log ("I'm going to check at " + myStores.length + " different stores for the best deal.");
console.log ("It is " + research + " that I have done my research.");

//Procedure

var myResearch = function(research) {
    
    if (research == true) {
        console.log("It is ok to procede to the next step.");
    } else {
        console.log("What were you thinking?");
    }
    
};


//main code
var researchDone = myResearch(research);

