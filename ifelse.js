const a = 1;
const b = 2;

if (a > b)
    {
        console.log("A is greater than b");
    }
    else
    {
        console.log("A is less than or equal to b");
    }




let c = 3;
let d = 4;

if (c > d)
    {
    console.log("c is greater than d");
    c = c + 2;
    }
else
    {
    console.log("c is less than or equal to b");
    }


const weather = "rain";

if (weather == "snow")
    {
        console.log("Bring a heavy coat.")
    }
    else if (weather == "rain")
    {
        console.log("Bring a jacket")
    }
    else
    {
        console.log("Bring what you are wearing now.")
    }

const money = 100.50;
const price = 100.50;
    
if (money > price) {
    console.log("You paid extra, here's your change.");
    } else if (money === price) {
      console.log("You paid the exact amount, have a nice day!");
    } else {
      console.log("That's not enough, you still owe me money.");
    }



    const runner = "Kendyll";
    const position = 22;
    let medal;
    
    if(position === 1) {
      medal = "gold";
    } else if(position === 2) {
      medal = "silver";
    } else if(position === 3) {
      medal = "bronze";
    } else {
      medal = "pat on the back";
    }
    
    console.log(runner + " received a " + medal + " medal.");    

let thenumber = 3;
let evenoroddtest = (thenumber % 2);
if (evenoroddtest === 0)
    {
        console.log("This number is even");
    }
    else
    {
        console.log("This number is odd");
    }

let numberofmusicians = -6;

if (numberofmusicians <= 0)
{
    console.log( numberofmusicians + " musicians is not a musical group.");
}
else if (numberofmusicians === 1)
{
    console.log( numberofmusicians +  " musicians is a solo gig, not a group.");   
}
else if (numberofmusicians === 2)
{
    console.log( numberofmusicians + " musicians is a Duet.");   
}
else if (numberofmusicians === 3)
{
    console.log( numberofmusicians + " musicians is a Trio.");   
}
else if (numberofmusicians === 4)
{
    console.log( numberofmusicians + " musicians is a Quartet.");   
}
else if (numberofmusicians === 5)
{
console.log( numberofmusicians + " musicians is a Quintet.");   
}
else if (numberofmusicians > 5)
{
console.log(numberofmusicians + " musicians is a pretty big band.");   
}
else
{
    console.log(numberofmusicians + " musicians is a wild number or series of letters of musicians.");
}


console.log(!(4 === 4) && "STRing" === "STRing");
