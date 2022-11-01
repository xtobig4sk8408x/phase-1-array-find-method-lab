/*let arr = [1, 2, 3, "a", 4, "b", 5];

function isAString(e) {
    return typeof e === "string";
}

arr.find(isAString)
*/

function superbowlWin (games) {
    const wonGame = games.find((game) => {
        return game.result === "W";
    });
    if (wonGame) {
        return wonGame.year;
    } 
}