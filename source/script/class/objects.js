class UI_moudle {
    constructor(x, y, color) {

    }
}

class text extends UI_moudle {
    constructor(string, color, size, width) {
        super();
    }

    draw() {
        UI.font.set(this.size);
        canvas.color.set(this.color);

        canvasContext.fillText(
            this.string,
            this.x,
            this.y
        );
    }
}