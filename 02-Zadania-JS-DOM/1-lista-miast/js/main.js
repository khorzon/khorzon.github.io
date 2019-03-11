let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let contentDiv = document.getElementById('content');

let newList = document.createElement('ol');

cities.forEach(function (elem) {
    let newCity = document.createElement('li');
    newCity.innerText = elem;
    newCity.classList = 'city';
    newList.append(newCity);
})

contentDiv.append(newList);