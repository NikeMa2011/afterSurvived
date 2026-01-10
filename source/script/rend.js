function setCamvasSize() {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;

    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
}

function setMousePosition(event) {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
}

function resetCanvasFrame() {
    canvasContext.fillRect(0, 0, canvas.size.width, canvas.size.height);
}