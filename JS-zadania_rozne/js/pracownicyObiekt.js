let data = { "pracownicy": [{ "firstName": "Krystian", "lastName": "Dziopa" }, { "firstName": "Anna", "lastName": "Szapiel" }, { "firstName": "Piotr", "lastName": "Żmuda" }] };
// let jsonWorkers = JSON.parse(data);
//Wielka litera na poczatku klasy
class Worker {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    printInfo() {
        return `Imię: ${this.fName}, Nazwisko: ${this.lName} `;
    }
}
let workersArray = [];
for (let i = 0; i < data.pracownicy.length; i++) {
    workersArray.push(new Worker(data.pracownicy[i].firstName, data.pracownicy[i].lastName));
}
console.log(workersArray[2].printInfo());
/* 
let workersArray =[]; 
workersArray.forEach(function(){
}) */
//Dziedziczenia
class Manager extends Worker {
    constructor(fName, lName, role) {
        super(fName, lName);
        this.role = role;
    }
    printExtraInfo() {
        return `Imię: ${this.fName}, Nazwisko: ${this.lName}, Stanowisko: ${this.role} `;
    }
}
let supervisor = new Manager('Adam', 'Nowak', 'Zarządca');
console.log(supervisor);
console.log(supervisor.printInfo());
console.log(supervisor.printExtraInfo());