objectSet.UI.add = (object) => {
    for (let i = 0; i < objectSet.maximumNumber; i++) {
        if (objectSet.UI == undefined) {
            objectSet.UI = object;
        }
    }

};

objectSet.game.add = (object) => {
    for (let i = 0; i < objectSet.maximumNumber; i++) {
        if (objectSet.game == undefined) {
            objectSet.game = object;
        }
    }

};

objectSet.set = () => {
    for (let i = 0; i < objectSet.maximumNumber; i++) {
        objectSet.UI[i] = undefined;
        objectSet.game[i] = undefined;
    }
};