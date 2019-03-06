let data = '{"osoby":[{"imie":"Krystian","nazwisko":"Dziopa","wzrost":180,"oczy":"niebieskie","zainteresowania":[{"nazwa":"podroze"},{"nazwa":"gotowanie"}]},{"imie":"Dominik","nazwisko":"Gomuła","wzrost":170,"oczy":"brązowe","zainteresowania":[{"nazwa":"gotowanie"},{"nazwa":"języki"}]},{"imie":"Claudia","nazwisko":"Żelazowska","wzrost":167,"oczy":"brązowe","zainteresowania":[{"nazwa":"programowanie"},{"nazwa":"podroze"},{"nazwa":"języki"}]}]}' 

let jsonData = JSON.parse(data);

console.log(data);
console.log(jsonData);


/* zaloguj w konsoli imie i nazwisko wszystkich osób, których wzrost jest liczbą parzystą */


// for(let key in osoby){
    
//     if(osoby[2])
// }

// jsonData.forEach(function(element,index)){


// }

jsonData.osoby.forEach(function(element) {

    if(element.wzrost%2 !== 0){

        return;
        

    }
    console.log(element.imie);
    console.log(element.nazwisko);

})



