game.tick = () => {
    game.status;

    game.rend();

    setTimeout(() => {
        game.tick();
    },50);
};