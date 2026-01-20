game.tick = () => {
    canvas.clear();

    input.key.check();
    mouse.target.set();

    game.rend();

    setTimeout(() => {
        game.tick();
    }, 25);
};

game.stringToFunction = (string) => {
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
    objectSet.clear();

    game.site = game.stringToFunction(string);
    game.siteName = string;

    game.site();
}