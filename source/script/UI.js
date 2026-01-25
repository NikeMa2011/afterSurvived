UI.option.add = (string, height, x, y, onclick, color) => {
    let object = new option();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;
    onclick ? object.onclick = onclick : null;

    objectSet.UI.add(object);
};

UI.banner.add = (string, height, x, y) => {
    let object = new option();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};

UI.text.add = (string, height, x, y) => {
    let object = new text();

    object.string = string;
    object.size.width = string.length * height;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};

UI.box.add = (width, height, x, y) => {
    let object = new box();

    object.size.width = width;
    object.size.height = height;
    object.position.x = x;
    object.position.y = y;

    objectSet.UI.add(object);
};

UI.font.set = (height) => {
    canvasContext.font = height + "px " + UI.font.famliy;
};

UI.manu.start = () => {
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
        "alpha 0.3.1",
        UI.font.size.small,
        UI.padding,
        UI.padding
    );
};

UI.manu.normal = () => {
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

UI.manu.settings.graphic = () => {
    UI.banner.add(
        "设置-图形",
        UI.font.size.large,
        canvas.size.width / 2 - 100,
        UI.padding
    );

    UI.text.add(
        "设置-图形",
        UI.font.size.large,
        canvas.size.width / 2 - 100,
        UI.padding
    );
};

UI.manu.map = () => {
    UI.text.add(
        "选择地图",
        UI.font.size.large,
        canvas.size.width / 2 - 100,
        UI.padding
    );

    UI.option.add(
        "测试地图",
        UI.font.size.large,
        canvas.size.width / 2 - 100,
        canvas.size.height / 2 - UI.font.size.large / 2
    );
};