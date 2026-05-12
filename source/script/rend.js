game.rend.background = function () {
    canvasContext.fillStyle = game.UI.color.backgroundDark;

    canvasContext.fillRect(
        0,
        0,
        canvas.size.width,
        canvas.size.height
    );
};

game.rend.fontSizeSet = function (size) {
    canvasContext.font = size + "px sans-serif";
};

game.rend.fontStyleSet = function () {
    canvasContext.textAligh = "start";
    canvasContext.textBaseline = "top";
};

game.UI.font.getStringWidthRatio = function (string) {
    let stringWidth = 0;

    for (let index = 0; index < string.length; index++) {
        if (game.UI.font.isASCIIcharactor(string[index])) {
            stringWidth += game.UI.font.ASCII.charactorWidth;
        } else {
            stringWidth++;
        }
    }

    return stringWidth;
};

// TODO: 鼠标之下的按钮高亮alpha

game.UI.font.isASCIIcharactor = function (charactor) {
    for (let index = 0; index < game.UI.font.ASCII.charactorSet.length; i++) {
        if (charactor == game.UI.font.ASCII.charactorSet[index]) {
            return true;
        }
    }

    return false;
};

// TODO: 改异步函数
game.rend.loop = function () {
    game.rend.background();

    for (let ID in objectSet.game.object) {
        objectSet.game.object[ID].draw();
    }

    for (let ID in objectSet.UI.object) {
        objectSet.UI.object[ID].draw();
    }

    setTimeout(() => {
        game.rend.loop();
    }, game.graphic.FPS.milisecondDelay);
    // TODO: 同步屏幕刷新判断
};