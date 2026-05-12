mouse.position.set = function (event) {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};

canvas.size.set = function () {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

canvas.DOM.size.set = function () {
    canvasDOM.width = window.innerWidth;
    canvasDOM.height = window.innerHeight;
};