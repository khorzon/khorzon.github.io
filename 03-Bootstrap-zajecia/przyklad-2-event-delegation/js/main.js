'use strict';

const container = document.getElementsByClassName('container')[0];

container.addEventListener('click', (e) => {
    console.log(e);
    if(e.target.nodeName === 'H2'){
        let par = e.target.nextElementSibling
        let allP = document.getElementsByTagName ('p');


        for(let i = 0; i<allP.length; i++){
            // elem.classList.remove('visible');
            console.log(allP[i]);
            allP[i].classList.remove('visible');
            
            
        }



    


        console.log(allP);
        

        par.classList.add('visible');
        

        
        
    }
})

