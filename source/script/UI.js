UI.text.add = (string, height, x, y, target, color) => {
    let object = new text();

    object.string = string;
    object.width = string.length * height;
    object.height = height;
    object.x = x;
    object.y = y;
    object.color = color || "#000000";
    object.target = target;

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

UI.font.set = (height) => {
    canvasContext.font = height + "px " + UI.font.famliy;
};

UI.manu.startManu = () => {
    UI.text.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.large,
        "settingManu"
    );

    UI.text.add(
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
};

UI.manu.normalManu = () => {
    UI.text.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.large
    );

        UI.text.add(
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

    UI.box.add(
        300,
        300,
        canvas.size.width / 2 - 150,
        canvas.size.height / 2 - 150,
    );

    UI.text.add(
        "存档一",
        UI.font.size.large,
        canvas.size.width / 2 - 75,
        canvas.size.height / 2 - UI.font.size.large / 2
    );
};