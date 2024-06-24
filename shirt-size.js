let shirtWidth = 17;
let shirtLength = 28;
let shirtSleeve = 8.13;
let size = null;
let widthSize = null;
let lengthSize = null;
let sleeveSize = null;

if (shirtWidth >= 18 && shirtWidth < 20) // Check that the shirtWidth is greater than the minimum  but less than 20, which corresponds 
    {
        widthSize = "S";
    }
else if (shirtWidth >= 20 && shirtWidth < 22)
    {
        widthSize = "M";
    }
else if (shirtWidth >= 22 && shirtWidth < 24)
    {
        widthSize = "L";
    }    
else if (shirtWidth >= 24 && shirtWidth < 26)
    {
        widthSize = "XL";
    }
else if (shirtWidth >= 26 && shirtWidth < 28)
    {
        widthSize = "2XL";
    }
else if (shirtWidth == 28) // 
    {
        widthSize = "3XL";
    }
else 
    {
        widthSize = null; // in the event that shirtWidth doesn't fall under any of these ranges, set value to null so that the final size measurement or-based algorithm automatically fails
    }

//shirt length calculations
if (shirtLength >= 28 && shirtLength < 29) // Check that the shirtLength is greater than the minimum  but less than 20, which corresponds 
    {
        lengthSize = "S";
    }
else if (shirtLength >= 29 && shirtLength < 30)
    {
        lengthSize = "M";
    }
else if (shirtLength >= 30 && shirtLength < 31)
    {
        lengthSize = "L";
    }    
else if (shirtLength >= 31 && shirtLength < 33)
    {
        lengthSize = "XL";
    }
else if (shirtLength >= 33 && shirtLength < 34)
    {
        lengthSize = "2XL";
    }
else if (shirtLength == 34) // 
    {
        lengthSize = "3XL";
    }
else 
    {
        lengthSize = null; // in the event that shirtLength doesn't fall under any of these ranges, set value to null so that the final size measurement or-based algorithm automatically fails
    }

//shirtSleeve calculations
if (shirtSleeve >= 8.13 && shirtSleeve < 8.38) // Check that the shirtSleeve is greater than the minimum  but less than 20, which corresponds 
    {
        sleeveSize = "S";
    }
else if (shirtSleeve >= 8.38 && shirtSleeve < 8.63)
    {
        sleeveSize = "M";
    }
else if (shirtSleeve >= 8.63 && shirtSleeve < 8.88)
    {
        sleeveSize = "L";
    }    
else if (shirtSleeve >= 8.88 && shirtSleeve < 9.63)
    {
        sleeveSize = "XL";
    }
else if (shirtSleeve >= 9.63 && shirtSleeve < 10.13)
    {
        sleeveSize = "2XL";
    }
else if (shirtSleeve == 10.13) // 
    {
        sleeveSize = "3XL";
    }
else 
    {
        sleeveSize = null; // in the event that shirtSleeve doesn't fall under any of these ranges, set value to null so that the final size measurement or-based algorithm automatically fails
    }
//final size calculations

if (widthSize == null)
    {
        size = null;
    }
else if (lengthSize == null)
    {
        size = null;
    }
else if (sleeveSize == null)
    {
        size = null;
    }
else if (widthSize == "3XL" || lengthSize == "3XL" || sleeveSize == "3XL") // in the event that any single measurement falls under the largest available size, 3XL, set the size to that
    {
        size = "3XL"
    }
else if (widthSize == "2XL" || lengthSize == "2XL" || sleeveSize == "2XL") //else verify against the next largest size
    {
        size = "2XL"
    }
else if (widthSize == "XL" || lengthSize == "XL" || sleeveSize == "XL") //on down to completion
    {
        size = "XL";
    }
else if (widthSize == "L" || lengthSize == "L" || sleeveSize == "L")
    {
        size = "L";
    }
else if (widthSize == "M" || lengthSize == "M" || sleeveSize == "M")
    {
        size = "M"
    }
else if (widthSize == "S" || lengthSize == "S" || sleeveSize == "S")
    {
        size = "S"
    }
else
    {
        size = null;
    }

if (size != null)
    {
        console.log("Based on all of your measurements, a size " + size + " shirt would fit you best.");
        console.log(shirtWidth);
        console.log(shirtLength);
        console.log(shirtSleeve);
        console.log(widthSize);
        console.log(lengthSize);
        console.log(sleeveSize);
    }
else
    {
        console.log("Unfortunately, your measurements suggest that you won't be comfortable in any of our shirts.");
        console.log(shirtWidth);
        console.log(shirtLength);
        console.log(shirtSleeve);
        console.log(widthSize);
        console.log(lengthSize);
        console.log(sleeveSize);
    }
