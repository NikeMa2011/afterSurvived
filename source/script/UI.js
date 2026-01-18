UI.text.add = (string, color, size, x, y) => {
    let object = new text();

    object.string = string;
    object.size = size;
    object.x = x;
    object.y = y;
    object.color = "#000000" || color;

    objectSet.UI.add(object);
};

UI.font.set = (size) => {
    canvasContext.fon = size + "px " + UI.font.famliy;
}

UI.manu.startManu = () => {
    UI.text.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - UI.padding
    );
};