function factorial(x)
{
    let solution = 1;
    while (x > 0)
        {
            solution *= x;
            x--;
        }

    return solution;
}

console.log(factorial(12));

function laugh(reps)
    {
        let text = "";
        while (reps > 0)
            {
                text += "ha"
                reps--;
            }
        return text + "!";
    }

console.log(laugh(8))


