game.content = {
    page: {
        iconLink: "assets/image/image/icon.jpg",
        title: "不知道是什么"
    },
    faction: {
        china: {
            weapon: {
                primary: {
                    QBZ95: {
                        name: "QBZ95",
                        fullName: "QBZ95-1自动步枪",
                        magazineMaxRound: 30,
                        reloadTime: 2500,
                        fireDelay: 1.6,
                        ammoType: "DBP10",
                        shotRange: 20,
                        damage: {
                            headShot: 100,
                            bodyShot: 40
                        },
                        accuracy: {
                            aim: 0.6,
                            hipFire: 4.6
                        },
                        recoil: {
                            range: 5,
                            minQuantity: 20
                        }
                    }
                },
                secondary: {
                    QSZ92: {
                        name: "QSZ92",
                        fullName: "QSZ925.8毫米手枪",
                        magazineMaxRound: 20,
                        reloadTime: 2000,
                        fireDelay: 5,
                        ammoType: "DAP92",
                        shotRange: 5,
                        damage: {
                            headShot: 100,
                            bodyShot: 30
                        },
                        accuracy: {
                            aim: 0.8,
                            hipFire: 6.7
                        },
                        recoil: {
                            range: 5,
                            minQuantity: 15
                        }
                    }
                }
            }
        }
    },
};

game.setting.content = {

};

game.start = function () {
    objectSet.GO.add("player", new person());
    objectSet.GO.object["player"].position = {
        x: 0,
        y: 0
    };
    objectSet.GO.object["player"].color = game.UI.color.pureWhite;
};