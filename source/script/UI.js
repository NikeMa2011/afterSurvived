UI.text.add = (string, height, x, y, color) => {
    let object = new text();

    object.string = string;
    object.height = height;
    object.x = x;
    object.y = y;
    object.color = "#000000" || color;
    object.width = string.length * height;

    objectSet.UI.add(object);
};

UI.font.set = (height) => {
    canvasContext.font = height + "px " + UI.font.famliy;
}

UI.manu.startManu = () => {
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
};