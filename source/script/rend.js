game.rend = () => {
    if (game.inGame) {
        for (let i = 0; i < objectSet.game.length; i++) {
            objectSet.game.objects[i].draw();
        }
    }

    for (let i = 0; i < objectSet.UI.length; i++) {
        objectSet.UI.objects[i].draw();
    }

};

canvas.color.set = (color) => {
    canvasContext.fillStyle = color;
};