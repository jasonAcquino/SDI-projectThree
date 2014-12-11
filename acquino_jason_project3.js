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
        console.log ("We have narrowed it to four venues.  Time to figure out which one will be best for our guests!");
    };
};

// Boolean Function
var capacityData = function (json) {
    for (var i = 0; i < json.capacities.length; i++){
        var rightFit = json.capacities[i];
        console.log("The " + rightFit.venue + " has a maximum capacity of " + rightFit.capacity + ".");
    };
};

            var guestData = function (json2) {
                for (var i = 0; i < json2.rsvps.length; i++){
                    var guestsComing = json2.rsvps[i];
                    console.log(guestsComing.name + " is definitely " + guestsComing.reply + ".");
                };
    
            };
                    var perfectVenue = function (guestAmount, capacity) {
                        if (guestAmount <= 10 && capacity <= 10) {
                        console.log("The " + venue[2] + " seems like the best place for this party.");
                        } else
                            console.log("The " + venue[3] + " seems like the best place for this party.");
                            return perfectVenue = 10,10
                    };
                
// Number Function




// Main Code
partyPlan(true);
capacityData(json);
guestData(json2);
booleanReturn = perfectVenue(10,10);
console.log(booleanReturn + " guests are coming!");


    