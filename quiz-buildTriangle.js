// We've given you one function `makeLine()` to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

var line ="";
function makeLine(length)
{
    let returnString = "";
    for (let j = 1; j <= length; j++)
    {
        returnString += "* "
    }
    return returnString + "\n";
}
/*
function makeLine(length) {
    var let = "";
    for (let j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }
*/

function buildTriangle(numberOfLines)
{
    var triangle ="";
    for (lineNumber = 1; lineNumber <= numberOfLines; lineNumber++)
    {
        triangle += (makeLine(lineNumber));
    }
    console.log(triangle)
}

buildTriangle(4)

function geeWhizMister (callBackFunc)
{
    
}