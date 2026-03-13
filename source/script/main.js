const canvasDOM = document.getElementById("canvas");
const pageTitleDOM = document.getElementById("pageTitle");

const canvasContext = canvasDOM.getContext("2d");

const game = {
    interval: {
        tick: {
            value: 20,
            millisecond: undefined
        },
        FPS: {
            value: 50,
            millisecond: undefined
        }
    },
    content: undefined,
    inBattle: false
};

const viewpoint = {
    size: {
        x: undefined,
        y: undefined
    },
    position: {
        x: undefined,
        y: undefined
    },
    offset: {
        x: undefined,
        y: undefined
    }
};

const mouse = {
    position: {
        x: undefined,
        y: undefined
    },
    target: undefined
};

const canvas = {
    size: {
        x: undefined,
        y: undefined
    }
};

const keySet = {};

const objectSet = {
    UI: {},
    object: {}
};