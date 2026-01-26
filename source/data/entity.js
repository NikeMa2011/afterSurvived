class entity {
    constructor(x, y, height, width, ID, color) {
        this.position = {
            x: undefined,
            y: undefined
        };
        this.size = {
            width: undefined,
            height: undefined
        };
        this.ID = undefined;
    }
}

class people extends entity {
    constructor() {
        super();

        this.name = undefined;
        this.size = {
            width: 50,
            height: 200
        };
        this.health = {
            debuff: {
                bleed: {
                    head: false,
                    chest: false,
                    leg: false
                },
                pain: false,
                Wound: false,
                poison: false,
                fracture: {
                    hand: false,
                    leg: false
                },
                hunger: false,
                thirst: false,
                concussion: false
            },
            buff: {
                generation: {
                    health: false,
                    water: false,
                    food: false
                },
                listen: false,
                painkill: false,
                focus: false
            },
            parts: {
                maximum: {
                    head: undefined,
                    chest: undefined,
                    leg: undefined
                },
                head: undefined,
                chest: undefined,
                leg: undefined
            }
        };
        this.status = {
            weight: undefined,
            energy: undefined,
            health: undefined,
            food: undefined,
            water: undefined,
            radiation: undefined,
            biochemistry: undefined,
            maximum: {
                weight: undefined,
                energy: undefined,
                health: undefined,
                food: undefined,
                water: undefined,
                radiation: undefined,
                biochemistry: undefined,
            }
        };
        this.equipment = {
            store: {
                chestRig: undefined,
                backpack: undefined,
                pocket: undefined,
            },
            armor: {
                helment: undefined,
                vest: undefined
            },
            weapon: {
                primary: undefined,
                secondary: undefined,
                pistol: undefined,
                melee: undefined
            }
        };
    }

    draw() {
        canvas.color.set(this.color);

        canvasContext.fillRect(
            this.x - viewpoint.position.x + viewpoint.offset.x,
            this.y - viewpoint.position.y + viewpoint.offset.y,
            this.size.height,
            this.size.width
        );
    }
}

gameObject.entity.player.create = function() {
    let object = new people();

    object.ID = "gameObject.entity.player";
    object.name = user.name;

    object.color = "#ffffff";

    object.health.parts.head = object.health.parts.maximum.head = 40;
    object.health.parts.chest = object.health.parts.maximum.chest = 65;
    object.health.parts.leg = object.health.parts.maximum.leg = 55;

    object.status.weight = object.status.maximum.weight = 0;
    object.status.energy = object.status.maximum.energy =
    object.status.health = object.status.maximum.health =
    object.status.food = object.status.maximum.food =
    object.status.water = object.status.maximum.water =
    object.status.radiation = object.status.maximum.radiation =
    object.status.biochemistry = object.status.maximum.biochemistry = 100;

    return object;
};