// create a namespace object to represent our app
const gameApp = {};
// define a method on our app object which will makes an asynchronous request to our API for the game data (AJAX & .then)
gameApp.getGames = function (gameTitle) {
    $.ajax({
        url: `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=6`,
        method: `GET`,
        dataType: `json`,
    })
        .then(function (res) {
            gameApp.displayGameCard(res);
        })
}
// event listener will wait for input text when submitted, to then display game info results to populate to the following content cards. (search bar)
gameApp.searchVideoGameTitle = function () {
    // inside the function apply prevent default, to prevent refreshing on the page.
    $(`.gameSearchForm`).on(`submit`, function (event) {
        event.preventDefault();
        $(`.imageContainer`).hide();
        const chosenGame = $(`#search`).val();
        gameApp.getGames(chosenGame);
    })
}
// trying to display game detail to web browsers
gameApp.displayGameCard = function (gameArrayInfo) {
    // empty before for each, to prevent from deleting all items using the forEach method.
    $(`.gameCardContainer`).empty();
    gameArrayInfo.forEach(function (gameData) {
        let gameContentCard =
            `<ul>
                <li class="gameCard">
                    <h2>${gameData.external}</h2>
                    <img src="${gameData.thumb}" alt="${gameData.external}">
                    <p>Purchase on <a href="https://store.steampowered.com/app/${gameData.steamAppID}"><i class="fab fa-steam"></i> Steam store</a></p>
                    <p>Lowest recorded price: <a href="https://steamdb.info/app/${gameData.steamAppID}/">$${gameData.cheapest}<a></p>
                </li>
            </ul> `;
        $(`.gameCardContainer`).append(gameContentCard);
    });
}
// define a method which will initialize the app once the document is ready (initialization)
gameApp.init = function () {
    gameApp.searchVideoGameTitle();
}
// call the initialization method (document ready function)
$(document).ready(function () {
    gameApp.init();
});