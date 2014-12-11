//alert("JavaScript works!");

// Jason Acquino
// December 11, 2014
// SDI 1412 Project 3


// Global Variables
var venue = ["Yacht", "House", "Apartment", "Tent"];
var liquor = ["Vodka", "Rum", "Whiskey", "Beer", "Soda"];

// Prompt
var age = prompt("How old are you salior?");
    if (age < 21) {
        alert("Sorry, you're a little too young to party with us.  Come back in a few years.");
    } else {
        alert("Looks like you're going to be able to help, let's plan this party!");
    };
    
// Procedure
var partyPlan = function (venuesSearched) {
    if (partyPlan === false) {
        console.log ("We have too many venues to pick from, the search continues!");
    } else {
        console.log ("We have narrowed it to four venues, time to figure out which one will be best for our guests!");
    };
};




// Main Code
partyPlan(true);

    