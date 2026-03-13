game.tick = function () {

};

game.rendLoop = function () {
    game.rend();

    setTimeout(() => {
        game.rendLoop();
    }, game.interval.FPS.millisecond);
};

game.tickLoop = function () {
    game.tick();

    setTimeout(() => {

    }, game.interval.tick.millisecond);
};

game.interval.FPS.set = function () {
    game.interval.FPS.millisecond = Math.floor(1000 / game.interval.FPS.millisecond);
};

game.interval.tick.set = function () {
    game.interval.tick.millisecond = Math.floor(1000 / game.interval.tick.millisecond);
};