// Module 1 Home Assignment 11
// Chris Moje
// BMI Calculator

// this formula applies to people age 20 and above:

var bmi_index = 0; //initialize the global variable to zero
let bmi_interpret = " "



function CalculateBMI_metric (height_m,weight_kg){
let bmi_index = weight_kg / Math.pow(height_m,2)


if ((bmi_index <= 15)) {
    bmi_interpret = "VERY severely underweight"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;


} else if ((bmi_index >15 ) && (bmi_index < 16)) {
    bmi_interpret = "Severely underweight"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;

} else if ((bmi_index => 16) && (bmi_index < 18.5)) {
    bmi_interpret = "Underweight"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;


} else if ((bmi_index => 18.5) && (bmi_index < 25)) {
    bmi_interpret = "Normal"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;

} else if ((bmi_index => 25) && (bmi_index < 30)) {
    bmi_interpret = "Overweight"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;
 
} else if ((bmi_index => 30) && (bmi_index < 35)) {
    bmi_interpret = "Moderately Obese"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;

} else if ((bmi_index => 35) && (bmi_index < 40)) {
    bmi_interpret = "Severely Obese"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;
 
} else if (bmi_index=> 40) {
    bmi_interpret = "Very Severely Obese"
    console.log('BMI Index = ' + bmi_index );
    bmi_analyze(bmi_interpret);
    //return bmi_interpret;
    
 
}
return bmi_index;

};

function bmi_analyze(bmi_interpret){
    console.log('BMI Analysis: '+ bmi_interpret);
};
    


CalculateBMI_metric(1.75,80);

module.exports = CalculateBMI_metric
//module.exports = bmi_interpret

