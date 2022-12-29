//const { default: test } = require('node:test');
const CalculateBMI_metric = require ('./bmi-calculator.js');


test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,35)).toBe('Very Severely Underweight')
});


test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 35Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,35)).not.toBe('Very Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,39)).toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 39Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Very Severely Obese')
});


test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,39)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,44)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,44)).toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,44)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,44)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,44)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,44)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 44Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,44)).not.toBe('Very Severely Obese')
});



test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should be: Normal', () => {
    expect(CalculateBMI_metric(1.6,50)).toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 50Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,50)).not.toBe('Very Severely Obese')
});


test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,67)).toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 67Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,67)).not.toBe('Very Severely Obese')
});



test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,80)).toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 80Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,80)).not.toBe('Very Severely Obese')
});



test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,90)).toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 90Kgs, BMI should NOT be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,90)).not.toBe('Very Severely Obese')
});



test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Very Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Very Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Severely Underweight', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Severely Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Underweight', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Underweight')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Normal', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Normal')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Overweight', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Overweight')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Moderately Obese', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Moderately Obese')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should NOT be: Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,110)).not.toBe('Severely Obese')
});

test('Testing BMI for Height = 1.6m and Weight 110Kgs, BMI should be: Very Severely Obese', () => {
    expect(CalculateBMI_metric(1.6,110)).toBe('Very Severely Obese')
});

