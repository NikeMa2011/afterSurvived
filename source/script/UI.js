UI.text.add = (string, height, x, y, target, color) => {
    let object = new text();

    object.string = string;
    object.width = string.length * height;
    object.height = height;
    object.x = x;
    object.y = y;
    object.color = "#000000" || color;
    object.target = target || undefined;

    objectSet.UI.add(object);
};

UI.font.set = (height) => {
    canvasContext.font = height + "px " + UI.font.famliy;
};

UI.manu.startManu = () => {
    // UI.text.add(
    //     "After Survived",
    //     UI.font.size.extremeBig,
    //     canvas.size.width / 2 - UI.font.size.extremeBig / 2,
    //     UI.padding
    // );

    UI.text.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding - UI.font.size.large
    );

    UI.text.add(
        "开始游戏",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) - UI.padding - UI.font.size.large
    );

    UI.text.add(
        "beta 0.3.0",
        UI.font.size.small,
        UI.padding,
        UI.padding
    );
};

UI.manu.normalManu = () => {

};

UI.manu.settingManu = () => {

};

UI.manu.gameManu = () => {
    UI.text.add(
        "选择存档",
        UI.font.size.large,
        canvas.size.width / 2 - UI.font.size.large / 2,
        UI.padding
    );
};