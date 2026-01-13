const canvasDOM = document.getElementById("canvas");
const canvasContext = canvasDOM.getContext("2d");

let rendStatus = {
    inGame: false,
    type: null
};

let mouse = {
    position: {
        x: undefined,
        y: undefined
    }
};

let canvas = {
    size: {
        height: undefined,
        width: undefined
    }
};

let viewPoint = {
    cooridates: {
        x: undefined,
        y: undefined
    },
    rendRatio: 1
};

let player = {
    cooridates: {
        x: undefined,
        y: undefined
    },
    ID: undefined
};

let keySets = {};

const UI = {
    button: {
        size: {
            width: 300,
            height: 80
        },
        color: "#0000000f"
    },
    font: {
        size: {
            text: 20,
            title: 60
        },
        famliy: "sans-serif"
    },
    padding: 20,
    rendRatio: 1,

    rend: {
        manu: {

        }
    }
}