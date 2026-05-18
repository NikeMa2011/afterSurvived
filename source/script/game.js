game.tick.function = function () {
    setTimeout(() => {
        game.tick.function();
    }, game.interval.tick.delay);
};

game.interval.setDelay = function () {
    game.interval.rend.delay = Math.round(1000 / game.interval.rend.FPS);
    game.interval.tick.delay = Math.round(1000 / game.interval.tick.FPS);
};