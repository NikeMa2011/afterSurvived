game.tick.function = function () {
    setTimeout(() => {
        game.tick.function();
    }, game.interval.tick.delay);
};

game.interval.setDelay = function () {
    game.interval.rend.delay = Math.round(1000 / game.interval.rend.FPS);
    game.interval.tick.delay = Math.round(1000 / game.interval.tick.FPS);
};

game.page.set = function () {
    pageTitle.innerHTML = game.content.page.title;
    pageIcon.setAttribute("href", game.content.page.iconLink);
};

objectSet.GO.add = function (ID, object) {
    if (objectSet.GO.object[ID]) {
        throw new Error("ID \"" + ID + "\" is already exist in objectSet.GO.object");
    } else {
        object.ID = ID;
        objectSet.GO.object[ID] = object;
    }
};