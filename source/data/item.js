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
            this.shoot = [];
        this.ammoUsed = undefined;
        this.caliber = undefined;
        this.assessories = {};
        this.recoil = undefined;
        this.RPS = undefined;
        this.falut = {
            posibility: undefined,
            yes: false
        },
            this.accuracy = undefined;
    }
}

gameObject.item.weapon.rifle.assault.AKM.create = function () {
    let object = new weapon();

    object.ID = "gameObject.item.weapon.rifle.assault.AKM";
    object.name = "AKM";
    object.fullName = "AKM突击步枪(第三改进型)";
    object.description = "坚固可靠这一块";

    object.type = "assaultRife";

    object.durability.maximum = object.durability.full = object.durability.current = 130;

    object.shoot = [
        safety = true,
        single = false,
        auto = false
    ];

    object.size.width = 5;
    object.size.height = 3;

    object.weight.single = 3000;

    object.assessories = {
        muzzle: undefined,
        stock: undefined,
        megazine: undefined,
        grip: undefined,
        forend: undefined,
        cover: undefined
    };

    object.recoil = 4.2;
    object.RPS = 10

    object.caliber = "7.62x39";
    object.falut.posibility = 0.4;

    object.accuracy = 0.90;

    return object;
};

gameObject.item.weapon.rifle.assault.QBZ_95_1.create = function () {
    let object = new weapon();

    object.ID = "gameObject.item.weapon.rifle.assault.QBZ_95_1";
    object.name = "95-1";
    object.fullName = "95式突击步枪(改进型)";
    object.description = "做最优质的战士!";

    object.type = "assaultRife";

    object.durability.maximum = object.durability.full = object.durability.current = 120;

    object.shoot = [
        safety = true,
        single = false,
        auto = false
    ];

    object.size.width = 5;
    object.size.height = 3;

    object.weight.single = 3150;

    object.assessories = {
        muzzle: undefined,
        megazine: undefined,
        handle: undefined
    };

    object.recoil = 3.9;
    object.RPS = 10

    object.caliber = "5.8x42";
    object.falut.posibility = 0.45;

    object.accuracy = 0.955;

    return object;
};

gameObject.item.weapon.rifle.assault.AK_74N.create = function () {
    let object = new weapon();

    object.ID = "gameObject.item.weapon.rifle.assault.AK_74N";
    object.name = "AK-74N";
    object.fullName = "AK-74N突击步枪";
    object.description = "苏联入在看到越南战争中美军用的5.56mm口径子弹的综合性能后对自家AK进行魔改的产物";

    object.type = "assaultRifle";

    object.durability.maximum = object.durability.full = object.durability.current = 130;

    object.shoot = [
        safety = true,
        single = false,
        auto = false
    ];

    object.size.width = 5;
    object.size.height = 3;

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
    object.falut.posibility = 0.4;

    object.accuracy = 0.92;

    return object;
};

gameObject.item.weapon.pistol.PM.create = function () {
    let object = new weapon();

    object.ID = "gameObject.item.weapon.pistol.PM";
    object.name = "PM";
    object.fullName = "PM手枪";
    object.description = "你知道吗? 手枪实际上只是自卫武器";

    object.type = "pistol";

    object.durability.maximum = object.durability.full = object.durability.current = 60;

    object.shoot = [
        safety = true,
        single = false
    ];

    object.size.width = 2;
    object.size.height = 2;

    object.weight.single = 650;

    object.assessories = {
        magazine: undefined
    };

    object.caliber = "9x18";
    object.falut.posibility = 0.36;

    object.accuracy = 0.88;

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


gameObject.item.ammo.caliber_545x39_7N6.create = function () {
    let object = new ammo();

    object.ID = "gameObject.item.ammo.caliber_545x39_7N6";
    object.name = "5.45x39";
    object.fullName = "5.45x39mm 7N6弹药";
    object.description = "5.45x39毫米(mm) 7N6 软化钢芯全金属被甲弹";

    object.size.height = object.size.width = 1;

    object.caliber = "5.45x39";

    object.weight.single = 11;

    object.quantity.maximum = object.quantity.current = 60;

    object.damage = 50;
    object.armorPiercing = 3;
    object.durabilityCost = 0.08;
    object.speed = 890;

    return object;
};

gameObject.item.ammo.caliber_9x18_FMJ.create = function () {
    let object = new ammo();

    object.ID = "gameObject.item.ammo.caliber_9x18_FMJ";
    object.name = "9x18";
    object.fullName = "9x18mm马卡洛夫弹药";
    object.description = "9x18毫米(mm) FMJ 全金属披甲弹";

    object.size.height = object.size.width = 1;

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

gameObject.item.magazine.AKseries_545x39_30.create = function () {
    let object = new megazine();

    object.ID = "gameObject.item.magazine.AKseries_545x39_30";
    object.name = "AK弹匣";
    object.fullName = "AK系列7.62x39mm子弹钢弹匣";
    object.description = "为AK系列枪械设计的7.62x39mm子弹弹匣, 弹容量为30发";
    object.type = "megazine";

    object.caliber = "762x39";
    object.maximumQuantity = 30;

    object.wieght.single = 330;

    object.size.height = 2;
    object.size.width = 1;
};

gameObject.item.magazine.AKseries_545x39_30.create = function () {
    let object = new megazine();

    object.ID = "gameObject.item.magazine.AKseries_545x39_30";
    object.name = "AK弹匣";
    object.fullName = "AK系列5.45x39mm子弹塑料弹匣";
    object.description = "为AK系列枪械设计的5.45x39mm子弹弹匣, 弹容量为30发";
    object.type = "megazine";

    object.caliber = "545x39";
    object.maximumQuantity = 30;

    object.wieght.single = 230;

    object.size.height = 2;
    object.size.width = 1;
};

gameObject.item.magazine.PM_9x18_8.create = function () {
    let object = new megazine();

    object.ID = "gameObject.item.magazine.PM_9x18_8";
    object.name = "PM弹匣";
    object.fullName = "PM手枪9x18mm子弹弹匣";
    object.description = "为PM系列设计的9x18mm子弹弹匣, 弹容量为8发";
    object.type = "megazine";

    object.caliber = "9x18";
    object.maximumQuantity = 8;

    object.wieght.single = 80;

    object.size.height = object.size.width = 1;
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