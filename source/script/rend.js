game.rend = () => {
    if (game.inGame) {
        for (let i = 0; i < objectSet.length.game; i++) {
            objectSet.game[i].draw;
        }
    }

    for (let i = 0; i < objectSet.length.UI; i++) {
        objectSet.UI[i].draw;
    }

};

canvas.color.set = (color) => {
    canvasContext.fillStyle = color;
};