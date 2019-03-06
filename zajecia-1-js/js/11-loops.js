/* Pętla for */

for (let i=0; i<5; i++){
    console.log(`wykonanie petli ${i}`);
}

let names=['ALicja', 'Patryk', 'Barbara', 'Tomasz'];

/* for (let i=0; i<names.length; i++){
    console.log(names[i]);
} */

names.forEach(element => {
    console.log(element)    ;
});



names.forEach(function(element,index){
    console.log(element + `ma index ${index}`);
})



//sposób zły


let person = {name:'Łukasz', age: 31};


/* person.forEach(element,value) */


console.log(person.name);
console.log(person['name']);

for (let key in person) {
    console.log(person[key]);
}

/* Pętla typu while */


let randomNumber = parseInt(Math.random()*100);

// while(randomNumber>20){
//     console.log(randomNumber);
//     randomNumber = parseInt(Math.random()*100 );
// }


do{
    console.log(randomNumber);
        randomNumber = parseInt(Math.random()*100 ); // taka petla wykona sie przynajmniej raz;
}
while(randomNumber>20) ;

/* Instrukcja break - przerywa działąnie funkcji*/


for(let i=0; i<100; i++){

    if(i>50){
        break;
    }
    console.log(i);
}

//break przerywa działąnie tylko pętli

let numberArray = [1,5,7,20,12,33,14];

for(let i=0; i<numberArray.length; i++){

    if(numberArray[i]%2!==0){
        continue; // continue przechodzi do kolejnej iteracji petli, bez wykonania console.log
    }

    console.log(numberArray[i]);
}

