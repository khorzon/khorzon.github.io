class Ksiazka {
    constructor(title, author, readed) {
        this.title = title;
        this.author = author;
        this.readed = readed;
    }
    opiszKsiazke() {
        if (this.readed) {
            let info = `Ksiazka ma tytuł ${this.title}, autorem jest ${this.author} i została przeczytana`;
            return info;
        }
        else {
            let info = `Ksiazka ma tytuł ${this.title}, autorem jest ${this.author} i nie została przeczytana`;
            return info;
        }
    }
}
let book1 = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
let book2 = new Ksiazka('Diuna', 'Frank Herbert', false);
let book3 = new Ksiazka('Pan Lodowego Ogrodu', 'Jarosław Grzędowicz', false);
let arrBooks = [book1, book2, book3];
function iloscPrzeczytanych(insArray) {
    let readedCounter = 0;
    insArray.forEach(function (element) {
        console.log(element.opiszKsiazke());
        if (element.readed === true) {
            readedCounter += 1;
        }
    })
    return readedCounter;
}
console.log('Ilość przeczytanych książek: ' + iloscPrzeczytanych(arrBooks));