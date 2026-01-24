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
    siteName: undefined,
    inGame: undefined,
    version: undefined,
    FPS: {
        value: 40,
        milisecond: undefined
    },
    function: {}
};

const viewpoint = {
    position: {
        x: undefined,
        y: undefined
    }
};

const mouse = {
    position: {
        x: undefined,
        y: undefined
    },
    target: {
        current: undefined
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
    maximumNumber: 100
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
    padding: 20,
    text: {},
    manu: {
        settings: {}
    },
    offset: undefined,
    box: {},
    option: {},
    image: {},
    banner: {}
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

let keySet = {};