game.tick = function () {
    input.key.check();
    mouse.target.set();

    game.rend();

    setTimeout(() => {
        game.tick();
    }, game.FPS.milisecond);
};

game.stringToFunction = function (string) {
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
        case "edit_image":
            return UI.edit.image;
        case "accountSet_name":
            return UI.game.accountSetName;
        case "accountSet_faction":
            return UI.game.accountSetFaction;
        case "repository":
            return UI.game.repository;
        default:
            return false;
    }
};

game.siteChange = function (string) {
    game.site = game.stringToFunction(string);
    game.siteName = string;

    objectSet.clear();

    game.site();
};

user.progress.repository.spaceSet = function () {
    for (let x = 0; x < user.progress.repository.size.width; x++) {
        user.progress.repository.contains.push([]);

        for (let y = 0; y < user.progress.repository.size.height; y++) {
            user.progress.repository.contains[x].push(undefined);
        }
    }
}