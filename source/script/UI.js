UI.text.add = (string, size, x, y) => {
    let object = new text();

    object.string = string;
    object.size = size;
    object.x = x;
    object.y = y;

    objectSet.UI.add(object);
};

UI.manu.startManu = () => {
    UI.text.add(
        "设置",
        UI.font.size.large,
        UI.padding,
        canvas.size.height - padding
    );
};