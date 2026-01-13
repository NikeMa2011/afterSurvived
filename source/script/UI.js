function drawBackground() {
    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(0, 0, canvas.size.height, canvas.size.width);
}

UI.font.set = (type) => {
    canvasContext.fillStyle = "#000000";

    if (type == "title") {
        canvasContext.font = UI.font.size.title + "px " + UI.font.famliy;
    } else if (type == "text") {
        canvasContext.font = UI.font.size.text + "px " + UI.font.famliy;
    }
}

UI.rend.manu.startManu = () => {
    canvasContext.fillStyle = UI.button.color;

    canvasContext.fillRect(
        UI.padding,
        canvas.size.height - (UI.padding + UI.button.size.height),
        UI.button.size.width,
        UI.button.size.height
    );
    canvasContext.fillRect(
        UI.padding,
        canvas.size.height - (UI.padding + UI.button.size.height) * 2,
        UI.button.size.width,
        UI.button.size.height
    );

    UI.font.set("title");

    canvasContext.fillText(
        "开始游戏",
        UI.padding + ((UI.button.size.height - UI.font.size.title) / 2),
        canvas.size.height - UI.padding
    );
    canvasContext.fillText(
        "设置",
        UI.padding + ((UI.button.size.height - UI.font.size.title) / 2),
        canvas.size.height - (UI.padding + (UI.button.size.height / 2)) * 2 - UI.font.size.title / 2
    );

    canvasContext.fillRect(UI.padding, canvas.size.height - UI.padding + ((UI.button.size.height - UI.font.size.title) / 2), 1, 1)
}