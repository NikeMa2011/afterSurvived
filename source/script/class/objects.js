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
        this.color = "#ffffff";
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
            canvas.color.set("#88888820");

            canvasContext.fillRect(
                this.position.x,
                this.position.y,
                this.size.width,
                this.size.height
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
        canvasContext.strokeRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );

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