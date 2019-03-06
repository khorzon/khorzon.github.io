/* Obiekty */


// to co się zamyka klamrą nie zamykamy średnikiem. sredniekiem zamykamy nawias

let blogPost = {  //klamry definiują obiekt, tak jak nawiasy kwadratowe tablicę

        title: 'Adam Małysz prezydentem Polski', // klucze oddzielami srednikami
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti nobis recusandae sequi alias, sint magnam! Modi, ipsam. Iusto cupiditate laborum aliquid saepe mollitia sed iste molestias pariatur! Dolore, cum?',
        author: {
            name: 'Jan Kowalski',
            age: 32
                },
        tags: ['polityka', 'dobra zmiana', 'bohater narodowy'],
        printTitle(){
            console.log('Tytuł artykułu to ' + this.title);
        }
}

console.log(blogPost);

console.log(blogPost.title) ;
console.log(blogPost.tags[1]) ;
console.log(blogPost.author.age) ;

blogPost.printTitle();

blogPost.title = 'Piotr Żyła prezydentem polski';


console.log(blogPost.printTitle())

blogPost.date = '2019-03-01';

console.log(blogPost);

/* Klasy */

class Car{  // klasy definiujemy wielką litera
        constructor(name, color)    {
            this.name = name; 
            this.color = color;
        }
        printInfo(){
            console.log(`This car is ${this.name} in the  ${this.color} color`)
        }
}

/* wywołąnie klasy, stworzenie klasy, instamcja  */

let bugatti = new Car('bugatti', 'red');
let audi = new Car('audi', 'black');

console.log(bugatti);
console.log(audi);

bugatti.printInfo();
audi.printInfo();


// Napsz klasę GimUres input waga i wzrost, wskaźnik BMI wypluje, i policzy.  height w metrach i waga w kilogramach  BMI = masa / wzrost


class GimUser{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    countBmi(height, weight){
        let bmiHeight = this.height;
        let bmiWeight = this.weight;
        let bmi = bmiWeight/(bmiHeight*bmiHeight);
        console.log(bmi);
    }
}


let gimUser = new GimUser(1.72, 74);

gimUser.countBmi();