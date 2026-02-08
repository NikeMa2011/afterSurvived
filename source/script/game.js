game.tick = function () {
    input.key.check();
    mouse.target.set();

    game.rend();

    setTimeout(() => {
        game.tick();
    }, game.FPS.milisecond);
};

game.stringToFunction = function (string) {
    switch (string) {
        case "start":
            return UI.manu.start;
        case "normal":
            return UI.manu.normal;
        case "map_choose":
            return UI.manu.map;
        case "settings_graphic":
            return UI.manu.settings.graphic;
        case "function_disable":
            return game.function.disable;
        case "edit_image":
            return UI.edit.image;
        case "accountSet_name":
            return UI.game.accountSetName;
        case "accountSet_faction":
            return UI.game.accountSetFaction;
        case "repository":
            return UI.game.repository;
        default:
            return false;
    }
};

game.siteChange = function (string) {
    game.site = game.stringToFunction(string);
    game.siteName = string;

    objectSet.clear();

    game.site();
};

game.space.set = function (target) {
    for (let x = 0; x < target.size.width; x++) {
        target.contains.push([]);

        for (let y = 0; y < target.size.height; y++) {
            target.contains[x].push(undefined);
        }
    }
};

game.item.addTo = function (object, target, x, y) {
    target[x][y] = object.create();
};

user.progress.repository.setup = function () {
    let userRepository = user.progress.repository.contains;

    game.item.addTo(gameObject.item.weapon.rifle.assault.QBZ_95_1, userRepository, 0, 0);
    // game.item.addTo(gameObject.item.weapon.rifle.subMachineGun.QCQ_05, userRepository);
    // game.item.addTo(gameObject.item.weapon.pistol.type_92_58mm, userRepository);
    // game.item.addTo(gameObject.item.weapon.melee.type_95, userRepository);

    // game.item.addTo(gameObject.item.chest.chestRig.vest.type_95, userRepository);
    // game.item.addTo(gameObject.item.head.hat.baseBallCap, userRepository);

    // game.item.addTo(gameObject.item.ammo.caliber_58x42_DBP191, userRepository);

    // game.item.addTo(gameObject.item.medical.painkill.fengYouJin, userRepository);
    // game.item.addTo(gameObject.item.medical.bandage.amryBandage, userRepository);
    // game.item.addTo(gameObject.item.medical.medicine.antibiotics, userRepository);
    // game.item.addTo(gameObject.item.medical.surgery.surgeryForcep, userRepository);

    // game.item.addTo(gameObject.item.food.eat.type_20, userRepository);
    // game.item.addTo(gameObject.item.food.drink.nongFuSpring, userRepository);

    // game.item.addTo(gameObject.item.other.compass, userRepository);
};