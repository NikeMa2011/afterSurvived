"use strict";

titleDOM.innerHTML = "After Survived " + game.version;

canvas.size.get();
canvas.size.set();

canvasContext.textBaseline = "top";

game.FPS.set();

game.inGame = false;
game.status = "manu";

user.progress.repository.spaceSet();

game.siteChange("accountSet_name");

game.tick();