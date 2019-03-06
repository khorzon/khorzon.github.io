let form = document.querySelector('form');
let checkAllfield = document.getElementById('wszystkie-zgody');
const message = document.getElementById('wiadomosc');

// zeby formularz zadziałał trzeba wpisać default na koncu formularza

function validation(event) {
    message.innerHTML = '';
    let fname = document.getElementById('name').value;
    let fmail = document.getElementById('email').value;
    event.preventDefault();
    if (fname === '' || fmail === '') {
        console.log('puste pola');
        if (fname === '') {
            /*   let alertName = document.createElement('p');
              let alertClass = document.createAttribute('class');
                alertClass.value = 'wiadomosc';
                let alertContent = document.createTextNode(`Wymagana wypełnie pola Imie i Nazwisko`);
                
                alertName.appendChild(alertContent);
                alertName.setAttributeNode(alertClass);
    
                document.getElementsByTagName('ul') */
            const msgName = document.createElement('li');
            msgName.innerText = 'wpisz imię!';
            message.appendChild(msgName);

            

            // message.innerHTML = '<li>Wymagane wypełnie pola Imie i Nazwisko</li>';

        }
        if(fmail === ''){
            const msgName = document.createElement('li');
            msgName.innerText = 'wpisz E-mail!';
            message.appendChild(msgName);
        }
        
            
        
    }
    else {
        console.log('pola wypelnione');
    }
}

function checkMark() {
    let agr1 = document.getElementById('zgoda-marketingowa-1').checked;
    if (agr1) {
        console.log('zaznaczono zgodę')
    }
    else {
        const msgName = document.createElement('li');
            msgName.innerText = 'brak zgody marketingowej!!';
            message.appendChild(msgName);

    }
}
function chooseAll() {
    // if(this.checked) { //nie trzeba robić tutaj porównania bo wartosc moze byc tylko true albo false
    //tutaj można zrobić referencję, będzie bardziej przejrzyćie
    //można to zrobić w 4 linijkach

    document.getElementById('zgoda-marketingowa-1').checked = this.checked;
    document.getElementById('zgoda-marketingowa-1').disabled = this.checked;
    document.getElementById('zgoda-marketingowa-2').checked = this.checked;
    document.getElementById('zgoda-marketingowa-2').disabled = this.checked;
    // } else {
    // document.getElementById('zgoda-marketingowa-1').checked=false;
    // document.getElementById('zgoda-marketingowa-1').disabled=false;
    // document.getElementById('zgoda-marketingowa-2').checked=false;
    // document.getElementById('zgoda-marketingowa-2').disabled=false;
    // }
}
form.addEventListener('submit', validation);
form.addEventListener('submit', checkMark);
checkAllfield.addEventListener('change', chooseAll);