game.tick = () => {
    objectSet.clear();
    canvas.clear();

    input.key.check();

    game.site();
    game.rend();

    setTimeout(() => {
        game.tick();
    }, 50);
};

game.siteStringToFunction = (string) => {
    switch (string) {
        case "startManu":
            return UI.manu.startManu;
        case "gameManu":
            return UI.manu.gameManu;
        case "settingManu":
            return UI.manu.settingManu;
        default:
            return false;
    }
}

game.changeSite = (string) => {
    game.site = game.siteStringToFunction(string);
    game.siteName = string;
}

game.siteEscape = () => {

}