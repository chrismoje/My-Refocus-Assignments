// HOME ASSIGNMENT-3 TASK 1 OPERATORS AND FUNCTIONS
//CHRIS MOJE

//TIP CALCULATOR

let MainMealPrice = 3500; //variable for the main dish price
let SideMealPrice = 2500; //variable for the side meal price
let DrinksPrice = 500; // variable for the drinks price
let TipPercentage = 0.10; //10% Tip 
let TotalBill = MainMealPrice + SideMealPrice + DrinksPrice; // formula to sum up the total meal price

//function to calculate the tip based on the total meal price
function CalculateTip (TotalBill){
    TotalTip = TotalBill * TipPercentage;
    return TotalTip;
}

console.log(CalculateTip(TotalBill)); // display the result