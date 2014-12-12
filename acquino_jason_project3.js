//alert("JavaScript works!");

// Jason Acquino
// December 11, 2014
// SDI 1412 Project 3


// Global Variables
var venue = ["Yacht", "House", "Apartment", "Tent"];
var booze = ["vodka", "rum", "whiskey", "beer", "soda"];

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
// venue capacities
var capacityData = function (json) {
    for (var i = 0; i < json.capacities.length; i++){
        var rightFit = json.capacities[i];
        console.log("The " + rightFit.venue + " has a maximum capacity of " + rightFit.capacity + ".");
    };
};
            // guests that are coming
            var guestData = function (json2) {
                for (var i = 0; i < json2.rsvps.length; i++){
                    var guestsComing = json2.rsvps[i];
                    console.log(guestsComing.name + " is definitely " + guestsComing.reply + ".");
                };
    
            };
                    // which venue is best for the amount of guests that are definitely coming
                    var perfectVenue = function (guestAmount, capacity) {
                        if (guestAmount <= 10 && capacity <= 10) {
                        console.log("The " + venue[2] + " seems like the best place for this party.");
                        } else
                            console.log("The " + venue[3] + " seems like the best place for this party.");
                            return perfectVenue = 10,10
                    };
                
// Number Function
var buyBooze = function (beerMoney) {
    var beerPrices = 12,
        sixPack;
        if (beerMoney < beerPrices) {
            console.log("Our friends are real drinkers, that's not enough " + booze[3] + " money.");
            sixPack = 0;
        }
        else {
            sixPack = Math.floor(beerMoney / beerPrices);
        }
        return sixPack;
};

// String Function
var successfulParty = function (drunkGuests) {
    var beersFinishes = 84;
        while (beersFinishes > 0) {
            console.log("Drink up Nick, only " + beersFinishes + " " + booze[3] + "'s left!");
            beersFinishes--;
    };
            var partyComplete = drunkGuests;
            return partyComplete + ".  He trashed my apartment and drank all of my beer...Best party I've ever been to!"
};


// Main Code

//procedure
partyPlan(true);

//boolean return
capacityData(json);
guestData(json2);
booleanReturn = perfectVenue(10,10);
console.log(booleanReturn + " guests are coming!");

//number function return
var openBar = buyBooze(168);
console.log("Unless Nick Nolte shows up, " + openBar + " six packs of " + booze[3] + " is going to be more than enough.");
console.log("Holy sh*t, Nolte really showed up at my " + venue[2] + "party!");

//string return
stringReturn = successfulParty("Nolte's drunk");
console.log(stringReturn);



