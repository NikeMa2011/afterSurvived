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
    keyset[event.button] = false;
};

onresize = () => {
    game.rend.font.setStyle();

    canvas.size.set();
    canvas.DOM.size.set();
};