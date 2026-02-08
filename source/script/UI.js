UI.option.add = function (string, height, x, y, onClickFunction, onMouseFunction) {
    let object = new option();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    onClickFunction ? object.onClickFunction = onClickFunction : undefined;
    onMouseFunction ? object.onMouseFunction = onMouseFunction : undefined;

    objectSet.UI.add(object);
};
UI.banner.add = function (width, height, x, y) {
    let object = new banner();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};
UI.text.add = function (string, height, x, y) {
    let object = new text();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};
UI.box.add = function (string, width, height, x, y, rollable, maximumRollOffset, onClickFunction, item) {
    let object = new box();

    object.string = string;
    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    rollable ? object.rollable = rollable : undefined;
    maximumRollOffset ? object.maximumRollOffset = maximumRollOffset : undefined;
    onClickFunction ? object.onClickFunction = onClickFunction : undefined;
    item ? object.item = item : undefined;

    objectSet.UI.add(object);
};
UI.image.add = function (width, height, x, y, path, onClickFunction) {
    let object = new image();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    path ? object.lineSet = path : undefined;
    onClickFunction ? object.onClickFunction = onClickFunction : undefined;

    objectSet.UI.add(object);
};
UI.game.itemSpace.add = function (width, height, positionX, positionY, rollable, maximumRollOffset, item) {
    UI.box.add(
        undefined,
        width * 80,
        height * 80,
        positionX,
        positionY,
        rollable,
        maximumRollOffset
    );

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            UI.game.itemSpace.single.add(
                80,
                80,
                positionX + 80 * x,
                positionY + 80 * y,
                rollable,
                maximumRollOffset
            );
        }
    }
};
UI.game.itemSpace.single.add = function (width, height, x, y, rollable, maximumRollOffset) {
    let object = new box();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    rollable ? object.rollable = rollable : undefined;
    maximumRollOffset ? object.maximumRollOffset = maximumRollOffset : undefined;

    object.color = UI.color.lightDark;

    objectSet.UI.add(object);
};

UI.game.item.add = function (item, positionX, positionY) {
    let object = new box();

    object.item = item;
    object.size.width = item.size.width * 80;
    object.size.height = item.size.height * 80;

    object.position.x = positionX;
    object.position.y = positionY;

    object.model = item.model;
};

UI.font.set = function (height) {
    canvasContext.font = height + "px " + UI.font.famliy;
};

UI.manu.start = function () {
    UI.option.add(
        "设置",
        UI.font.size.large,
        UI.gaps.padding,
        canvas.size.height - UI.gaps.padding - UI.font.size.large,
        () => game.siteChange("settings_graphic")
    );
    UI.option.add(
        "商人",
        UI.font.size.large,
        UI.gaps.padding,
        canvas.size.height - (UI.gaps.gap + UI.font.size.large) - UI.gaps.padding - UI.font.size.large
    );
    UI.option.add(
        "仓库",
        UI.font.size.large,
        UI.gaps.padding,
        canvas.size.height - (UI.gaps.gap + UI.font.size.large) * 2 - UI.gaps.padding - UI.font.size.large,
        () => game.siteChange("repository")
    );
    UI.option.add(
        "逃离",
        UI.font.size.large,
        UI.gaps.padding,
        canvas.size.height - (UI.gaps.gap + UI.font.size.large) * 3 - UI.gaps.padding - UI.font.size.large,
        () => game.siteChange("map_choose")
    );

    UI.text.add(
        game.version,
        UI.font.size.small,
        UI.gaps.padding,
        UI.gaps.padding
    );

    UI.text.add(
        "为了游戏的稳定 请尽量不要打开开发者工具",
        UI.font.size.small,
        canvas.size.width - UI.gaps.padding - UI.font.size.small * 19,
        UI.gaps.padding
    );
    UI.option.add(
        "Github仓库链接: https://github.com/NikeMa2011/afterSurvived",
        UI.font.size.small,
        canvas.size.width - UI.gaps.padding - UI.font.size.small * 31.5,
        UI.gaps.padding + UI.gaps.edge + UI.font.size.small,
        function () {
            window.open("https://github.com/NikeMa2011/afterSurvived");
        }
    );
};

UI.manu.normal = function () {
    UI.option.add(
        "设置",
        UI.font.size.large,
        UI.gaps.padding,
        canvas.size.height - UI.gaps.padding - UI.font.size.large
    );

    UI.option.add(
        "继续",
        UI.font.size.large,
        UI.gaps.padding,
        canvas.size.height - (UI.gaps.padding + UI.font.size.large) - UI.gaps.padding - UI.font.size.large,
    );
};

UI.manu.settings.graphic = function () {
    UI.banner.add(
        canvas.size.width,
        UI.font.size.large + UI.gaps.padding * 2,
        0,
        0
    );
    UI.text.add(
        "设置-图形",
        UI.font.size.large,
        canvas.size.width / 2 - (UI.font.size.large * 5) / 2,
        UI.gaps.padding
    );
};

UI.manu.map = function () {
    UI.text.add(
        "选择地图",
        UI.font.size.large,
        canvas.size.width / 2 - (UI.font.size.large * 4) / 2,
        UI.gaps.padding
    );

    UI.option.add(
        "测试地图",
        UI.font.size.large,
        canvas.size.width / 2 - (UI.font.size.large * 4) / 2,
        canvas.size.height / 2 - UI.font.size.large / 2
    );

    UI.image.add(

    );
};

UI.edit.image = function () {
    UI.text.add(
        "图片编辑",
        UI.font.size.large,
        canvas.size.width - UI.gaps.padding - UI.font.size.large * 4,
        UI.gaps.padding
    );

    UI.image.add(
        1000,
        1000,
        0,
        0,
        [[]],
        function () {
            if (
                mouse.position.x > 1000 ||
                mouse.position.y > 1000 ||
                mouse.position.x == this.lastMousePosition.x &&
                mouse.position.y == this.lastMousePosition.y
            ) {
                return;
            }

            this.lineSet[this.currentLine].push(mouse.position.x);
            this.lineSet[this.currentLine].push(mouse.position.y);

            this.lastMousePosition.x = mouse.position.x;
            this.lastMousePosition.y = mouse.position.y;
        }
    );
    UI.box.add(
        "画布",
        1000,
        1000,
        0,
        0
    );

    UI.option.add(
        "删除一组顶点",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        UI.gaps.padding,
        function () {
            objectSet.UI.objects[1].lineSet.pop();
            objectSet.UI.objects[1].lineSet.pop();
        }
    );
    UI.option.add(
        "新镇一条线",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        UI.gaps.padding + UI.font.size.medium + UI.gaps.gap,
        function () {
            objectSet.UI.objects[1].lineSet.push([]);

            objectSet.UI.objects[1].currentLine++;
        }
    );
    UI.option.add(
        "删除一条线",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        UI.gaps.padding + (UI.font.size.medium + UI.gaps.gap) * 2,
        function () {
            if (objectSet.UI.objects[1].currentLine < 0) {
                alert("现在只剩一条线了");

                return;
            }

            objectSet.UI.objects[1].lineSet.pop([undefined]);

            objectSet.UI.objects[1].currentLine--;
        }
    );
    UI.option.add(
        "图片位置校正",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        UI.gaps.padding + (UI.font.size.medium + UI.gaps.gap) * 3,
        function () {
            let minimumPosition = {
                x: objectSet.UI.objects[2].size.width,
                y: objectSet.UI.objects[2].size.height
            };

            for (let i = 0; i < objectSet.UI.objects[1].lineSet.length; i += 2) {
                if (objectSet.UI.objects[1].lineSet[i] < minimumPosition.x) {
                    minimumPosition.x = objectSet.UI.objects[1].lineSet[i];
                }

                if (objectSet.UI.objects[1].lineSet[i + 1] < minimumPosition.y) {
                    minimumPosition.y = objectSet.UI.objects[1].lineSet[i + 1];
                }
            }

            for (let i = 0; i < objectSet.UI.objects[1].lineSet.length; i += 2) {
                objectSet.UI.objects[1].lineSet[i] -= minimumPosition.x;
                objectSet.UI.objects[1].lineSet[i + 1] -= minimumPosition.y;
            }
        }
    );
    UI.option.add(
        "设置图片大小",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        UI.gaps.padding + (UI.font.size.medium + UI.gaps.gap) * 4,
        function () {
            for (let i = 0; i < objectSet.UI.objects[1].lineSet.length; i += 2) {
                objectSet.UI.objects[1].lineSet[i] = Math.floor(
                    objectSet.UI.objects[2].size.width * (objectSet.UI.objects[1].lineSet[i] / objectSet.UI.objects[1].size.width)
                );
                objectSet.UI.objects[1].lineSet[i + 1] = Math.floor(
                    objectSet.UI.objects[2].size.height * (objectSet.UI.objects[1].lineSet[i + 1] / objectSet.UI.objects[1].size.height)
                );
            }

            objectSet.UI.objects[1].size.width = objectSet.UI.objects[2].size.width;
            objectSet.UI.objects[1].size.height = objectSet.UI.objects[2].size.height;
        }
    );
    UI.option.add(
        "获取图片大小",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        UI.gaps.padding + (UI.font.size.medium + UI.gaps.gap) * 5,
        function () {
            let minimumSize = {
                x: 0,
                y: 0
            };

            for (let i = 0; i < objectSet.UI.objects[1].lineSet.length; i += 2) {
                for (let j = 0; j < objectSet.UI.objects[1].lineSet[i].length; j += 2) {
                    if (objectSet.UI.objects[1].lineSet[i][j] > minimumSize.x) {
                        minimumSize.x = objectSet.UI.objects[1].lineSet[i][j];
                    }

                    if (objectSet.UI.objects[1].lineSet[i][j + 1] > minimumSize.y) {
                        minimumSize.y = objectSet.UI.objects[1].lineSet[i][j + 1];
                    }
                }
            }

            objectSet.UI.objects[1].size.width = minimumSize.x;
            objectSet.UI.objects[1].size.height = minimumSize.y;

            alert("图片大小: X = " + minimumSize.x + "px; Y = " + minimumSize.y + ';');
        }
    );

    UI.option.add(
        "在控制台打印图片顶点路径",
        UI.font.size.medium,
        UI.gaps.padding,
        objectSet.UI.objects[2].size.width + UI.gaps.padding,
        () => {
            console.log(JSON.stringify(objectSet.UI.objects[1].lineSet));
        }
    );
    UI.text.add(
        "图片顶点路径为两两一组, [x, y], 第一个值是X坐标, 第二个值是Y坐标",
        UI.font.size.medium,
        UI.gaps.padding,
        objectSet.UI.objects[2].size.width + UI.gaps.edge + UI.font.size.medium + UI.gaps.padding
    );
    UI.text.add(
        "所有线的存储为this.lineSet, 单个线为this.lineSet[线的索引], lineSet为二维数组",
        UI.font.size.medium,
        UI.gaps.padding,
        objectSet.UI.objects[2].size.width + UI.gaps.edge * 2 + UI.font.size.medium * 2 + UI.gaps.padding
    );
};

UI.game.accountSetName = function () {
    UI.text.add(
        "账号创建",
        UI.font.size.large,
        (canvas.size.width - UI.font.size.large * 4) / 2,
        UI.gaps.padding
    );

    UI.text.add(
        "请输入你的名字",
        UI.font.size.big,
        (canvas.size.width - UI.font.size.big * 7) / 2,
        canvas.size.height / 2 - UI.font.size.big
    );
    UI.text.add(
        "undefined",
        UI.font.size.big,
        (canvas.size.width - UI.font.size.big * 5) / 2,
        canvas.size.height / 2 + UI.font.size.big
    );

    UI.option.add(
        "下一步",
        UI.font.size.big,
        (canvas.size.width - UI.font.size.big * 3) / 2,
        canvas.size.height - canvas.size.height / 4,
        function () {
            user.name = "undefined";

            game.siteChange("accountSet_faction");
        }
    );
}

UI.game.accountSetFaction = function () {
    UI.text.add(
        "选择阵营",
        UI.font.size.large,
        (canvas.size.width - UI.font.size.large * 4) / 2,
        UI.gaps.padding,
    );

    UI.option.add(
        "以中国和俄罗斯为首的联盟",
        UI.font.size.big,
        canvas.size.width / 4 - (UI.font.size.big * 12) / 2,
        canvas.size.height / 4 - UI.font.size.big / 2,
        function () {
            user.faction = "CRUF";

            game.siteChange("start");
        },
        function () {
            objectSet.UI.objects[3].string = "CRUF (China and Russia United Force, 中俄联合力量) 是以中国和俄罗斯为首的联合军事力量";
            objectSet.UI.objects[4].string = "用于反击北大西洋联合力量对中华人民共和国和俄罗斯联邦的领土入侵以及调查三都爆炸事件";
        }
    );
    UI.option.add(
        "以北约为首的联盟",
        UI.font.size.big,
        canvas.size.width - canvas.size.width / 4 - (UI.font.size.big * 8) / 2,
        canvas.size.height / 4 - UI.font.size.big / 2,
        function () {
            user.faction = "NAUF";

            game.siteChange("start");
        },
        function () {
            objectSet.UI.objects[3].string = "NAUF (North Atlantic United Force, 北大西洋联合力量) 是以北约(NATO)为首的的联合军事力量";
            objectSet.UI.objects[4].string = "用于入侵中国人民共和国和俄罗斯联邦及其他国家的领土搜寻有关三都爆炸事件的线索";
        }
    );

    UI.text.add(
        "",
        UI.font.size.medium,
        UI.gaps.padding,
        canvas.size.height - UI.gaps.padding - UI.font.size.medium * 2 - UI.gaps.edge
    );
    UI.text.add(
        "",
        UI.font.size.medium,
        UI.gaps.padding,
        canvas.size.height - UI.gaps.padding - UI.font.size.medium
    );
}

UI.game.gear = function () {
    UI.box.add(
        "头部",
        160,
        160,
        UI.gaps.padding,
        80 + UI.gaps.padding * 2
    );
    UI.box.add(
        "耳部",
        160,
        160,
        UI.gaps.padding + 160 + UI.gaps.edge,
        80 + UI.gaps.padding * 2
    );
    UI.box.add(
        "胸部",
        160,
        160,
        UI.gaps.padding + (160 + UI.gaps.edge) * 2,
        80 + UI.gaps.padding * 2
    );

    UI.box.add(
        "主手武器",
        500,
        160,
        UI.gaps.padding,
        80 + UI.gaps.padding * 2 + UI.gaps.edge + 160
    );
    UI.box.add(
        "副手武器",
        500,
        160,
        UI.gaps.padding,
        80 + UI.gaps.padding * 2 + (UI.gaps.edge + 160) * 2
    );
    UI.box.add(
        "手枪枪套",
        245,
        160,
        UI.gaps.padding,
        80 + UI.gaps.padding * 2 + (UI.gaps.edge + 160) * 3
    );
    UI.box.add(
        "近战武器",
        245,
        160,
        UI.gaps.padding + 245 + UI.gaps.edge,
        80 + UI.gaps.padding * 2 + (UI.gaps.edge + 160) * 3
    );

    UI.box.add(
        "弹挂",
        160,
        160,
        UI.gaps.padding + 500 + UI.gaps.padding,
        80 + UI.gaps.padding * 2
    );

    UI.game.itemSpace.add(
        1,
        1,
        UI.gaps.padding + 500 + UI.gaps.padding + 160 + UI.gaps.edge,
        80 + UI.gaps.padding * 2 + 160 + UI.gaps.edge
    );
    UI.game.itemSpace.add(
        1,
        2,
        UI.gaps.padding + 500 + UI.gaps.padding + 160 + UI.gaps.edge + 80 + UI.gaps.crack,
        80 + UI.gaps.padding * 2 + 160 + UI.gaps.edge
    );
    UI.game.itemSpace.add(
        1,
        2,
        UI.gaps.padding + 500 + UI.gaps.padding + 160 + UI.gaps.edge + (80 + UI.gaps.crack) * 2,
        80 + UI.gaps.padding * 2 + 160 + UI.gaps.edge
    );
    UI.game.itemSpace.add(
        1,
        1,
        UI.gaps.padding + 500 + UI.gaps.padding + 160 + UI.gaps.edge + (80 + UI.gaps.crack) * 3,
        80 + UI.gaps.padding * 2 + 160 + UI.gaps.edge
    );

    UI.box.add(
        "背包",
        160,
        160,
        UI.gaps.padding + 500 + UI.gaps.padding,
        80 + UI.gaps.padding * 2 + (160 + UI.gaps.edge) * 2
    );

    UI.game.repositoryDraw();

    UI.banner.add(
        canvas.size.width,
        80 + UI.gaps.padding * 2 - 1,
        0,
        0
    );
    UI.banner.add(
        canvas.size.width,
        80 + UI.gaps.padding * 2 - 1,
        0,
        canvas.size.height - (UI.gaps.padding * 2 + 80 - 1)
    );
}

UI.game.itemBind = function () {
    UI.box.add(
        "1",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "2",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "3",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 2,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "4",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 3,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "5",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 4,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "6",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 5,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "7",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 6,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "8",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 7,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "9",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 8,
        canvas.size.height - UI.gaps.padding - 80
    );
    UI.box.add(
        "0",
        80,
        80,
        (canvas.size.width - 80 * 10) / 2 + 80 * 9,
        canvas.size.height - UI.gaps.padding - 80
    );
};

UI.game.repository = function () {
    UI.game.gear();
    UI.game.itemBind();
};

UI.game.repositoryDraw = function () {
    UI.game.itemSpace.add(
        user.progress.repository.size.width,
        user.progress.repository.size.height,
        canvas.size.width - user.progress.repository.size.width * 80 - UI.gaps.padding,
        UI.gaps.padding * 2 + 80,
        true,
        user.progress.repository.size.height * 80 - 80 * 4
    );

    for (let x = 0; x < user.progress.repository.contains.length; x++) {
        for (let y = 0; y < user.progress.repository.contains[x].length; y++) {
            if (user.progress.repository.contains[x][y]) {
                UI.game.item.add(
                    user.progress.repository.contains[x][y],
                    x,
                    y
                );
            }
        }
    }
};