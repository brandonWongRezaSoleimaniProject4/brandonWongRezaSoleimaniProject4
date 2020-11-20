// create a namespace object to represent our app
const gameApp = {};
// define a method on our app object which will makes an asynchronous request to our API for the game data (AJAX & .then)
gameApp.getGames = function (gameTitle) {
    $.ajax({
        url: `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=9`,
        method: `GET`,
        dataType: `json`,
    })
        .then(function (res) {
            // console.log(res);
            gameApp.displayGameCard(res);
        })
}
// event listener will wait for input text when submitted, to then display game info results to populate to the following content cards. (search bar)
gameApp.searchVideoGameTitle = function () {
    // inside the function apply prevent default, to prevent refreshing on the page.
    // due to ajax error pending to complete   
    $(`.gameSearchForm`).on(`submit`, function (event) {
        event.preventDefault();
        const chosenGame = $(`#search`).val();
        // commenting out search value to keep search text by user for UX
        // $(`#search`).val(``);
        gameApp.getGames(chosenGame);
    })
}
// trying to display game detail to web browsers
gameApp.displayGameCard = function (gameArrayInfo) {
    // empty before for each, to prevent from deleting all items using the forEach method.
    $(`.gameCardContainer`).empty();
    gameArrayInfo.forEach(function (gameData) {
        console.log(gameData);
        let gameContentCard =
            `<ul>
                <li class="gameCard">
                    <h2>${gameData.external}</h2>
                    <img src="${gameData.thumb}">
                </li>
            </ul> `;
        $(`.gameCardContainer`).append(gameContentCard);
    });
}
// event listener will wait for an on click event on the content card. When clicked the user will be navigated to a different page. The new page will display in greater detail about the game. (description, genre labels, gallery, specs, game platforms, ratings, review)
// *****************
//dot notation after the parameter (gameDetails) for each of the following expressions.
gameApp.clickOnContentEventListener = function () {
}
// *****************
// define a method which will initialize the app once the document is ready (initialization)
gameApp.init = function () {
    // gameApp.getGames();
    gameApp.searchVideoGameTitle();
}
// call the initialization method (document ready function)
$(document).ready(function () {
    gameApp.init();
});