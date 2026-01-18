function rend() {
    if (game.inGame) {
        for (let i = 0; i < objectSet.game.length; i++) {
            objectSet.game[i].draw;
        }
    }

    for (let i = 0; i < objectSet.UI.length; i++) {
        objectSet.UI[i].draw;
    }
}