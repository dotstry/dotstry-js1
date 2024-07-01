var junk = ["pi","pi", "pi", "pi"]

console.log(junk[0]);
const donuts = [  
  "glazed",                 // index is 0
  "chocolate frosted",      // index is 1
"cinnamon",               // index is 2
"sprinkled",              // index is 3
"powdered",               // index is 4  
"cinnamon sugar",         // index is 5
"glazed cruller",         // index is 6
"chocolate cruller",      // index is 7
"cookies",                // index is 8
"Boston creme",           // index is 9
"powdered jelly filled",  // index is 10
"creme de leche",         // index is 11
"glazed donut holes",     // index is 12
"blueberry donut holes",  // index is 13 
"cake donut holes",       // index is 14
"chocolate donut holes"   // index is 15
]
  console.log(donuts[11]); // "creme de leche"


const udaciFamily = ["Julia", "James", "Some Other Sucker", "Couldn't be me"]

for (j = 0; j< udaciFamily.length; j++)
{
  let printThisArray = []
  printThisArray[j] = udaciFamily[j];
  console.log(printThisArray[j]);
}


const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log("[" +  crew[0] + ", " + crew[1] + ", " + crew[2] + ", " + crew[3] + ", " + crew[4] + ", " + crew[5] + "]" );
console.log(crew);

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (j = 0; j < prices.length; j+=2)
{
  if (j != 4)
    {
      prices[j] = (prices[j] * 2);
    }
  
}
console.log(prices);

// const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

let newlineTest = [2.2, 4.44, 6.666, 8.8888, 10.10, 12.12, 14.1414, 16.161616, 18.181818181818, 20.20, 22.22, 24.24, 26.26];
let newLineTest2 = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "Julia", "James", "Some Other Sucker", "Couldn't be me", captain, second, pilot, companion, mercenary, mechanic];
console.log(newlineTest);
console.log(newLineTest2);

donuts.splice(1170, 0, "mochi trans pride", "mochi gay pride", "creampie special");

console.log(donuts);

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");
rainbow.push("Octarine");

console.log(rainbow);

function hasEnoughPlayers(team)
{
  if (team.length >= 7) //don't forget to wrap your ifs in parenthesis, else you'll get Unexpected identifier 'team'
    {
      return(true);
    }
  else
    {
      return(false);
    }
}

const team1 = ["Safia Griffin", "Liberty Tate", "Brenda Sykes", "Sinead Watkins", "Annalise Barnes", "Katrina Bruce", "Ahmad Cunningham"];
const team2 = ["Lyla Nicholson", "Bertie Gould", "Wade Hawkins"];
const team3 = [];
const team4 = ["Antony Archer", "Ashton Newman", "Lachlan Lawrence", "Regan Mcguire", "Zoya Berry", "Neo Camacho", "Abraham O'Quinn", "Shawn Mcdowell", "Jane Winter", "Sian Reeves"];

console.log(hasEnoughPlayers(team1));
console.log(hasEnoughPlayers(team2));
console.log(hasEnoughPlayers(team3));
console.log(hasEnoughPlayers(team4));


const doctor = "Simon";
const sneakernet = "River";
const shepherd = "Book";


crew.push(shepherd, doctor, sneakernet);
console.log(crew);


const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
let theStringInquestion= turnMeIntoAString.join("");
console.log(theStringInquestion);


const holes = ["First", "Second", "Third", "Fourth"];
/*for (q = 0; q < holes.length; q++)
{
  holes[q] += "hole";
}

console.log(holes)*/
 donuts.forEach(function(donut)
{
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
}
);

holes.forEach(function(hole)
{
  hole += " hole"
  hole = hole.toUpperCase();
  console.log(hole);
}
);
/*holes.forEach(function(hole)
{
    hole += " hole";
    hole = hole.toUpperCase();
    console.log(hole);
}
);
*/
