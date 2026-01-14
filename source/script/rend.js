canvas.size.set = () => {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;

    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
};

mouse.position.set = (event) => {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};

canvas.clear = () => {
    canvasContext.fillStyle = "#ffffff";

    canvasContext.fillRect(0, 0, canvas.size.width, canvas.size.height);
};

canvas.rend = () => {
    events.tick();

    canvas.clear();

    if (rendStatus.type == "startManu") {
        UI.rend.manu.startManu();
    }
};

window.addEventListener("onclick", {

});

canvas.loop = () => {
    canvas.rend();

    // window.requestAnimationFrame(loop);

    setTimeout(() => {
        canvas.loop();
    }, 200);
};