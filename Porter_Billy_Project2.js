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
        console.log("It is ok to proceed to the next step.");
    } else {
        console.log("What were you thinking?");
    }
    
};

//Number Function
var storeCheck = function(allStores) {
    
    var numStores;
    
    while (allStores > 0) {
        
        allStores = allStores - 1
        
        if (allStores > 0) {
            console.log("There are " + allStores + " more stores to check.");
        } else {
            console.log("There are " + allStores + " stores left to check.");
        }
        numStores = allStores;
    }
    return numStores;
};

// Array Function
var storeOrder = function(nameStore) {
    
    var done;
    
    for (var i = 0; i < nameStore; i++){
        console.log("I just visted " + myStores[i] + ".");
        
        if (i < nameStore){
             console.log("One more store down.");
        } else {
            console.log("I checked all stores.");
        }
        done = myStores.toString();
    }
    return done;
};

//Boolean Function
var myCash = function(buyIt) {
    
    var itsMine;
    
    if (buyIt == myCash === false){
        itsMine = true;
    } else {
        itsMine = false;
    }
    return itsMine;
};

//main code
var researchDone = myResearch(research);
var totalStores = storeCheck(myStores.length);
console.log(totalStores);
var checked = storeOrder(myStores.length);
console.log(checked);
var budget = myCash(myBudget);
console.log(budget);
