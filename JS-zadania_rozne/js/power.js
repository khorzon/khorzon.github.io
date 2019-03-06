function power(basis, index) {
    if (index > 0) {
        let result = basis;
        for (let i = 0; i < index - 1; i++) {
            result *= basis;
        }
        return result;
    }
    else if (index < 0) {
        let result = 1;
        for (let i = 0; i > index; i--) {
            result *= (1 / basis);
        }
        return result;
    }
    else {
        if (basis !== 0) {
            return 1;
        }
        else {
            return 'Brak rozwiązania';
        }
    }
}
let powerResult = power(5, 5);
console.log(`Wynik potęgowania to: ${powerResult}`);