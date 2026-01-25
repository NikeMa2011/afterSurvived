game.tick = () => {
    input.key.check();
    mouse.target.set();

    game.rend();

    setTimeout(() => {
        game.tick();
    }, game.FPS.milisecond);
};

game.stringToFunction = (string) => {
    switch (string) {
        case "start":
            return UI.manu.start;
        case "normal":
            return UI.manu.normal;
        case "map_choose":
            return UI.manu.map;
        case "settings_graphic":
            return UI.manu.settings.graphic;
        case "function_disable":
            return game.function.disable;
        default:
            return false;
    }
}

game.siteChange = (string) => {
    game.site = game.stringToFunction(string);
    game.siteName = string;

    objectSet.clear();

    game.site();
}

game.function.disable = () => {
    alert("暂时没有此功能或者没有设置功能");
}