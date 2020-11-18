// create a namespace object to represent our app
const gameApp = {};

// store our root endpoint within our app object
gameApp.apiUrl = 'https://www.cheapshark.com/redirect?dealID={id}';

// define a method on our app object which will makes an asynchronous request to our API for the game data (AJAX & .then)
gameApp.getGames = function() {
    $.ajex({
        url: gameApp.apiUrl,
        method: 'GET',
        dataType: 'json',
    })
        .then(function(res) {
            console.log(res);
        })
}

// event listener will wait for input text when submitted, to then display game info results to populate to the following content cards. (search bar)

    // inside the function apply prevent default, to prevent refreshing on the page.     

// event listener will wait for an on click event on the content card. When clicked the user will be navigated to a different page. The new page will display in greater detail about the game. (description, genre labels, gallery, specs, game platforms, ratings, review)

// define a method which will initialize the app once the document is ready (initialization)

// call the initialization method (document ready function)