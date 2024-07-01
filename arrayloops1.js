const donuts = 
[  
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

donuts.forEach(function(donut)
{
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
}
);
