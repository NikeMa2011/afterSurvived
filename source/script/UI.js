UI.option.add = (string, height, x, y, target, color) => {
    let object = new option();

    object.string = string;
    object.width = string.length * height;
    object.height = height;
    object.x = x;
    object.y = y;
    object.color = color || "#000000";
    object.target = target;

    objectSet.UI.add(object);
};

UI.text.add = (string, height, x, y, color) => {
    let object = new text();

    object.string = string;
    object.width = string.length * height;
    object.height = height;
    object.x = x;
    object.y = y;
    object.color = color || "#000000";

    objectSet.UI.add(object);
};

UI.box.add = (width, height, x, y, target, color) => {
    let object = new box();

    object.width = width;
    object.height = height;
    object.x = x;
    object.y = y;
    object.color = color || "#000000";
    object.target = target

    objectSet.UI.add(object);
};

UI.image.add = (link, width, height, x, y) => {
    if (!link) return;

    let object = new image();

    object.link = link;
    object.width = width;
    object.height = height;
    object.x = x;
    object.y = y;

    objectSet.UI.add(object);
};

UI.font.set = (height) => {
    canvasContext.font = height + "px " + UI.font.famliy;
};

UI.manu.startManu = () => {
    UI.option.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.large,
        "settingManu"
    );

    UI.option.add(
        "开始游戏",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) - UI.padding - UI.font.size.large,
        "gameManu"
    );

    UI.text.add(
        "beta 0.3.0",
        UI.font.size.small,
        UI.padding,
        UI.padding
    );

    UI.image.add(
        "assets/icons/icon.png",
        400,
        400,
        canvas.size.width - UI.padding - 400,
        UI.padding
    );
};

UI.manu.normalManu = () => {
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

UI.manu.settingManu = () => {
    UI.text.add(
        "暂无",
        UI.font.size.medium,
        canvas.size.width / 2 - UI.font.size.medium / 2,
        canvas.size.height / 2 - UI.font.size.medium / 2
    );
};

UI.manu.gameManu = () => {
    UI.text.add(
        "选择存档",
        UI.font.size.large,
        UI.padding,
        UI.padding
    );

    UI.option.add(
        "测试地图",
        UI.font.size.large,
        canvas.size.width / 2 - 100,
        canvas.size.height / 2 - UI.font.size.large / 2
    );
};