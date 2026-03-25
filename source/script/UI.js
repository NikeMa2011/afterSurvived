objectSet.UI.add = function (object) {
    object.autoSet();

    if (objectSet.UI.object[object.ID] == undefined) {
        objectSet.UI.object[object.ID] = object;
    } else {
        throw new Error("Fault while add an object to objectSet.UI.object: object.ID \"" + object.ID + "\" is exist");
    }
};

game.UI.manu.startManu = function () {
    game.content.site = "startManu";

    let repositoryButton = new string();
    repositoryButton.ID = "repositoryButton";
    repositoryButton.string = "仓库";
    repositoryButton.position.x = game.UI.gap.large;
    repositoryButton.position.y = canvas.size.y - game.UI.gap.large - game.UI.font.size.huge - (game.UI.gap.medium + game.UI.font.size.huge) * 2;
    repositoryButton.color = "#ffffff";
    repositoryButton.fontSize = game.UI.font.size.huge;
    repositoryButton.onclick = () => game.UI.manu.change("mapSelect");
    objectSet.UI.add(repositoryButton);

    // let repositoryButton = new string();
    // repositoryButton.ID = "repositoryButton";
    // objectSet.UI.add(repositoryButton);

    let getInBattleButton = new string();
    getInBattleButton.ID = "getInBattleButton";
    getInBattleButton.string = "加入战局";
    getInBattleButton.position.x = game.UI.gap.large;
    getInBattleButton.position.y = canvas.size.y - game.UI.gap.large - game.UI.font.size.huge - game.UI.gap.medium - game.UI.font.size.huge;
    getInBattleButton.color = "#ffffff";
    getInBattleButton.fontSize = game.UI.font.size.huge;
    objectSet.UI.add(getInBattleButton);

    let tradersButton = new string();
    tradersButton.ID = "tradersButton";
    tradersButton.string = "商人";
    tradersButton.position.x = game.UI.gap.large;
    tradersButton.position.y = canvas.size.y - game.UI.gap.large - game.UI.font.size.huge;
    tradersButton.color = "#ffffff";
    tradersButton.fontSize = game.UI.font.size.huge;
    objectSet.UI.add(tradersButton);
};

game.UI.manu.mapSelect = function () {
    let title = new string();
    title.ID = "title";
    title.string = "选择地图";
    title.position.x = (canvas.size.x - game.UI.font.size.huge * 4) / 2;
    title.position.y = game.UI.gap.large;
    tradersButton.color = "#ffffff";
    title.fontSize = game.UI.font.size.huge;
    objectSet.UI.add(title);

    let mapOption = new string();
    mapOption.ID = "mapOption";
    mapOption.string = "测试地图";
    mapOption.position.x = (canvas.size.x - game.UI.font.size.huge * 4) / 2;
    mapOption.position.y = (canvas.size.x - game.UI.font.size.huge) / 2;
    tradersButton.color = "#ffffff";
    mapOption.fontSize = game.UI.font.size.medium;
    objectSet.UI.add(mapOption);
};