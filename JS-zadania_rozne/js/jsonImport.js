let data = '{"pracownicy":[{"firstName": "Krystian", "lastName": "Dziopa"},{"firstName": "Anna", "lastName": "Szapiel"},{"firstName": "Piotr", "lastName": "Żmuda"}]}';

let jsonPracownicy = JSON.parse(data);

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function (element, index) {
    console.log(index + ': ' + element.firstName + ' ' + element.lastName);
})