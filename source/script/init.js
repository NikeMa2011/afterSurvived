"use strict";

canvas.size.get();
canvas.size.set();

canvasContext.textBaseline = "hanging";

game.FPS.set();

game.inGame = false;

game.siteChange("start");

game.tick();