let wouldYouLikeTo = true;
let accountActive = true;
let balance = 0.006;

if (!wouldYouLikeTo) //if the user doesn't want to check their balance, wish them well and exit
    {
        console.log("Have a nice day!");
    }
else if (!accountActive) //if the user's account is no longer active, inform them of next steps and exit
    {
        console.log("Your account is no longer active. Please contact bank.");
    }
else if (balance == 0) //if the balance is exactly 0, display their balance up to two decimals and exit
    {
        console.log("Your account balance is $" + balance.toFixed(2))
    }
else if (balance < 0) //if the balance is less than zero, inform them of next steps and exit
    {
        console.log("Your account balance is negative. Please contact bank.")
    }
else if (accountActive && balance > 0) //if the balance is greater than 0 display their balance up to two decimals and exit 
    {
        console.log("Your Balance is $" + balance.toFixed(2) + ".");
    }
else
    {
        console.log("We haven't gotten to try/catch yet.")
    }