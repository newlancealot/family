// Step one.. Roster of numbers

var roster = [2,4,4,6,9];

// step 3 using functions


function totals(roster, output) {
var sum= roster.reduce({function(sum,currentValue) {
    return sum+currentValue;
}, 0);
output(sum); 
}


function printSum(sum) {
   
    console.log("--------------");
    console.log("The sum is" + sum + ",");
    console.log("--------------");
       
}

// Step two.. calling functions

totals(roster, printSum);


