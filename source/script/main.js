const pageTitle = document.getElementById("pageTitle");
const pageIcon = document.getElementById("pageIcon");

const canvasElement = document.getElementById("canvasElement");
const canvasContext = canvasElement.getContext("2d");

const canvas = {
    size: {
        width: undefined,
        height: undefined
    },
    DOM: {
        size: {

        }
    }
};

const viewpoint = {
    size: {
        width: undefined,
        height: undefined
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
    }
};

const game = {
    page: {

    },
    UI: {
        gap: {
            large: 50,
            medium: 25,
            small: 10
        },
        font: {
            ASCII: {
                charactorLength: 0.55,
                charactorSet: [
                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
                    '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '\"', ',', '<', '.', '>', '/', '?',
                ],
            },
            size: {
                small: 18,
                medium: 24,
                large: 30,
                massive: 50
            }
        },
        color: {
            dark: "#2d2d2d",
            gray: "#888888",
            light: "#d4d4d4",

            // grassGreen: 
            // plasticGreen:
            // desertYellow:

            pureWhite: "#ffffff",
            pureBlack: "#000000",
            purePurple: "#ff00ff"
        }
    },
    rend: {
        font: {

        }
    },
    tick: {

    },
    interval: {
        tick: {
            TPS: 20,
            delay: undefined
        },
        rend: {
            FPS: 60,
            delay: undefined
        }
    },
    setting: {
        graphic: {
            font: {
                style: "sans-serif"
            }
        },
        content: {

        }
    },
    content: {

    }
};

const objectSet = {
    UI: {
        object: {

        }
    },
    GO: {
        object: {

        }
    }
};

let keySet = {};