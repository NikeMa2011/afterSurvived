class item {
    constructor() {
        this.ID = undefined;
        this.name = undefined;
        this.fullName = undefined;
        this.description = undefined;
        this.type = undefined;
        this.size = {
            height: undefined,
            width: undefined,
            depth: undefined
        };
        this.weight = {
            single: undefined,
            current: undefined
        };
        this.position = {
            x: undefined,
            y: undefined,
            z: undefined
        };
        this.model = undefined;
    }
}

class weapon extends item {
    constructor() {
        super();

        this.durability = {
            maximum: undefined,
            full: undefined,
            current: undefined
        },
            this.ammoUsed = undefined;
        this.caliber = undefined;
        this.assessories = {};
        this.recoil = undefined;
        this.RPS = undefined;
        this.falut = {
            posibility: undefined,
            yes: undefined
        },
            this.accuracy = undefined;
    }
}

gameObject.item.waepon.rifle.assault.AK_74.create = () => {
    let object = new weapon();

    object.ID = "gameObject.item.waepon.rifle.assault.AK_74N";
    object.name = "AK-74";
    object.fullName = "AK-74突击步枪";
    object.description = "AK-74突击步枪, 全称:\"1974年式卡拉什尼科夫自动步枪\", 是苏联在1970年代开始生产及装备的5.45x39mm小口径突击步枪, 至今仍然是许多前苏联成员国的制式步枪";

    object.type = "assaultRifle";

    object.durability.maximum = object.durability.full = object.durability.current = 130;

    object.size.width = 5;
    object.size.height = 3;
    object.size.depth = 1;

    object.weight.single = 3150;

    object.assessories = {
        muzzle: undefined,
        stock: undefined,
        megazine: undefined,
        grip: undefined,
        forend: undefined,
        cover: undefined,
        dovetail: undefined
    };

    object.recoil = 1.5;
    object.RPS = 10

    object.caliber = "5.45x39";
    object.falut.posibility = 0.3;
    object.falut.yes = false;

    object.accuracy = 0.95;

    return object;
};

gameObject.item.waepon.pistol.PM.create = () => {
    let object = new weapon();

    object.ID = "gameObject.item.waepon.pistol.PM";
    object.name = "PM";
    object.fullName = "PM手枪";
    object.description = "全称:\"马卡洛夫手枪\", 是一种俄罗斯制的半自动手枪, 此枪在1952年至1991年期间为苏联军队的制式手枪, 至今仍在使用";

    object.type = "pistol";

    object.durability.maximum = object.durability.full = object.durability.current = 60;

    object.size.width = 2;
    object.size.height = 2;
    object.size.depth = 1;

    object.weight.single = 650;

    object.assessories = {
        magazine: undefined
    };

    object.caliber = "9x18";
    object.falut.posibility = 0.26;
    object.falut.yes = false;

    object.accuracy = 0.92;

    return object;
};

class ammo extends item {
    constructor() {
        super();

        this.caliber = undefined;
        this.quantity = {
            maximum: undefined,
            current: undefined
        };
        this.damage = undefined;
        this.armorPiercing = undefined;
        this.durabilityCost = undefined;
        this.speed = undefined;
    }
}


gameObject.item.ammo.caliber_545x39_7N6.create = () => {
    let object = new ammo();

    object.ID = "gameObject.item.ammo.caliber_545x39_7N6";
    object.name = "5.45x39";
    object.fullName = "5.45x39mm 7N6弹药";
    object.description = "5.45x39毫米(mm) 7N6 软化钢芯全金属被甲弹";

    object.size.height = object.size.width = object.size.depth = 1;

    object.caliber = "5.45x39";

    object.weight.single = 11;

    object.quantity.maximum = object.quantity.current = 60;

    object.damage = 50;
    object.armorPiercing = 3;
    object.durabilityCost = 0.08;
    object.speed = 890;

    return object;
};

gameObject.item.ammo.caliber_9x18_FMJ.create = () => {
    let object = new ammo();

    object.ID = "gameObject.item.ammo.caliber_9x18";
    object.name = "9x18";
    object.fullName = "9x18mm马卡洛夫弹药";
    object.description = "9x18毫米(mm) 全金属披甲弹";

    object.size.height = object.size.width = object.size.depth = 1;

    object.caliber = "9x18";

    object.weight.single = 6;

    object.quantity.maximum = object.quantity.current = 80;

    object.damage = 36;
    object.armorPiercing = 1.5;
    object.durabilityCost = 0.1;
    object.speed = 320;

    return object;
};

class megazine extends item {
    constructor() {
        super();

        this.caliber = undefined;
        this.ammoStored = undefined;
        this.maximumQuantity = undefined;
    }
}

gameObject.item.magazine.AKseries_545x39.create = () => {
    let object = new megazine();

    object.ID = "gameObject.item.magazine.AKseries_545x39";
    object.name = "AK弹匣";
    object.fullName = "AK系列5.45x39mm子弹弹匣";
    object.description = "为AK系列枪械设计的5.45x39mm子弹弹匣, 弹容量为30发";
    object.type = "megazine";

    object.caliber = "545x39";
    object.maximumQuantity = 30;

    object.wieght.single = 150;

    object.size.height = 2;
    object.size.width = 1;
    object.size.depth = 1;
};

gameObject.item.magazine.PM_9x18.create = () => {
    let object = new megazine();

    object.ID = "gameObject.item.magazine.PM_9x18";
    object.name = "PM弹匣";
    object.fullName = "PM手枪9x18mm子弹弹匣";
    object.description = "为PM手枪设计的9x18mm子弹弹匣, 弹容量为8发";
    object.type = "megazine";

    object.caliber = "9x18";
    object.maximumQuantity = 8;

    object.wieght.single = 80;

    object.size.height = object.size.width = object.size.depth = 1;
};

class medical extends item {
    constructor() {
        super();

        this.durability = {
            maximum: undefined,
            current: undefined
        };
        this.heal = undefined;
    }
}

class bandage extends medical {
    constructor() {
        super();

        this.heal = {
            durabilityCost: {
                smallBleed: undefined,
                bigBleed: undefined
            },
            quantity: {
                smallBleed: undefined,
                bigBleed: undefined
            }
        };
    }
}

class medicine extends medical {
    constructor() {
        super();

        this.heal = {
            durabilityCost: undefined,
            effect: undefined
        };
    }
}