objectSet.UI.add = (object) => {
    objectSet.UI.objects[objectSet.UI.length] = object;

    objectSet.UI.length++;
};

objectSet.game.add = (object) => {
    objectSet.game.objects[objectSet.game.length] = object;

    objectSet.game.length++;
};

objectSet.clear = () => {
    objectSet.UI.objects = {};
    objectSet.game.objects = {};

    objectSet.UI.length = 0;
    objectSet.game.length = 0;
};