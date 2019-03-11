/* funkcja fetch pobieramy obiekt json z adresu https://jsonplaceholder.typicode.com/photos/1 */
/* Stwórz element figure z klasą sibgle-post.
2. Stwórz element img - jako wartosc atrybut src na url pobranego obiektu
    jako tekst lt = ustaw wartosc title  
3. Stwórz element figcaption jako tresc wartosc artykułu title pobranego obiektu
4. Elementy img i figcaption dodaj appenChild do elementu figure
element figure dodaj do kontenera z id #image-holder*/
let url = 'https://jsonplaceholder.typicode.com/photos/';
function loadImages(i, number) {
    fetch(url + i)
        .then(response => response.json())
        .then(function (JsonObject) {
            console.log(JsonObject);
            let newFigure = document.createElement('figure');
            newFigure.classList.add('single-post');
            let newImage = document.createElement('img');
            let newFigCaption = document.createElement('figcaption');
            newFigCaption.innerText = JsonObject.id + '. ' + JsonObject.title;
            newImage.setAttribute('src', JsonObject.url);
            newImage.setAttribute('alt', JsonObject.title);
            newFigure.append(newImage);
            newFigure.append(newFigCaption);
            let divHolder = document.getElementById('image-holder');
            divHolder.appendChild(newFigure);
            /*  if(photoIndex<10){
                 loadImages(photoIndex, number)
             } */
            if (i < number) {

                loadImages(++i, number)
            }
            else {
                return;
            }
        })
}
loadImages(1, 5);
let button = document.getElementById('button');
button.addEventListener('click', function () {
    // ile obrazkow juz jest
    let imagesCount = document.getElementsByTagName('img').length;
    console.log(imagesCount);
    loadImages(imagesCount + 1, imagesCount + 10);
})