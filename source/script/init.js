pageTitleDOM.innerHTML = game.content.title;

game.interval.FPS.set();
game.interval.tick.set();

game.tickLoop();
game.rendLoop();