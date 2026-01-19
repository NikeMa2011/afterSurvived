game.tick = () => {
    objectSet.clear();
    
    UI.manu.startManu();

    game.rend();

    // setTimeout(() => {
    //     game.tick();
    // }, 50);
};