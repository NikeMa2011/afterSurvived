UI.text.add = (string, size, x, y, color) => {
    let object = new text();

    object.string = string;
    object.size = size;
    object.x = x;
    object.y = y;
    object.color = "#000000" || color;
    object.width = 

    objectSet.UI.add(object);
};

UI.font.set = (size) => {
    canvasContext.font = size + "px " + UI.font.famliy;
}

UI.manu.startManu = () => {
    UI.text.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding
    );

    UI.text.add(
        "开始游戏",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - (UI.padding + UI.font.size.large) - UI.padding
    );
};