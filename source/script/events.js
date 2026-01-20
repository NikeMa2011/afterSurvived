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

mouse.target.set = () => {
    for (let i = 0; i < objectSet.UI.length; i++) {
        if (
            mouse.position.x >= objectSet.UI.objects[i].x &&
            mouse.position.x <= objectSet.UI.objects[i].x + objectSet.UI.objects[i].width &&
            mouse.position.y >= objectSet.UI.objects[i].y &&
            mouse.position.y <= objectSet.UI.objects[i].y + objectSet.UI.objects[i].height
        ) {
            if (objectSet.UI.objects[i].target) {
                console.log(objectSet.UI.objects[i])

                mouse.target.current = objectSet.UI.objects[i];

                objectSet.UI.objects[i].onMouse = true;
            }

            return;
        }
    }
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