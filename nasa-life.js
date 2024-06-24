let x = 60;
while( x >= 0)
    {
        switch (x)
        {
            default:
                {
                    console.log("T-Minus " + x + " seconds");
                    break;
                }
            case 50:
                {
                    console.log("Orbiter transfers from ground to internal power")
                    break;
                }
            case 31:
                {
                    console.log("Ground launch sequencer is go for auto sequence start")
                    break;
                }
            case 16:
                {
                    console.log("Activate launch pad sound suppression system")
                    break;
                }
            case 10:
                {
                    console.log("Activate main engine hydrogen burnoff system")
                    break;
                }
            case 6:
                {
                    console.log("Main engine start")
                    break;
                }
            case 0:
                {
                    console.log("Solid rocket booster ignition and liftoff!")
                    break;
                }
        }
            
        x--;
    }

for (let i = 0; i < 6; i++)
    {
        for (let x = 2; x > 0; x--)
            {
            console.log("Printing out i = " + i + " x = " + x);
            
            }
    }

//recreating this as a for loop

let y = 9;
while (y >= 1) 
    {
        console.log("hello " + y);
        y = y - 1;
    }

for (z = 9; z >=1; z --)
    {
        console.log("hello " + z);
    }

for (a = 5; a < 10; a++) 
    {
        console.log(a);
    }

for (let k = 12; k < 21; k++)
    {
        console.log(k);
    }