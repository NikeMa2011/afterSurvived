"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rayTickDistence = 0.4;

let windowSize = {
    height: 1,
    width: 1
}

let scene = {
    corrdiates: [
        { x: -1, y: 0, z: 1 },
        { x: -2, y: 0, z: 1 },
        { x: -1, y: 0, z: 2 },
        { x: -2, y: 0, z: 2 },
        { x: -1, y: 1, z: 1 },
        { x: -2, y: 1, z: 1 },
        { x: -1, y: 1, z: 2 },
        { x: -2, y: 1, z: 2 },
    ],
};

let camra = {
    FOV: 90,
    corrdiates: {
        x: 0.5,
        y: 2,
        z: 0
    },
    direction: {
        x: 0,
        y: -45
    },
    faced: {
        parallel: null,
        horizontal: null
    }
}

let ray = {
    corrdiates: {
        x: null,
        y: null,
        z: null
    },
    direction: {
        x: null,
        y: null
    }
}

let hexadecimalToDecimal = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
}

let frame = ctx.createImageData(windowSize.width, windowSize.height);

let keySet = {};

let sensitivity = 5;

canvas.width = windowSize.width;
canvas.height = windowSize.height;

function setCamraFaced() {
    if (315 <= camra.direction.x && camra.direction.x > 45) {
        camra.faced.parallel = "north";
    } else if (45 <= camra.direction.x && camra.direction.x > 135) {
        camra.faced.parallel = "east";
    } else if (135 <= camra.direction.x && camra.direction.x > 225) {
        camra.faced.parallel = "south";
    } else if (225 <= camra.direction.x && camra.direction.x > 315) {
        camra.faced.parallel = "west";
    }

    if (camra.direction.y <= 0 && camra.direction.y >= 90) {
        camra.faced.horizontal = "up";
    } else if (camra.direction.y < 0 && camra.direction.y >= -90) {
        camra.faced.horizontal = "down";
    }
}

function consoleCamraInfo() {
    console.log("Camra corrdiates: " + JSON.stringify(camra.corrdiates));

    console.log("Camra faced parallel: " + camra.faced.parallel + ' ' + camra.direction.x);
    console.log("Camra faced horizontal: " + camra.faced.horizontal + ' ' + camra.direction.y);
}

function doRayFunction(x, y) {
    for (let i = 0; i < 5; i += rayTickDistence) {
        if (ray.direction.x >= 0 && ray.direction.x <= 90) {
            ray.corrdiates.x += ray.direction.x / 90;
            ray.corrdiates.z += (ray.direction.x / 90);
        } else if (ray.direction.x > 90 && ray.direction.x <= 180) {
            ray.corrdiates.x += 1 -(ray.direction.x - 90) / 90;
            ray.corrdiates.z -= (ray.direction.x - 90) / 90;
        } else if (ray.direction.x > 180 && ray.direction.x <= 270) {
            ray.corrdiates.x -= (ray.direction.x - 180) / 90;
            ray.corrdiates.z -= 1 - (ray.direction.x - 180) / 90;
        } else if (ray.direction.x > 270 && ray.direction.x < 360) {
            ray.corrdiates.x -= 1 - (ray.direction.x - 270) / 90;
            ray.corrdiates.z += (ray.direction.x - 270) / 90;
        }

        if (ray.direction.y > 0 && ray.direction.y <= 90) {
            ray.corrdiates.y += ray.direction.y / 90;
        } else if (ray.direction.y < 0 && ray.direction.y >= -90) {
            ray.corrdiates.y -= (-ray.direction.y) / 90;
        }

        console.log(JSON.stringify(ray.corrdiates), ray.direction.x, ray.direction.y);

        if (ray.corrdiates.x >= -0.5 && ray.corrdiates.x <= 0.5) {
            if (ray.corrdiates.y >= 0 && ray.corrdiates.y <= 1) {
                if (ray.corrdiates.z >= 1 && ray.corrdiates.z <= 2) {
                    setFrameDataColor("#676767", x, y, i / 5);

                    return;
                }
            }
        }

        setFrameDataColor("#0b2d0e", x, y);
    }
}

function setFrameDataColor(color, x, y, alpha) {
    let index = (x + (y * windowSize.width)) * 4;

    frame.data[index + 0] = (hexadecimalToDecimal[color[1]] * 16 + hexadecimalToDecimal[color[2]]);
    frame.data[index + 1] = (hexadecimalToDecimal[color[3]] * 16 + hexadecimalToDecimal[color[4]]);
    frame.data[index + 2] = (hexadecimalToDecimal[color[5]] * 16 + hexadecimalToDecimal[color[6]]);
    frame.data[index + 3] = alpha * 255 || 255;
}

function rendFrame() {
    for (let x = 0; x < windowSize.width; x++) {
        for (let y = 0; y < windowSize.height; y++) {
            ray.corrdiates.x = camra.corrdiates.x;
            ray.corrdiates.y = camra.corrdiates.y;
            ray.corrdiates.z = camra.corrdiates.z;

            windowSize.width < 1 ?
                ray.direction.x = camra.direction.x + (x / windowSize.width) - 0.5 * 2 * (camra.FOV / 2) :
                ray.direction.x = camra.direction.x;
            windowSize.height < 1 ?
                ray.direction.y = camra.direction.y + (y / windowSize.height) - 0.5 * 2 * (camra.FOV / 2) :
                ray.direction.y = camra.direction.y;

            console.log(ray.direction.x, ray.direction.y);

            doRayFunction(x, y);
        }
    }

    ctx.putImageData(frame, 0, 0);

    checkKey();
}

function start(type, FPS) {
    let FPSms = Math.floor(1000 / FPS) || 60;

    if (type == "screenFPS") {
        loop();
    } else if (type == "singleFrame") {
        rendFrame();
    } else if (type == "timeInterval") {
        setInterval(() => {
            rendFrame();
        }, FPSms);
    }
}

function loop() {
    rendFrame();
    window.requestAnimationFrame(loop);
}

document.addEventListener("keydown", (event) => {
    keySet[event.code] = true;
});

document.addEventListener("keyup", (event) => {
    keySet[event.code] = false;
});

function checkKey() {
    if (keySet["ArrowUp"]) {
        if (camra.direction.y <= (90 - sensitivity)) {
            camra.direction.y += sensitivity;
        }
    } else if (keySet["ArrowDown"]) {
        if (camra.direction.y >= (-90 + sensitivity)) {
            camra.direction.y -= sensitivity;
        }
    } else if (keySet["ArrowLeft"]) {
        if (camra.direction.x <= 0) {
            camra.direction.x = 355;
        } else {
            camra.direction.x -= sensitivity;
        }
    } else if (keySet["ArrowRight"]) {
        if (camra.direction.x >= 355) {
            camra.direction.x = 0;
        } else {
            camra.direction.x += sensitivity;
        }
    }

    if (keySet["KeyW"]) {
        camra.corrdiates.z += 0.2;
    } else if (keySet["KeyS"]) {
        camra.corrdiates.z -= 0.2;
    } else if (keySet["KeyA"]) {
        camra.corrdiates.x -= 0.2;
    } else if (keySet["KeyD"]) {
        camra.corrdiates.x += 0.2;
    } else if (keySet["KeyQ"]) {
        camra.corrdiates.y += 0.2;
    } else if (keySet["KeyE"]) {
        camra.corrdiates.y -= 0.2;
    }
};

setCamraFaced();

start("singleFrame", 10);