let button = document.querySelector('button');
button.addEventListener('click', function(){
            let liItems = document.getElementsByClassName('item');
            let newLi = document.createElement('li');
            newLi.classList = 'item'
            newLi.innerText = `Item ${liItems.length + 1}`;
            document.getElementById('items').append(newLi);
            
})
