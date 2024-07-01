const myFlawlessArray = ["A", "B", "C", "D"];

function myDopeAssFunction(element, index, array)
{
    console.log("Element", element);
    console.log("Index", index,);
    console.log("Array", array);
}

myFlawlessArray.forEach(myDopeAssFunction);

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(content, index) // if you're trying to parse and manipulate individual array indices with an inline function, make sure you're using multiple arguments in order to figure out which one
{
    if (content % 3 === 0)
    {
        test[index] += 100;
    }
}
);
console.log(test);

const doItAgain = test.map(function(elemenohpee)
{
    elemenohpee = elemenohpee * 10;
    return(elemenohpee);
}
);
console.log(doItAgain);

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const verify = [57.76, 21.99, 39.11, 115.13, 13.97, 11.38, 33.48, 14.94, 11.5, 114.1, 117.53, 115.11, 7.79, 2.55];
const totals = bills.map(function(tax)
{
    tax += (tax * .15);
    return tax.toFixed(2);
} 
);
console.log(totals);

const matchy = function(testUm)
{
    for (m = 0; m <= totals.length; m++)
    {
        if (totals[m] == verify[m])
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}


if (matchy)
{
    console.log("Matchy!");
}
else
{
    console.log("They do not match!");
}