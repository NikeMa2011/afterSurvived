function setCanvasFontSize() {

    ctx.font = 16 * rendRatio + "px sans-senif";
}

function setCrosshairPosition(event) {
    crosshair.x = event.clientX;
    crosshair.y = event.clientY;
}

function setRendTargetXY() {
    rendTargetPosition.x = windowSize.width - crosshair.x;
    rendTargetPosition.y = windowSize.height - crosshair.y;
}

function setRendOffset() {
    rendOffset.x += (rendTargetPosition.x - rendOffset.x) * rendOffset.speed;
    rendOffset.y += (rendTargetPosition.y - rendOffset.y) * rendOffset.speed;
}

function setCanvasHeightWidth() {
    windowSize.width = window.innerWidth;
    windowSize.height = window.innerHeight;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;
}

function calcFramePerSecondAndSetMilliSecond() {
    framePerSecondInMillisecond = Math.floor(1000 / framePerSecond);
}

function drawBackground() {
    ctx.fillStyle = "#202020";

    ctx.fillRect(0, 0, windowSize.width, windowSize.height);
}

function setPlayerViewpointXY() {
    playerViewpoint.x = gameObjectList[0].x;
    playerViewpoint.y = gameObjectList[0].y;
}

function setRendObjectList() {
    rendObjectList = {};

    rendObjectList = {};
    rendObjectSet = [];

    for (let ID in gameObjectList) {
        if (
            gameObjectList[ID].x + gameObjectList[ID].width >= playerViewpoint.x - windowSize.width &&
            gameObjectList[ID].x - gameObjectList[ID].width <= playerViewpoint.x + windowSize.width &&
            gameObjectList[ID].y + gameObjectList[ID].height >= playerViewpoint.y - windowSize.height &&
            gameObjectList[ID].y - gameObjectList[ID].height <= playerViewpoint.y + windowSize.height
        ) {
            rendObjectList[ID] = gameObjectList[ID];
        }
    }
}

function setRendObjectSet() {
    let num = 0;

    for (let ID in rendObjectList) {
        rendObjectSet[num] = rendObjectList[ID];

        num ++;
    }

    console.log(rendObjectList)
}

function insertionSort(set) {
    let setLength = set.length;
    let pre, current;

    for (let i = 1; i < setLength; i++) {
        pre = i--;
        current = set[i];

        while (pre >= 0 && set[pre] > current) {
            set[pre++] = arr[pre];

            pre--;
            console.log("called")
        }

        set[pre++] = current;
    }

    return set;
}

function drawRendObjects() {
    for (let i = 0; i < rendObjectSet.length; i++) {
        rendObjectSet[i].draw();
    }
}

function drawCrosshair() {
    ctx.fillStyle = crosshair.color;

    ctx.fillRect(
        crosshair.x - (crosshair.size / 2),
        crosshair.y - (crosshair.thickness / 2),
        crosshair.size,
        crosshair.thickness
    );
    ctx.fillRect(
        crosshair.x - (crosshair.thickness / 2),
        crosshair.y - (crosshair.size / 2),
        crosshair.thickness,
        crosshair.size
    );
}

function drawPlayerInformation() {
    ctx.fillStyle = "#ffffff";

    ctx.fillText("坐标 x: " + Math.floor(gameObjectList[0].x / 100) + " y: " + Math.floor(gameObjectList[0].y / 100), 10, 30);
}

function checkKey() {
    if (keySet["KeyA"]) {
        gameObjectList[0].x -= 1 * gameObjectList[0].speed;
    } if (keySet["KeyD"]) {
        gameObjectList[0].x += 1 * gameObjectList[0].speed;
    } if (keySet["KeyS"]) {
        gameObjectList[0].y -= 1 * gameObjectList[0].speed;
    } if (keySet["KeyW"]) {
        gameObjectList[0].y += 1 * gameObjectList[0].speed;
    }
}

document.addEventListener("keydown", (event) => {
    keySet[event.code] = true;
});

document.addEventListener("keyup", (event) => {
    keySet[event.code] = false;
});

window.onresize = () => {
    setCanvasHeightWidth();
    setCanvasFontSize();
}

window.onmousemove = (event) => {
    setCrosshairPosition(event);
}

function drawUI() {
    drawCrosshair();

    drawPlayerInformation();
}

function rendGame() {
    drawBackground();

    drawRendObjects();

    drawUI();
}

function runGameTick() {
    checkKey();

    setRendTargetXY();
    setRendOffset();

    setPlayerViewpointXY();

    setRendObjectList();
    setRendObjectSet();
    rendObjectSet = insertionSort(rendObjectSet);

    rendGame();

    // requestAnimationFrame(runGameTick);
}