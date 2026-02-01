const map = {
    test: {},
    tourial: {},
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

map.test.load = function() {
    objectSet.clear();

    game.inGame = true;
    game.status = "hidePlace";

    let player = gameObject.entity.player.create();

    player.position.x = player.position.y = player.position.x = 0;

    objectSet.game.add(player);
};