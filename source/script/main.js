const canvasDOM = document.getElementById("canvas");
const canvasContext = canvasDOM.getContext("2d");

const pageTitleDOM = document.getElementById("pageTitle");
const pageIconDOM = document.getElementById("pageIcon");


const canvas = {
    size: {
        width: undefined,
        height: undefined
    },
    DOM: {
        size: {}
    }
};

const game = {
    UI: {
        font: {
            size: {
                huge: 50,
                large: 32,
                medium: 24,
                small: 16
            },
            ASCII: {
                charactorSet: [],
                charactorWidth: 0.55
            }
        },
        gap: {
            large: 50,
            medium: 20,
            small: 5
        },
        color: {
            backgroundDark: "#2d2d2d",
            purePurple: "#d000ff",
            pureWhite: "#ffffff",
            pureBlack: "#000000"
        },
        site: {

        }
    },
    page: {

    },
    rend: {},
    graphic: {
        FPS: {
            value: 60,
            milisecondDelay: undefined
        }
        // TODO: 是否同步屏幕刷新
    },
    opration: {
        TPS: {
            value: 20,
            milisecondDelay: undefined
        }
    }
};

const objectSet = {
    UI: {
        object: {}
    },
    game: {
        object: {}
    }
};

let keySet = {};

const mouse = {
    position: {
        x: undefined,
        y: undefined
    }
};