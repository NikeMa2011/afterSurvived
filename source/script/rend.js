game.rend = function() {
    canvas.background();

    if (game.inGame) {
        for (let i = 0; i < objectSet.game.length; i++) {
            objectSet.game.objects[i].draw();
        }
    }

    for (let i = 0; i < objectSet.UI.length; i++) {
        objectSet.UI.objects[i].draw();
    }

};

canvas.background = function() {
    canvas.color.set(UI.color.dark);
    canvasContext.fillRect(0, 0, canvas.size.width, canvas.size.height);
};

canvas.color.set = function(color) {
    canvasContext.fillStyle = color;
    canvasContext.strokeStyle = color;
};

mouse.target.set = function() {
    mouse.target.current = undefined;

    for (let i = 0; i < objectSet.UI.length; i++) {
        if (
            mouse.position.x >= objectSet.UI.objects[i].position.x &&
            mouse.position.x <= objectSet.UI.objects[i].position.x + objectSet.UI.objects[i].size.width &&
            mouse.position.y >= objectSet.UI.objects[i].position.y &&
            mouse.position.y <= objectSet.UI.objects[i].position.y + objectSet.UI.objects[i].size.height
        ) {
            if (!mouse.target.current) {
                mouse.target.current = objectSet.UI.objects[i];
            }

            objectSet.UI.objects[i].onMouse = true;
            if (objectSet.UI.objects[i].onMouseFunction) {
                objectSet.UI.objects[i].onMouseFunction();
            }
        } else {
            objectSet.UI.objects[i].onMouse = false;
        }
    }
};

game.FPS.set = function() {
    game.FPS.milisecond = Math.round(1000 / game.FPS.value);
}