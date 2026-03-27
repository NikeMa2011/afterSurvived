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
            value: 40,
            millisecond: undefined
        }
    },
    content: undefined,
    inBattle: false,
    UI: {
        site: {},
        font: {
            size: {
                small: 20,
                medium: 24,
                large: 36,
                huge: 50,
            },
            style: {},
            ASCII: {
                characterSet: [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    '-', '=', '_', '+', '[', ']', '{', '}', '\\', "|", ';', ':', '"', '\'', ',', '<', '.', '>', '/', '?',
                    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
                ],
                width: 0.5
            }
        },
        background: {
            color: "#2d2d2d"
        },
        gap: {
            large: 30,
            medium: 20,
            small: 10
        },
        mouse: {},
        function: {}
    },
    input: {}
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
    },
    DOM: {
        size: {}
    }
};

const keySet = {};

const objectSet = {
    UI: {
        object: {}
    },
    game: {
        object: {}
    }
};