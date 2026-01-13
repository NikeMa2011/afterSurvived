function tick() {

}

function checkKey() {

}

const cursor = {
    change(type) {
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
    }
};

window.addEventListener("resize", () => {
    UI.font.set();
    canvas.size.set();
});

window.addEventListener("keyDown", (event) => {
    if (rendStatus.inGame) keySets[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    if (rendStatus.inGame) keySets[event.key] = false;
});
