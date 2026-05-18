game.rend.function = function () {
    game.rend.UI();
    game.rend.GO();

    setTimeout(() => {
        game.rend.function();
    }, game.interval.rend.delay);
};

game.rend.UI = function () {
    game.rend.background();
};

game.rend.GO = function () {

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