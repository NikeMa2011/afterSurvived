const map = {
    test: {},
    tourial: {},
    hidePlace: {},
    play: {
        outerSuburb: {},
        innerSuburb: {},
        cityCenter: {},
        forest: {},
        coastLine: {},
        port: {},
        airport: {},
        checkPoint: {}
    }
};

map.hidePlace.load = () => {
    objectSet.clear();

    game.inGame = true;

    let player = gameObject.entity.player.create();

    player.position.x = player.position.y = player.position.x = 0;

    objectSet.game.add(player);
};