class UI_moudle {
    constructor() {
        this.position = {
            x: undefined,
            y: undefined
        };
        this.size = {
            height: undefined,
            width: undefined
        };
        this.color = UI.color.white;
        this.onMouse = undefined;
        this.onclick = undefined;
    }

    click() {
        if (this.onclick) {
            this.onclick();
        }
    }
}

class text extends UI_moudle {
    constructor() {
        super();

        this.string = undefined;
    }

    draw() {
        canvas.color.set(this.color);
        UI.font.set(this.size.height);

        canvasContext.fillText(
            this.string,
            this.position.x,
            this.position.y
        );
    }
}

class banner extends UI_moudle {
    constructor() {
        super();

        this.color = ""
    }

    draw() {
        canvas.color.set(this.color);

        canvasContext.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
}

class option extends UI_moudle {
    constructor() {
        super();

        this.onclick = game.function.disable;
    }

    draw() {
        if (this.onMouse) {
            canvas.color.set(UI.color.darkBackground);

            canvasContext.fillRect(
                this.position.x - UI.edge,
                this.position.y - UI.edge,
                this.size.width + UI.edge * 2,
                this.size.height + UI.edge * 2
            );
        }

        canvas.color.set(this.color);
        UI.font.set(this.size.height);

        canvasContext.fillText(
            this.string,
            this.position.x,
            this.position.y
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
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
}

class image extends UI_moudle {
    constructor() {
        super();

        this.lineSet = [];
        this.lastMousePosition = {
            x: 0,
            y: 0
        };
    }

    draw() {
        if (this.lineSet.length == 0) {
            return;
        }

        canvas.color.set(this.color);

        canvasContext.beginPath();

        for (let i = 0; i < this.lineSet.length; i+=2) {
            canvasContext.lineTo(
                this.position.x + this.lineSet[i],
                this.position.y + this.lineSet[i + 1]
            );
        }

        canvasContext.stroke();
    }
}