// let submitButton = document.getElementsByTagName('input')[2];
let form = document.querySelector('form');
// console.log(submitButton);

function callback(event) {

    let fname = document.getElementById('lname').value;
    let lname = document.getElementById('fname').value;
    console.log(fname);
    console.log(lname);
    event.preventDefault();
}
form.addEventListener('submit', callback);

/* inny sposób */


// document.querySelector('form').addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('test');
// })