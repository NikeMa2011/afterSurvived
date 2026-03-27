pageTitleDOM.innerHTML = game.content.title;

game.interval.FPS.set();
game.interval.tick.set();

canvas.size.set();
canvas.DOM.size.set();
game.UI.font.style.set();

game.tickLoop();
game.rendLoop();

game.UI.site.change("startManu");