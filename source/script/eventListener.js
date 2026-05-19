onkeydown = (event) => {
    keySet[event.key] = true;
};

onkeyup = (event) => {
    keySet[event.key] = false;
};

onmousedown = (event) => {
    keySet[event.button] = true;
};

onmouseup = (event) => {
    keySet[event.button] = false;
};

onresize = () => {
    game.rend.font.setStyle();

    canvas.size.set();
    canvas.DOM.size.set();
    viewpoint.size.set();
};