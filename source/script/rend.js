game.rend.function = function () {
    viewpoint.position.set();

    game.rend.background();

    game.rend.UI();
    game.rend.GO();

    setTimeout(() => {
        game.rend.function();
    }, game.interval.rend.delay);
};

game.rend.UI = function () {
    for (let ID in objectSet.UI.object) {
        objectSet.UI.object[ID].draw();
    }
};

game.rend.GO = function () {
    for (let ID in objectSet.GO.object) {
        console.log(ID)
        objectSet.GO.object[ID].draw();
    }
};

canvas.size.set = function () {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

canvas.DOM.size.set = function () {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
};

game.rend.font.setSize = function (size) {
    canvasContext.font = size + "px" + game.setting.graphic.font.style;
};

game.rend.font.setStyle = function () {
    canvasContext.textBaseLine = "top";
}

game.rend.background = function () {
    canvasContext.fillStyle = game.UI.color.dark;

    canvasContext.fillRect(
        0,
        0,
        canvas.size.width,
        canvas.size.height
    );
};

viewpoint.position.set = function () {
    viewpoint.position = {
        x: objectSet.GO.object["player"].position.x,
        y: objectSet.GO.object["player"].position.y
    };
};

viewpoint.size.set = function () {
    viewpoint.size = {
        width: canvas.size.width,
        height: canvas.size.height
    };
};