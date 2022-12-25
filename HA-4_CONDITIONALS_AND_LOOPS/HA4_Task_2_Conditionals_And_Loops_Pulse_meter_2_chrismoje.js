//ASSIGNMENT-4 TASK 2 CONDITIONALS AND LOOPS
//CHRIS MOJE
// PULSE METER APP


//Monitoring of Pulse Rate, beats per minute
//40-100 Normal Reading
//101-109 Acceptable to continue home monitoring
//110-130 Seek advise from health professionals
//=> 131 Seek urgent medical advice.

var pulserate = 60;

function analyzePulseRate(pulserate) {
    if ((pulserate => 40) && (pulserate < 101)) {
        console.log('Normal Reading');
    } else if ((pulserate => 101) && (pulserate < 110)) {
        console.log('Acceptable to continue home monitoring');
    } else if ((pulserate => 110) && (pulserate < 131)) {
        console.log('Seek advise from health professionals')      
    } else if (pulserate => 131) {
        console.log('SEEK URGENT MEDICAL ADVISE!');
    }
    }
analyzePulseRate(pulserate);
