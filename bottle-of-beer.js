let x = 99;
while (x > 0)
    {
        console.log(x + " bottles of beer on the wall, ")
        console.log( x + " bottles of beer!");
        console.log("Take one down, pass it around...");
        x--;
        switch (x)
        {
            case 1:
            {
                console.log(x + " bottle of beer on the wall!");
                break;
            }
            case 0:
            {
                console.log("No more bottles of beer on the wall!");
                break;
            }
            
            default:
            {
                console.log(x + " bottles of beer on the wall!");
                break;
            }
        }
    }