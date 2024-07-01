let laugh = function(giggles)
{
    let returnString = "";
    for (let i = 1; i <= giggles; i++)
        {
            returnString += "ha";
        }
    return returnString + "!"
};



console.log(laugh(5));