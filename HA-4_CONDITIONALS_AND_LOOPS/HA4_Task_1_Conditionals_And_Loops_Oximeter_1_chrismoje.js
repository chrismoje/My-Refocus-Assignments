//ASSIGNMENT-4 TASK 1 CONDITIONALS AND LOOPS
//CHRIS MOJE
// OXYMETER APP

// Monitoring of oxygen saturation level in %
// >95% Normal reading
// 95% Acceptable Acceptable to continue home monitoring
// >= 92% and < 95% Seek advice from health professionals
// <92% Seek urgent medical advise
var OxygenSaturationReading = 96;

function AnalyzeOxygenSaturation (OxygenSaturationReading){
    if (OxygenSaturationReading > 95) {
        console.log("Normal Reading");
    } else if (OxygenSaturationReading == 95) {
            console.log("Acceptable to continue home monitoring");    
    } else if ((OxygenSaturationReading >= 92) && (OxygenSaturationReading < 95)) {
            console.log ('Seek advice from health professionals.');    
    } else if (OxygenSaturationReading < 92) {
            console.log('SEEK URGENT MEDICAL ADVISE!');
        }
}

AnalyzeOxygenSaturation(OxygenSaturationReading);
