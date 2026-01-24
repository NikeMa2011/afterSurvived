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

mouse.target.set = () => {
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
        } else {
            objectSet.UI.objects[i].onMouse = false;
        }
    }
};

game.FPS.set = () => {
    game.FPS.milisecond = Math.round(1000 / game.FPS.value);
}