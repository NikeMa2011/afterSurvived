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

let cursor = {}

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

let objects = {
    game: {},
    UI: {},

    length: {
        game: undefined,
        UI: undefined,

        maximum: 500
    }
}

let player = {
    cooridates: {
        x: undefined,
        y: undefined
    },
    ID: undefined
};

let keySets = {};

let UI = {
    button: {
        size: {
            width: 300,
            height: 80
        },
        color: "#0000000f",
        textGap: {
            offset: undefined
        },
        buttonPart: {
            size: undefined
        }
    },
    text: {
        size: {
            small: 16,
            medium: 20,
            big: 60
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

const events = {
    oprate: {
        mouse: {}
    }
}