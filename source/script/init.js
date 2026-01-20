"use strict";

canvas.size.get();
canvas.size.set();

canvasContext.textBaseline = "hanging";

game.inGame = false;

game.changeSite("startManu");

game.tick();