let flavor = "pistachio";
let topping = "sprinkles";
let vessel = "wafer cone";

if ((flavor == "vanilla" || flavor == "chocolate") && (topping == "peanuts" || topping == "sprinkles" && (vessel == "sugar cone" || vessel =="wafer cone"))) //verification of whether the user's order is valid
    {
        console.log("Great choice! Your ice cream is at the next window.") //if the user's order is valid, inform them of this and exit
        // console.log(flavor + " " + topping + " " + vessel) //this is only here to see what values have been passed; line should be commented out completely
    }
else
    {
        console.log("Your order could not be completed. Please see our menu and try once more.") //if the user's order is invalid, inform them of this and exit
    }