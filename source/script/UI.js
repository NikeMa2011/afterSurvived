game.UI.addObject = function (ID, object) {
    if (objectSet.UI.object[ID]) {
        console.error("ID already exists: " + ID);
    } else {
        object.ID = ID;
        objectSet.UI.object[ID] = object;
    }
};

game.UI.site.start = function () {
    game.UI.addObject("weaponName", new string());
    objectSet.UI.object["weaponName"].string = "N/A";
    objectSet.UI.object["weaponName"].fontSize = game.UI.font.size.huge;
    objectSet.UI.object["weaponName"].sizeSet();
    objectSet.UI.object["weaponName"].position.expression = {
        x: () => (canvas.size.width - objectSet.UI.object["weaponName"].size.x) / 2,
        y: () => game.UI.gap.large
    };
    objectSet.UI.object["weaponName"].fontColor = game.UI.color.pureWhite;
    objectSet.UI.object["weaponName"].positionSet();
};