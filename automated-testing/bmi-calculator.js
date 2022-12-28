// Module 1 Home Assignment 11
// Chris Moje
// BMI Calculator

// this formula applies to people age 20 and above:

var bmi_index = 0; //initialize the global variable to zero




function CalculateBMI_metric (height_m,weight_kg){

let bmi_index = weight_kg / Math.pow(height_m,2)


if ((bmi_index <= 15)) {
   let bmi_interpret = 'Very severely underweight';
    return bmi_interpret;
  


} else if ((bmi_index >15 ) && (bmi_index < 16)) {
   let bmi_interpret = 'Severely underweight';
   return bmi_interpret;
  

} else if ((bmi_index => 16) && (bmi_index < 18.5)) {
    let bmi_interpret = 'Underweight';
   return bmi_interpret;
  


} else if ((bmi_index => 18.5) && (bmi_index < 25)) {
    let bmi_interpret = 'Normal';
   return bmi_interpret;
    

} else if ((bmi_index => 25) && (bmi_index < 30)) {
    let bmi_interpret = 'Overweight';
    return bmi_interpret;
 
} else if ((bmi_index => 30) && (bmi_index < 35)) {
    let bmi_interpret = 'Moderately Obese';
    return bmi_interpret;

} else if ((bmi_index => 35) && (bmi_index < 40)) {
    let bmi_interpret = 'Severely Obese';
    return bmi_interpret;
 
} else if (bmi_index=> 40) {
    let bmi_interpret = 'Very Severely Obese'
    return bmi_interpret;
   // console.log(bmi_interpret);
};    
} 

    

//CalculateBMI_metric(1.75,80);

module.exports = CalculateBMI_metric
//module.exports = bmi_interpret

