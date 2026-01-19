class UI_moudle {
    constructor(x, y, height, width, color) {

    }
}

class text extends UI_moudle {
    constructor(string, color) {
        super();
    }

    draw() {
        UI.font.set(this.height);
        canvas.color.set(this.color);

        canvasContext.fillText(
            this.string,
            this.x,
            this.y
        );
    }

    click() {
        console.log("clicked: " + this.string);
    }
}