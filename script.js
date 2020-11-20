// create a namespace object to represent our app
const gameApp = {};

// define a method on our app object which will makes an asynchronous request to our API for the game data (AJAX & .then)
gameApp.getGames = function(gameTitle) {
$.ajax({
        url: `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`,
        method: `GET`,
        dataType: `json`,
    })
    .then(function(res) {
        console.log(res);
        gameApp.displayGameCard(res);
    })
}

// event listener will wait for input text when submitted, to then display game info results to populate to the following content cards. (search bar)
gameApp.searchVideoGameTitle = function() {
    $(`.gameSearchForm`).on(`submit`, function(event) {
        // inside the function apply prevent default, to prevent refreshing on the page.
        event.preventDefault();
        const chosenGame = $(`#search`).val();
        // commenting out search value to keep search text by user for UX
        // $(`#search`).val(``);
        gameApp.getGames(chosenGame);

        // Trying to store the namespace function call in a variable, in order to reuse the game search info that is gather from the API call. Use that stored namespace function call in a variable called storedGameValue, and pass the const variable storedGameValue into the variable gameContentCard in the template expression. 
            // ERROR with dot notation and bracket notations - turns info to undefined
                // *** Discovered error is due initial endpoint of API url providing incomplete API data. ***
                    // *** Understanding once the new array is executed in the console of the Web browser, then must access that specific array to use dot notation or bracket notation to display game data details ***
        const storedGameValue = gameApp.getGames(chosenGame);
        
        let gameContentCard = 
            `<ul>
                <li class="gameCard gameCard1">
                    <h2>${storedGameValue}</h2>
                </li>
            </ul> `;

        // empties div that append game content in gameCard before append new game data
        $(`.gameCardContainer`).empty();
        $(`.gameCardContainer`).append(gameContentCard);
        
    })
}

// trying to display game detail to web browsers
// gameApp.displayGameCard = function(gameInfo) {
//     gameInfo.forEach(function(gameData){
//         let gameContentCard =
//             `<ul>
//                 <li class="gameCard gameCard1">
//                     <h2>${gameData}</h2>

//                 </li>
//             </ul> `;
//         $(`.gameCardContainer`).append(gameContentCard);
//         // gameApp.getGames(chosenGame[0]);
//         // displayGameCard(gameContentCard);
//     });
// }

// event listener will wait for an on click event on the content card. When clicked the user will be navigated to a different page. The new page will display in greater detail about the game. (description, genre labels, gallery, specs, game platforms, ratings, review)

    //dot notation after the parameter (gameDetails) for each of the following expressions.
    // stretch goal
gameApp.clickOnContentEventListener = function(gameDetails) {
    let gameContentCard =
        `<ul>
            <li class="gameCard gameCard1">
                <h2>${gameDetails}</h2>
                <p>${gameDetails}</p>
                <img src="${gameDetails}" alt="${gameDetails}">
            </li>
        </ul>`;
    $(`.gameCardContainer`).append(gameContentCard);
}

// define a method which will initialize the app once the document is ready (initialization)
gameApp.init = function() {
    gameApp.getGames();
    gameApp.searchVideoGameTitle();
}

// call the initialization method (document ready function)
    $(document).ready(function() {
    gameApp.init();
    });