onresize = () => {
    canvas.size.get();
    canvas.size.set();
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
}