let degree = "doctorate";
let salary = null;
switch (degree)
    {
        default:
            salary = 25636;
            break;
        case "highSchool":
            salary = 35256;
            break;
        case "associates":
            salary = 41496;
            break;
        case "bachelors":
            salary = 59124;
            break;
        case "masters":
            salary = 69732;
            break;
        case "professional":
            salary = 89960;
            break;
        case "doctorate":
            salary = 84396;
            break;    
    }

console.log("In 2015, a person with a/an " + degree + " degree earned an average of $" + salary + "\/year.")