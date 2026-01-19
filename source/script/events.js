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

input.key.check = (event) => {
    if (game.inGame) {
        if (event.key == "Escape") {
            
        }
    }
};

input.mouse.left = () => {
    if (game.inGame) {
        
    } else {
        for (let i = 0; i < objectSet.UI.length; i++) {
            if (
                mouse.position.x >= objectSet.UI.objects[i].x &&
                mouse.position.x <= objectSet.UI.objects[i].x + objectSet.UI.objects[i].width &&
                mouse.position.y >= objectSet.UI.objects[i].y &&
                mouse.position.y <= objectSet.UI.objects[i].y + objectSet.UI.objects[i].height
            ) {
                objectSet.UI.objects[i].click();
            }
        }
    }
};

input.mouse.right = () => {

};