/* let x = 1;
while (x <= 10000)
    {
        console.log(x + " Mississippi!");
        x++;
    }


    while (x < 6) { console.log('Printing out x = ' + x); }
    */

let x = 1;
while (x <=100)
    {
        let fizz = "";
        let buzz = "";
        let displayText = "";
        if ((x % 3) == 0)
            {
                fizz = "Fizz";
                let displayText = "";
            }
        if ((x % 5) == 0)
            {
                buzz = "Buzz";
                let displayText = "";
            }
        if ((((x % 3) != 0) && ((x & 5) != 0)))
            {
                console.log(x.toString())
            } 
        else
            {
                console.log(displayText + fizz + buzz);
            }
        x++;
    }