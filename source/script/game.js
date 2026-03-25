game.tick = function () {
    game.UI.mouse.TargetDetect();
};

game.UI.mouse.TargetDetect = function () {

};

game.rendLoop = function () {
    game.rend();

    setTimeout(() => {
        game.rendLoop();
    }, game.interval.FPS.millisecond);
};

game.tickLoop = function () {
    game.tick();

    setTimeout(() => {
        game.tickLoop();
    }, game.interval.tick.millisecond);
};

game.interval.FPS.set = function () {
    game.interval.FPS.millisecond = Math.floor(1000 / game.interval.FPS.value);
};

game.interval.tick.set = function () {
    game.interval.tick.millisecond = Math.floor(1000 / game.interval.tick.value);
};

game.UI.manu.change = function (index) {
    switch (index) {
        case "startManu":
            objectSet.UI.object = {};
            game.UI.manu.startManu();
            break;
        case "mapSelect":
            objectSet.UI.object = {};
            game.UI.manu.mapSelect();
            break;
        default:
            throw new Error("Fault while change UI site: cannot reach the UI site index \"" + index + "\"");
    }

    let versionInformation = new string();
    versionInformation.ID = "versionInformation";
    versionInformation.string = "Pre-alpha version";
    versionInformation.position.x = game.UI.gap.medium;
    versionInformation.position.y = game.UI.gap.medium;
    versionInformation.color = "#ffffff";
    versionInformation.fontSize = game.UI.font.size.small;
    objectSet.UI.add(versionInformation);
};

game.UI.font.size.getStringWidth = function (string) {
    let width = 0;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < game.UI.font.ASCII.characterSet.length; j++) {
            if (string[i] == game.UI.font.ASCII.characterSet[j]) {
                width += game.UI.font.ASCII.width;

                break;
            }
        }
        width++;
    }

    return width;
};