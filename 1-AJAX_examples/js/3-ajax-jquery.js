$(document).ready(function () {
    // console.log('ready!');
    // let userIndex = 1;
    function loadUSer(userIndex) {
        $.getJSON("https://jsonplaceholder.typicode.com/users/" + userIndex, function (JsonUserData) {
            console.log(JsonUserData);

            $('#post-list').append(`<h2>${JsonUserData.name}</h2>`);
            $('#post-list').append(`<p>${JsonUserData.phone}</p>`);

            let addrObject = JsonUserData.address;
            console.log(addrObject);
            $('#post-list').append(`<p>${addrObject.city}</p>`);
            // for(let prop in JsonUserData){
            //     for(let value in prop){
            //         // $('#post-list').append(`<p>${value.city}</p>`);
            //     }
            // }
            // $('#post-list').append(`<p>${JsonUserData.[address.city]}</p>`);
        }
        );
    }
    loadUSer(1);
    $('#get-new-data').click(function () {
        let nextUserIndex = $('h2').length;
        loadUSer(nextUserIndex + 1)
    });
})