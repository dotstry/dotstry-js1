const grid = 
[
[ 1,  2,  3,  4,  5],
[ 6,  7,  8,  9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
];

for (let r = 0; r <grid.length; r++)
{
    for (let c = 0; c < grid[r].length; c++)
    {
        console.log(grid[r][c]);
    }

}

const donutBox =
[
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (let row = 0; row < donutBox.length; row++)
{
    for (let column = 0; column < donutBox[row].length; column++)
    {
        console.log(donutBox[row][column]);
    }
}

let numbers =
[
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let numberRow = 0; numberRow < numbers.length; numberRow++)
{
    for (let numberColumn = 0; numberColumn < numbers[numberRow]; numberColumn++)
    {
        if (numbers[numberRow][numberColumn] % 2 === 0)
        {
            numbers[numberRow][numberColumn] = "even";
        }
        else
        {
            numbers[numberRow][numberColumn] = "odd";
        }
    }
}
console.log(numbers);