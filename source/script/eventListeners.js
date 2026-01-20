onresize = () => {
    canvas.size.get();
    canvas.size.set();

    canvasContext.textBaseline = "hanging";

    objectSet.clear();
    game.site();
};

onmousemove = (event) => {
    mouse.position.set(event);
};

onmousedown = (event) => {
    if (event.button == 0) {
        input.mouse.left();
    } else if (event.button == 2) {
        input.mouse.right();
    }
};

onkeyup = (event) => {
    keySet[event.key] = false;
};

onkeydown = (event) => {
    keySet[event.key] = true;
};