/* instrukcje warunkowe if */

let age = 22;

if(age<18){
    console.log('Brak dostępu');
}
else{
    console.log('Przyznano dostęp');
}


let bmi = 18;

if(bmi<15){
    console.log('Niedowaga'); //przy else ifach powinnismy sprawdzac w kolejnosci njabardziej prawdopodobne warunki
}
else if(bmi<25){
    console.log('Prawdidłowa waga');
}

else if(bmi<30){
    console.log('Nadwaga');
}
else{
    console.log('Otyłość');
}

/* Instrukcja switch */


let lightColor = 'blue';

switch(lightColor){
    case 'red': 
        console.log('nie jedź');
        break;
    case 'yellow':
        console.log('czekaj');
        break;
    case 'green':
        console.log('jedź');
        break;
    default:
        console.log('sygnalizacja zepsuta');
        
}