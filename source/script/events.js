canvas.size.get = function () {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

canvas.size.set = function () {
    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
};

mouse.position.set = function (event) {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};

viewpoint.offset.set = function () {
    viewpoint.offset.x = canvas.size.width - mouse.position.x;
    viewpoint.offset.y = canvas.size.height - mouse.position.y;
};

viewpoint.position.set = function () {
    viewpoint.position.x = objectSet.game.objects[0].position.x;
    viewpoint.position.y = objectSet.game.objects[0].position.y;
};

UI.roll.set = function (value) {
    for (let i in objectSet.UI.objects) {
        if (objectSet.UI.objects[i].rollable) {
            let object = objectSet.UI.objects[i];

            if (object.rollOffset + value > object.maximumRollOffset) {
                object.rollOffset = object.maximumRollOffset;
            } else if (object.rollOffset + value < 0) {
                object.rollOffset = 0;
            } else {
                object.rollOffset += value;
            }
        }
    }
};

input.key.check = function () {
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

input.mouse.left = function () {
    if (game.inGame) {

    } else {
        mouse.target.current?.click?.();
        mouse.target.current = undefined;
    }
};

input.mouse.right = function () {

};