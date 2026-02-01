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
        this.onMouseFunction = undefined;
        this.onClickFunction = () => game.function.disable();
    }

    click() {
        if (this.onClickFunction) {
            this.onClickFunction();
        }
    }

    mouse() {
        if (this.onMouse) {
            this.onMouseFunction();
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

        this.color = "";
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
                this.position.x - UI.gaps.edge,
                this.position.y - UI.gaps.edge,
                this.size.width + UI.gaps.edge * 2,
                this.size.height + UI.gaps.edge * 2
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
        if (this.string) {
            UI.font.set(UI.font.size.small);

            canvasContext.fillText(
                this.string,
                this.position.x + UI.gaps.edge,
                this.position.y + UI.gaps.edge
            );
        }

        canvasContext.strokeRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
}

class square extends UI_moudle {
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

        for (let i = 0; i < this.lineSet.length; i += 2) {
            canvasContext.lineTo(
                this.position.x + this.lineSet[i],
                this.position.y + this.lineSet[i + 1]
            );
        }

        canvasContext.stroke();
    }
}