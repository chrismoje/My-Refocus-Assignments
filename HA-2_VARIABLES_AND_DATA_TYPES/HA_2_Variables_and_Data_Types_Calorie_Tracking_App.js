//Home Assignment 2 Task 1 Variables and Data Types
//CHRIS MOJE

// Calories Burned per 30mins= 225, 
let caloriesburnedperminute = 225/30; // Calories Lost per Minute, 225/30 = 7.5Cal
let runningdurationperDay_mins = 30; // running for only 30minutes per day
let runningdurationperDay_Hours = 30/60; // convert minutes in hours
let totalrunningDuration = 15; // how many days he will run
let totalCaloriesBurned = caloriesburnedperminute * runningdurationperDay_mins * totalrunningDuration; // Formula to get the total calories burned
console.log(`Great work Sam! After  ${runningdurationperDay_Hours} hours of cycling everyday for ${totalrunningDuration} days, you may loose a total of ${totalCaloriesBurned} of Calories.`); // Display to Console