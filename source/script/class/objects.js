class UI_moudle {
    constructor(x, y, height, width, color, onMouse) {

    }

    click() {
        if (this.target != undefined) {
            game.changeSite(this.target)
        }
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
}

class option extends UI_moudle {
    constructor(target) {
        super();
    }

    draw() {
        if (this.onMouse) {
            canvas.color.set("#88888820");

            canvasContext.fillRect(
                this.x,
                this.y,
                this.width,
                this.height
            );
        }

        UI.font.set(this.height);
        canvas.color.set(this.color);

        canvasContext.fillText(
            this.string,
            this.x,
            this.y
        );
    }
}

class box extends UI_moudle {
    constructor() {
        super();
    }

    draw() {
        canvas.color.set(this.color);

        canvasContext.strokeRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}