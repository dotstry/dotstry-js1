/* let eatsPlants = true;
let eatsMeat = false;
let eaterStatus = null; */

//(eatsPlants && eatsMeat) ? console.log("Omnivore") : (eatsPlants && !eatsMeat ? console.log("Herbivore") : (!eatsPlants && eatsMeat ? console.log ("Carnivore") : (console.log(Undefined)))); 

(eatsPlants && eatsMeat)
    ? eaterStatus = "Omnivore"
    : (eatsPlants && !eatsMeat)
    ? eaterStatus = "Herbivore")
    : (!eatsPlants && eatsMeat)
    ? eaterStatus = "Herbivore"
    : eaterStatus = "Unknown";

let eaterStatus = ({
    conditionA, conditionB
    }) => (
    (!conditionA)
        ? valueC
        : (conditionB)
        ? valueA
        : valueB
    );
console.log("This animal is a/an " + eaterStatus )