UI.option.add = function (string, height, x, y, onClickFunction, onMouseFunction) {
    let object = new option();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    onClickFunction ? object.onClickFunction = onClickFunction : null;
    onMouseFunction ? object.onMouseFunction = onMouseFunction : null;

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

UI.square.add = function (width, height, x, y) {
    let object = new square();

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

UI.box.add = function (string, width, height, x, y) {
    let object = new box();

    object.string = string;
    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};

UI.image.add = function (width, height, x, y, path, onclick) {
    let object = new image();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    path ? object.lineSet = path : null;
    onclick ? object.onclick = onclick : null;

    objectSet.UI.add(object);
};

UI.font.set = function (height) {
    canvasContext.font = height + "px " + UI.font.famliy;
};

UI.manu.start = function () {
    UI.option.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.large,
        () => game.siteChange("settings_graphic")
    );

    UI.option.add(
        "商人",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) - UI.padding - UI.font.size.large
    );

    UI.option.add(
        "仓库",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) * 2 - UI.padding - UI.font.size.large,
        () => map.hidePlace.load()
    );

    UI.option.add(
        "逃离",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) * 3 - UI.padding - UI.font.size.large,
        () => game.siteChange("map_choose")
    );

    UI.text.add(
        game.version,
        UI.font.size.small,
        UI.padding,
        UI.padding
    );

    UI.text.add(
        "为了游戏的稳定 请尽量不要打开开发者工具",
        UI.font.size.small,
        canvas.size.width - UI.padding - UI.font.size.small * 19,
        UI.padding
    );
};

UI.manu.normal = function () {
    UI.option.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.large
    );

    UI.option.add(
        "继续",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) - UI.padding - UI.font.size.large,
    );
};

UI.manu.settings.graphic = function () {
    UI.banner.add(
        canvas.size.width,
        UI.font.size.large + UI.padding * 2,
        0,
        0
    );

    UI.text.add(
        "设置-图形",
        UI.font.size.large,
        canvas.size.width / 2 - (UI.font.size.large * 5) / 2,
        UI.padding
    );
};

UI.manu.map = function () {
    UI.text.add(
        "选择地图",
        UI.font.size.large,
        canvas.size.width / 2 - (UI.font.size.large * 4) / 2,
        UI.padding
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
        canvas.size.width - UI.padding - UI.font.size.large * 4,
        UI.padding
    );

    UI.box.add(
        "画布",
        1000,
        1000,
        0,
        0
    ); 

    UI.image.add(
        1000,
        1000,
        0,
        0,
        [],
        function () {
            if (
                mouse.position.x == this.lastMousePosition.x &&
                mouse.position.y == this.lastMousePosition.y
            ) {
                return;
            }

            this.lineSet.push(mouse.position.x);
            this.lineSet.push(mouse.position.y);

            this.lastMousePosition.x = mouse.position.x;
            this.lastMousePosition.y = mouse.position.y;
        }
    );

    UI.option.add(
        "删除一组顶点",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.padding,
        UI.padding,
        function () {
            objectSet.UI.objects[1].lineSet.pop();
            objectSet.UI.objects[1].lineSet.pop();
        }
    );

    UI.option.add(
        "图片位置校正",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.padding,
        UI.padding * 2 + UI.font.size.medium,
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
        "获取图片大小",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.padding,
        UI.padding * 3 + UI.font.size.medium * 2,
        function () {
            let minimumSize = {
                x: 0,
                y: 0
            };

            for (let i = 0; i < objectSet.UI.objects[1].lineSet.length; i += 2) {
                if (objectSet.UI.objects[1].lineSet[i] > minimumSize.x) {
                    minimumSize.x = objectSet.UI.objects[1].lineSet[i];
                }

                if (objectSet.UI.objects[1].lineSet[i + 1] > minimumSize.y) {
                    minimumSize.y = objectSet.UI.objects[1].lineSet[i + 1];
                }
            }

            objectSet.UI.objects[1].size.width = minimumSize.x;
            objectSet.UI.objects[1].size.height = minimumSize.y;

            alert("图片大小: X = " + minimumSize.x + "px; Y = " + minimumSize.y + ';');
        }
    );

    UI.option.add(
        "设置图片大小",
        UI.font.size.medium,
        objectSet.UI.objects[2].size.width + UI.padding,
        UI.padding * 4 + UI.font.size.medium * 3,
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
        "在控制台打印图片顶点路径",
        UI.font.size.medium,
        UI.padding,
        objectSet.UI.objects[2].size.width + UI.padding,
        () => {
            console.log(JSON.stringify(objectSet.UI.objects[1].lineSet));
        }
    );

    UI.text.add(
        "图片顶点路径为两两一组, [x, y], 第一个值是X坐标, 第二个值是Y坐标",
        UI.font.size.medium,
        UI.padding,
        objectSet.UI.objects[2].size.width + UI.padding * 2 + UI.font.size.medium
    );

    UI.text.add(
        "例: [20,20,40,40], 从X:20,Y:20到X:40,y:40",
        UI.font.size.medium,
        UI.padding,
        objectSet.UI.objects[2].size.width + UI.padding * 3 + UI.font.size.medium * 2
    );
};

UI.game.accountSetName = function () {
    UI.text.add(
        "账号创建",
        UI.font.size.large,
        (canvas.size.width - UI.font.size.large * 4) / 2,
        UI.padding
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
        UI.padding,
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
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.medium * 2,
    );

    UI.text.add(
        "",
        UI.font.size.medium,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.medium,
    );
}

UI.game.gear = function () {
    UI.box.add(
        "头盔",
        200,
        200,
        ((canvas.size.width - UI.padding * 2) / 3) / 2 - 100,
        100 + UI.padding
    );

    UI.box.add(
        "耳机",
        200,
        200,
        (canvas.size.width - UI.padding * 2) / 3 - ((canvas.size.width - UI.padding * 2) / 3) / 4 - 100,
        100 + UI.padding
    );

    UI.
}

UI.game.repository = function () {

}