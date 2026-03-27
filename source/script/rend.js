game.UI.background.draw = function () {
    canvasContext.fillStyle = game.UI.background.color;

    canvasContext.fillRect(
        0,
        0,
        canvas.size.x,
        canvas.size.y
    );
};

game.UI.font.set = function (size) {
    canvasContext.font = size + "px sans-serif";
};

game.UI.font.style.set = function () {
    canvasContext.textBaseline = "top";
}

game.rend = function () {
    game.UI.background.draw();

    for (let i in objectSet.game.object) {
        objectSet.game.object[i].draw();
    }

    for (let i in objectSet.UI.object) {
        if (objectSet.UI.object[i].onMouse) {
            objectSet.UI.object[i].onMouse();
        }

        objectSet.UI.object[i].draw();
    }
};