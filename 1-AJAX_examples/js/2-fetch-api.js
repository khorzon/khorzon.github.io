fetch('https://jsonplaceholder.typicode.com/posts')
    //  .then(response => response.json())
    //  .then(json => console.log(json))

    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(typeof (jsonObject));
        console.log(Array.isArray(jsonObject)); // sprawdzenie czy obiekt jest tablicą
        //console.log((jsonObject));
        jsonObject.forEach(function (element, index) {

            const divPosts = document.getElementById('post-list');
            let divPost = document.createElement('div');
            divPost.classList.add('post');

            let h2Elem = document.createElement('h2');
            h2Elem.classList.add('title');
            h2Elem.innerText = `${element.title}`
            
            let pElem = document.createElement('p');
            pElem.innerText = `${element.body}`
            pElem.classList.add('article');

            divPost.appendChild(h2Elem);
            divPost.appendChild(pElem);
            divPosts.appendChild(divPost);
          //  console.log(element);

        })

    })