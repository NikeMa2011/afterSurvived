objectSet.UI.add = (object) => {
    for (let i = 0; i < objectSet.maximumNumber; i++) {
        if (objectSet.UI == undefined) {
            objectSet.UI = object;

            objectSet.length.UI++;
        }
    }

};

objectSet.game.add = (object) => {
    for (let i = 0; i < objectSet.maximumNumber; i++) {
        if (objectSet.game == undefined) {
            objectSet.game = object;

            objectSet.length.game++;
        }
    }

};

objectSet.clear = () => {
    objectSet.UI = {};
    objectSet.game = {};

    objectSet.length.UI = 0;
    objectSet.length.game = 0;
};