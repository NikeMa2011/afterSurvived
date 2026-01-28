UI.option.add = function (string, height, x, y, onclick) {
    let object = new option();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    onclick ? object.onclick = onclick : null;

    objectSet.UI.add(object);
};

UI.banner.add = function (string, height, x, y) {
    let object = new option();

    object.string = string;
    object.size.width = string.length * height;
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

UI.box.add = function (width, height, x, y) {
    let object = new box();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};

UI.image.add = function (width, height, x, y, onclick) {
    let object = new image();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
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
        "藏身处",
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
        "Alpha 0.3.1",
        UI.font.size.small,
        UI.padding,
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
};

UI.edit.image = function () {
    UI.text.add(
        "图片编辑",
        UI.font.size.large,
        canvas.size.width - UI.padding - UI.font.size.large * 4,
        UI.padding
    );

    UI.image.add(
        1000,
        1000,
        0,
        0,
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
        1000 + UI.padding,
        UI.padding,
        function() {
            objectSet.UI.objects[1].lineSet.pop();
            objectSet.UI.objects[1].lineSet.pop();
        }
    );

    UI.option.add(
        "在控制台打印图片顶点路径",
        UI.font.size.medium,
        UI.padding,
        1000 + UI.padding,
        () => {
            console.log(JSON.stringify(objectSet.UI.objects[1].lineSet));
        }
    );

    UI.text.add(
        "图片顶点路径为两两一组, [x, y], 第一个值是X坐标, 第二个值是Y坐标",
        UI.font.size.medium,
        UI.padding,
        1000 + UI.padding * 2 + UI.font.size.medium
    );
};