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
    frame: undefined,
    inGame: undefined
};

const mouse = {
    position: {
        x: undefined,
        y: undefined
    }
};

const objectSet = {
    UI: {},
    game: {},
    maximumNumber : 100,
    length: {
        UI: undefined,
        game: undefined
    }
};

const UI = {
    font: {
        famliy: "sans-serif",
        size: {
            large: 50,
            medium: 20,
            small: 18
        }
    },
    padding : 20,
    text: {},
    manu: {}
};

const event = {
    mouse: {},
    key: {}
};

const settings = {

};