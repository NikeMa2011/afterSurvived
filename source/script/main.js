const canvasDOM = document.getElementById("canvas");
const canvasContext = canvasDOM.getContext("2d");

const titleDOM = document.getElementById("title");

const canvas = {
    size: {
        height: undefined,
        width: undefined
    },
    cursor: {

    },
    color: {}
};

const game = {
    status: undefined,
    site: undefined,
    siteName : undefined,
    inGame: undefined,
    version: undefined
};

const mouse = {
    position: {
        x: undefined,
        y: undefined
    }
};

const objectSet = {
    UI: {
        objects: {},
        length: undefined
    },
    game: {
        objects: {},
        length: {}
    },
    maximumNumber : 100
};

const UI = {
    font: {
        famliy: "sans-serif",
        size: {
            extremeBig: 100,
            large: 50,
            medium: 20,
            small: 18
        }
    },
    padding : 20,
    text: {},
    manu: {}
};

const input = {
    mouse: {},
    key: {}
};

const user = {
    name: undefined,
    progress: {
        achievement: {},
    },
    settings: {
        keyBind: {

        },
        vdieo: {

        }
    },
};