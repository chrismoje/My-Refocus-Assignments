const CalculateBMI_metric = require ('../bmi-calculator.js');
//const bmi_analyze = require ('./bmi-calculator.js');



console.log ('######### UNIT TESTING FOR VERY SEVERELY UNDERWEIGHT (BMI= <15) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should be: Very Severely Underweight');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,35) === 'Very Severely Underweight'); // True
console.log ('Severely underweight', CalculateBMI_metric(1.6,35) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,35) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,35) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,35) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,35) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,35) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,35) === 'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING VERY SEVERELY UNDERWEIGHT (BMI= 15 to <16)  ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should be: Severely Underweight'); 
console.log ('Very severely underweight', CalculateBMI_metric(1.6,39) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,39) === 'Severely Underweight'); // True
console.log ('Underweight', CalculateBMI_metric(1.6,39) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,39) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,39) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,39) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,39) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,39) === 'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING UNDERWEIGHT (BMI= 16 to <18.5) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should be: Underweight');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,44) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,44) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,44) === 'Underweight'); // True
console.log ('Normal', CalculateBMI_metric(1.6,44) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,44) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,44) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,44) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,44) === 'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING FOR NORMAL WEIGHT (BMI= 18.5 to <25) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should be: Normal');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,50) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,50) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,50) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,50) === 'Normal'); // True
console.log ('Overweight', CalculateBMI_metric(1.6,50) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,50) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,50) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,50) === 
'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING FOR OVERWEIGHT (BMI= 25 to <30) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should be: Overweight');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,67) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,67) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,67) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,67) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,67) === 'Overweight'); // True
console.log ('Moderately Obese', CalculateBMI_metric(1.6,67) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,67) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,67) === 'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING FOR MODERATELY OBESE (BMI= 30 to <35) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should be: Moderately Obese');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,80) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,80) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,80) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,80) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,80) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,80) === 'Moderately Obese'); // True
console.log ('Severely Obese', CalculateBMI_metric(1.6,80) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,80) === 'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING FOR SEVERELY OBESE (BMI= 30 to <40) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should be: Severely Obese');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,90) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,90) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,90) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,90) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,90) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,90) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,90) === 'Severely Obese'); // True
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,90) === 'Very Severely Obese'); // False
console.log ('')
console.log ('######### UNIT TESTING FOR VERY SEVERELY OBESE (BMI= >40) ##########');
console.log ('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should be: Very Severely Obese');
console.log ('Very severely underweight', CalculateBMI_metric(1.6,110) === 'Very Severely Underweight'); // False
console.log ('Severely underweight', CalculateBMI_metric(1.6,110) === 'Severely Underweight'); // False
console.log ('Underweight', CalculateBMI_metric(1.6,110) === 'Underweight'); // False
console.log ('Normal', CalculateBMI_metric(1.6,110) === 'Normal'); // False
console.log ('Overweight', CalculateBMI_metric(1.6,110) === 'Overweight'); // False
console.log ('Moderately Obese', CalculateBMI_metric(1.6,110) === 'Moderately Obese'); // False
console.log ('Severely Obese', CalculateBMI_metric(1.6,110) === 'Severely Obese'); // False
console.log ('Very Severely Obese', CalculateBMI_metric(1.6,110) === 'Very Severely Obese'); // True
console.log ('')
console.log ('######### END OF UNIT TESTING ##########');