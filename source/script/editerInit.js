"use strict";

titleDOM.innerHTML = "After Survived Editer";

canvas.size.get();
canvas.size.set();

canvasContext.textBaseline = "hanging";

game.FPS.set();

game.inGame = false;
game.status = "edit";

game.siteChange("edit_image");

game.tick();