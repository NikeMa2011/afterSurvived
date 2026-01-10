function tick() {

}

function checkKey() {

}

let cursorType = {
    hide() {
        canvasDOM.style.cursor = "none";
    },
    point() {
        canvasDOM.style.cursor = "pointer";
    },
    normal() {
        canvasDOM.style.cursor = "auto";
    },
    disable() {
        canvasDOM.style.cursor = "not-allowed";
    }
};

window.addEventListener("resize", setCamvasSize);

window.addEventListener("keyDown", (event) => {
    if (inGame) keySets[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    if (inGame) keySets[event.key] = false;
});