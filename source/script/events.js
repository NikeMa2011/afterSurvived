canvas.size.get = () => {
    canvas.size.width = window.innerWidth;
    canvas.size.height = window.innerHeight;
};

canvas.size.set = () => {
    canvasDOM.width = canvas.size.width;
    canvasDOM.height = canvas.size.height;
};

mouse.position.set = (event) => {
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
};