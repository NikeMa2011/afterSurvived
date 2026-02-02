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
    inMatch: undefined,
    version: "pre-alpha 1.0.1",
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
            big: 30,
            medium: 20,
            small: 18
        }
    },
    color: {
        white: "#ffffff",
        dark: "#202020",
        darkBackground: "#88888820"
    },
    gaps: {
        gap: 20,
        padding: 50,
        edge: 10,
        crack: 5
    },
    text: {},
    manu: {
        settings: {}
    },
    offset: undefined,
    box: {},
    option: {},
    image: {},
    banner: {},
    edit: {},
    game: {
        itemSpace: {}
    }
};

const input = {
    mouse: {},
    key: {}
};

const user = {
    name: "undefined",
    faction: undefined,
    progress: {
        achievement: {},
        repository: {
            size: {
                height: 64,
                width: 10
            },
            contains: []
        }
    },
    settings: {
        keyBind: {

        },
        vdieo: {

        }
    },
};

let keySet = {};