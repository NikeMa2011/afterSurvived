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

viewpoint.offset.set = () => {
    viewpoint.offset.x = canvas.size.width - mouse.position.x;
    viewpoint.offset.y = canvas.size.height - mouse.position.y;
};

viewpoint.position.set = () => {
    viewpoint.position.x = objectSet.game.objects[0].position.x;
    viewpoint.position.y = objectSet.game.objects[0].position.y;
};

input.key.check = () => {
    if (keySet["Escape"]) {
        if (game.inMatch) {
            game.siteChange("normal");
        } else {
            game.inGame = false;
            game.status = "manu";

            game.siteChange("start");
        }
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