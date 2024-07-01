//Prints: "I am happy, haha!"
let laugh = function(giggles)
{
    let returnString = "";
    for (let i = 1; i <= giggles; i++)
        {
            returnString += "ha";
        }
    return returnString + "!"
};



//emotions("happy", laugh(2));
//Prints: "I am happy, haha!"

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ('happy', function myFunc(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += 'ha';
    }
    result += '!';
    return result;
});