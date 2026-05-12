// TODO: 加按钮被鼠标选中高亮效果

class UI {
    constructor() {
        this.ID = undefined;
        this.position = {
            x: undefined,
            y: undefined,
            expression: {
                x: undefined,
                y: undefined
            }
        };
        this.size = {
            x: undefined,
            y: undefined
        };
        this.border = {
            color: ""
        }
    }

    positionSet = function () {
        this.position.x = this.position.expression.x();
        this.position.y = this.position.expression.y();
    };
};

class string extends UI {
    constructor() {
        super();

        this.string = "undefined";
        this.fontColor = game.UI.color.purePurple;
        this.fontSize = game.UI.font.size.medium;
    }

    sizeSet = function () {
        this.size.x = this.fontSize * game.UI.font.getStringWidthRatio(this.string);
        this.size.y = this.fontSize;
    };

    draw = function () {
        if (this.border.color) {
            canvasContext.strokeStyle = this.border.color;
            canvasContext.strokeRect(
                this.position.x,
                this.position.y,
                this.size.x,
                this.size.y
            );
        }

        canvasContext.fillStyle = this.fontColor;
        game.rend.fontSizeSet(this.fontSize);

        canvasContext.fillText(
            this.string,
            this.position.x,
            this.position.y
        );
    };
};

class image extends UI {
    constructor() {
        super();

        this.image = {};
    }

    draw = function () {
        if (this.border.color) {
            canvasContext.strokeStyle = this.border.color;
            canvasContext.strokeRect(
                this.position.x,
                this.position.y,
                this.size.x,
                this.size.y
            );
        }

        canvasContext.fillStyle = this.color;
        game.rend.fontSizeSet(this.fontSize);

        canvasContext.fillText(
            this.string,
            this.position.x,
            this.position.y
        );
    };
};

class box extends UI {
    constructor() {
        super();

        this.innerPart = {
            atLeft: true,
            size: undefined
        }
    }

    draw() {
        if (this.border.color) {
            canvasContext.strokeStyle = this.border.color;
            canvasContext.strokeRect(
                this.position.x,
                this.position.y,
                this.size.x,
                this.size.y
            );
        }


    }
};