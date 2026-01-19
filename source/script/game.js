game.tick = () => {
    objectSet.clear();

    game.frame;

    game.rend();

    setTimeout(() => {
        game.tick();
    },50);
};