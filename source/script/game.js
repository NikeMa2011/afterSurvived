events.tick = () => {
    events
}

events.oprate.checkKey = () => {

};

events.oprate.mouse.left = () => {
    if (rendStatus.inGame) {

    }
};

objects.set = () => {
    for (let i = 0; i < objects,length.maximum; i++) {
        
    }
};

objects.add = (target, object) => {
    let setLength;

    if (target == "UI") {
        objects.UI[objects.length.UI + 1] = object;
    } else if (target == "game") {
        objects.game[objects.length.game + 1] = object;
    }
};

objects.clear = (target) => {
    if (target == "UI") {
        objects.UI = {};
        objects.length.UI = 0;
    } else if (target == "game") {
        objects.game = {};
        objects.length.game = 0;
    }
};

cursor.change = (type) => {
    if (type == "hide") {
        canvasDOM.style.cursor = "none";
    } else if (type == "point") {
        canvasDOM.style.cursor = "pointer";
    } else if (type == "normal") {
        canvasDOM.style.cursor = "auto";
    } else if (type == "disable") {
        canvasDOM.style.cursor = "not-allowed";
    } else {
        throw Error;
    }
};


onresize = () => {
    UI.text.set();
    canvas.size.set();
};

onkeydown = (event) => {
    if (rendStatus.inGame) keySets[event.key] = true;
};

onkeyup = (event) => {
    if (rendStatus.inGame) keySets[event.key] = false;
};

onmousedown = (event) => {
    if (event.button == 0) {
        events.oprate.mouse.left();
    } else if (event.button == 2) {
        // events.oprate.mouse.right();
    }
};