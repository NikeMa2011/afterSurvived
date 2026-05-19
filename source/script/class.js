class entity {
    constructor() {
        this.size = {
            width: 50,
            height: 200
        };
        this.position = {
            x: undefined,
            y: undefined
        };
        this.direction = undefined;
        this.color = game.UI.color.purePurple;
    };
};

class person extends entity {
    constructor() {
        super();

        this.gear = {
            primary: undefined,
            secondary: undefined,
            melee: undefined,
            throwable: undefined,
            medic: undefined
        };
    };

    draw() {
        if (
            this.position.x + (this.size.width / 2) > viewpoint.position.x &&
            this.position.x - (this.size.width / 2) < viewpoint.position.x + viewpoint.size.width &&
            this.position.y > viewpoint.position.y &&
            this.position.y + this.size.height < viewpoint.position.y + viewpoint.size.height
        ) {
            canvasContext.fillStyle = this.color;

            canvasContext.fillRect(
                viewpoint.position.x - (this.position.x - this.size.width / 2) + viewpoint.offset.x,
                viewpoint.position.y - this.position.y - this.size.height + viewpoint.offset.y,
                this.size.width,
                this.size.height
            );
        }
    }
};