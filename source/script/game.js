game.page.set = function () {
    pageTitleDOM.innerHTML = game.content.page.title;
    pageIconDOM.href = game.content.page.icon;
};

game.graphic.FPS.milisecondDelaySet = function () {
    game.graphic.FPS.milisecondDelay = Math.round(1000 / game.graphic.FPS.value);
};

game.opration.TPS.milisecondDelaySet = function () {
    game.opration.TPS.milisecondDelay = Math.round(1000 / game.opration.TPS.value);
};

game.UI.site.change = function (siteName) {
    if (game.UI.site[siteName]) {
        objectSet.UI.object = {};
        game.UI.site[siteName]();
    } else {
        console.error("cannot find site: " + siteName);
    }
};

objectSet.UI.objectPositionSet = function () {
    for (let ID in objectSet.UI.object) {
        objectSet.UI.object[ID].positionSet();
    }
};

// TODO: 第一次打开网页说明浏览器同源政策报错刷新