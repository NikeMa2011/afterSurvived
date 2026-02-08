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
        this.onClickFunction = undefined;

        this.rollable = undefined;
        this.rollOffset = 0;
        this.maximumRollOffset = undefined;
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

        this.color = UI.color.dark;
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
            this.position.y - this.rollOffset,
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
        this.currentLine = 0;
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

        for (let i = 0; i < this.lineSet.length; i++) {
            canvasContext.beginPath();

            for (let j = 0; j < this.lineSet[i].length; j += 2) {
                canvasContext.lineTo(
                    this.position.x + this.lineSet[i][j],
                    this.position.y + this.lineSet[i][j + 1]
                );
            }

            canvasContext.stroke();
        }
    }
}