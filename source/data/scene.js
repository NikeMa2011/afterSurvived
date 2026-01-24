class scene {
    constructor() {
        this.ID = undefined;
        this.size = {
            height: undefined,
            width: undefined
        },
        this.position = {
            x: undefined,
            y: undefined,
            z: undefined,
        },
        this.color = undefined
    }
}

class wall extends scene {
    constructor() {
        super();
    }

    draw() {
        canvasContext.fill(
            this.position.x + viewpoint.position.x,
            this.position.z + viewpoint.position.y,
            this.size.height,
            this.size.width
        );
    }
}

class floor extends scene {
    constructor() {
        super();
    }

    draw() {
        canvasContext.fill(
            this.position.x + viewpoint.position.x,
            this.position.z + viewpoint.position.y,
            this.size.height,
            this.size.width
        );
    }
}