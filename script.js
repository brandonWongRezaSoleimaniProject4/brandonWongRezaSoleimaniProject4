// create a namespace object to represent our app
const gameApp = {};
const gameTitle = 'batman';

// store our root endpoint within our app object
gameApp.apiUrl = `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`;

// define a method on our app object which will makes an asynchronous request to our API for the game data (AJAX & .then)
gameApp.getGames = function(gameTitle) {
    $.ajax({
        url: `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`,
        method: `GET`,
        dataType: `json`,
    })
    .then(function(res) {
        console.log(res);
    })
}

// event listener will wait for input text when submitted, to then display game info results to populate to the following content cards. (search bar)
gameApp.searchEventListener = function(event) {
    // inside the function apply prevent default, to prevent refreshing on the page.
    
    // due to ajax error pending to complete   
    event.preventDefault();
    $(`#submit`).on(`submit`, function () {
        const chosenGame = $(this).val();

    })
}

// event listener will wait for an on click event on the content card. When clicked the user will be navigated to a different page. The new page will display in greater detail about the game. (description, genre labels, gallery, specs, game platforms, ratings, review)

    //dot notation after the parameter (gameDetails) for each of the following expressions.
gameApp.clickOnContentEventListener = function(gameDetails) {
    let gameContentCard =
        `
        <ul>
            <li class="gameCard gameCard1">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
            <li class="gameCard gameCard2">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
            <li class="gameCard gameCard3">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
            <li class="gameCard gameCard4">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
            <li class="gameCard gameCard5">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
            <li class="gameCard gameCard6">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
        </ul> 
        `;
    $(`.gameCardContainer`).append(gameContentCard);
}

// define a method which will initialize the app once the document is ready (initialization)
// gameApp.init = function() {

// }

// call the initialization method (document ready function)
//   $(document).ready(function() {
//     gameApp.init();
//   });