const canvasDOM = document.getElementById("camvas");
const canvasContext = canvasDOM.getContext("2d");

let canvas = {
    size : {
        height : undefined,
        width : undefined
    },
    rendRatio : 1
}

let viewPoint = {
    cooridates : {
        x : undefined,
        y : undefined
    },
    rendRatio : 1
}

let player = {
    cooridates : {
        x : undefined,
        y : undefined
    }
}

