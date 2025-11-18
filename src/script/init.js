"use strict";

title.innerHTML = "After Servived - Github version" + gameVersion;

setCanvasHeightWidth();
calcFramePerSecondAndSetMilliSecond();

let crosshair = new setCrosshair();

setCanvasFontSize();

loadObjects();

level.load("test");

runGameTick();