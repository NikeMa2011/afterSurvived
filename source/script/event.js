mouse.position.set = function (event) {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};

canvas.size.set = function () {
    canvas.size.x = window.innerWidth;
    canvas.size.y = window.innerHeight;
};

canvas.DOM.size.set = function () {
    canvasDOM.width = canvas.size.x;
    canvasDOM.height = canvas.size.y;
};