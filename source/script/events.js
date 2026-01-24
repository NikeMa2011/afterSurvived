canvas.size.get = () => {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

canvas.size.set = () => {
    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
};

mouse.position.set = (event) => {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};

input.key.check = () => {
    if (keySet["Escape"]) {
        if (game.inGame) {
            game.siteChange("normal");
        } else if (
            game.siteName == "map_choose" ||
            game.siteName == "settings_graphic"
        ) {
            game.siteChange("start");
        }
    } else if (game.inGame) {

    }
};

input.mouse.left = () => {
    if (game.inGame) {

    } else {
        mouse.target.current?.click();
        mouse.target.current = undefined;
    }
};

input.mouse.right = () => {

};