game.UI.function.highLightWithBorder = function (object) {
    canvasContext.fillStyle = "rgba(125, 125, 125, " + object.onMouse.alpha / 2 + ")";

    canvasContext.fillRect(
        object.position.x - game.UI.gap.small,
        object.position.y - game.UI.gap.small,
        object.size.x + (game.UI.gap.small * 2),
        object.size.y + (game.UI.gap.small * 2)
    );
};

class UI {
    constructor() {
        this.ID = undefined;
        this.onClick = undefined;
        this.onMouse = {
            status: undefined,
            function: undefined,
            alpha: 0
        };
        this.position = {
            x: undefined,
            y: undefined
        };
        this.color = undefined;
    }
};

class string extends UI {
    constructor() {
        super();
        this.string = undefined;
        this.fontSize = undefined;
    }

    autoSet() {
        this.string == undefined ? this.string = "undefined" : undefined;
        this.size == undefined ? game.UI.font.size.medium : undefined;
        this.color == undefined ? this.color = "#e600ff" : undefined;
        this.size = {
            x: this.fontSize * game.UI.font.size.getStringWidth(this.string),
            y: this.fontSize
        };
    }

    draw() {
        if (this.onMouse.status) {
            if (this.onMouse.function) {
                this.onMouse.function(this);
            }
        }

        game.UI.font.set(this.fontSize);
        canvasContext.fillStyle = this.color;

        canvasContext.fillText(
            this.string,
            this.position.x,
            this.position.y
        );
    }
};