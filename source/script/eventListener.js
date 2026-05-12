onmousemove = mouse.position.set;

onresize = () => {
    canvas.size.set();
    canvas.DOM.size.set();

    game.rend.fontStyleSet();

    objectSet.UI.objectPositionSet();
};

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