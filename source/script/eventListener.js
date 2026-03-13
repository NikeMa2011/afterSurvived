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