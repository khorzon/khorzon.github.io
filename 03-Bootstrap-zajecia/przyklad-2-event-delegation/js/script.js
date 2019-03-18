'use strict';

const container = document.getElementsByClassName('container')[0];

// console.log(container);

//  używajmy consta!!

container.addEventListener('click', (e) => {

// console.log('click!!');
// console.log(e);

if(e.target.nodeName === 'BUTTON'){
    // console.log('click button');
    console.log(e.target.value);
    e.target.style.backgroundColor = e.target.value;
    
    // debugger;
    
}


})