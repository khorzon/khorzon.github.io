let button = document.querySelector('button');
let firstp = document.getElementsByTagName('p')[0];
let secondp = document.getElementsByTagName('p')[1];
let state = true;

function ustawTlo(){

    if(state){
        this.innerHTML = 'Powrót do początku';
        firstp.classList.toggle('bg-red')
        secondp.classList.toggle('bg-yellow')
        state = false;
        
    }
    else{
        this.innerHTML = 'Zmień tło';
        state = true;
        firstp.classList.toggle('bg-red')
        secondp.classList.toggle('bg-yellow')
    }
}

button.addEventListener('click', ustawTlo);


/* Aleternative */


// document.querySelector('button').addEventListener('click', function()){
//     document.getElementsByTagName('p')[0].classList.toggle('bg-red');
//     document.getElementsByTagName('p')[1].classList.toggle('bg-yellow');

// }

/* Aleternative */