onresize = function() {
    canvas.size.get();
    canvas.size.set();

    canvasContext.textBaseline = "hanging";

    objectSet.clear();
    game.site();
};

onmousemove = function(event) {
    mouse.position.set(event);

    if (game.inGame) {
        viewpoint.position.set();
        viewpoint.offset.set();
    }

    // if (game.status == "edit") {
    //     mouse.
    // }
};

onmousedown = function(event) {
    if (event.button == 0) {
        input.mouse.left();
    } else if (event.button == 2) {
        input.mouse.right();
    }
};

onkeyup = function(event) {
    keySet[event.key] = false;
};

onkeydown = function(event) {
    keySet[event.key] = true;
};