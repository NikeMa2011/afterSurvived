onmousemove = (event) => {
    mouse.position.set(event);
}

onkeydown = (event) => {
    keySet[event.key] = true;
};

onkeyup = (event) => {
    keySet[event.key] = false;
};

onmousedown = (event) => {
    keySet[event.button] = true;
};

onmousedown = (event) => {
    keySet[event.button] = false;
};

onresize = () => {
    canvas.size.set();
    canvas.DOM.size.set();
    game.UI.font.style.set();
};