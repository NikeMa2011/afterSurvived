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
            game.changeSite("normalSite");
        } else if (
            game.siteName == "gameManu" ||
            game.siteName == "settingManu"
        ) {
            game.changeSite("startManu");
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