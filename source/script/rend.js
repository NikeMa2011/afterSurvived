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

canvas.clear = () => {
    canvas.color.set("#ffffff");
    canvasContext.fillRect(0, 0, canvas.size.width, canvas.size.height);
};

canvas.color.set = (color) => {
    canvasContext.fillStyle = color;
};