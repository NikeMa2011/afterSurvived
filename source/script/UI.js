function drawBackground() {
    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(0, 0, canvas.size.height, canvas.size.width);
}

UI.text.set = (type) => {
    canvasContext.fillStyle = "#000000";

    if (type == "big") {
        canvasContext.font = UI.text.size.big + "px " + UI.text.famliy;
    } else if (type == "medium") {
        canvasContext.font = UI.text.size.medium + "px " + UI.text.famliy;
    } else if (type == "small") {
        canvasContext.font = UI.text.size.small + "px " + UI.text.famliy;
    } else {
        throw Error;
    }
};

UI.button.textGap.set = () => {
    UI.button.textGap.offset = (UI.button.size.height - UI.text.size.big) / 2;
};

UI.button.buttonPart.set = () => {
    UI.button.buttonPart.size = UI.padding + UI.button.size.height;
};

UI.rend.manu.startManu = () => {
    canvasContext.fillStyle = UI.button.color;

    canvasContext.fillRect(
        UI.padding,
        canvas.size.height - UI.button.buttonPart.size,
        UI.button.size.width,
        UI.button.size.height
    );
    canvasContext.fillRect(
        UI.padding,
        canvas.size.height - UI.button.buttonPart.size * 2,
        UI.button.size.width,
        UI.button.size.height
    );

    UI.text.set("big");

    canvasContext.fillText(
        "开始游戏",
        UI.padding + ((UI.button.textGap.offset) / 2),
        canvas.size.height - UI.padding - (UI.button.textGap.offset / 2)
    );
    canvasContext.fillText(
        "设置",
        UI.padding + ((UI.button.textGap.offset) / 2),
        canvas.size.height - UI.button.buttonPart.size - UI.padding - (UI.button.textGap.offset / 2)
    );

    UI.text.set("small");

    canvasContext.fillText(
        "Beta Version",
        canvas.size.width - UI.padding - 100,
        canvas.size.height - UI.padding
    );
};