const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rayTickDistence = 0.1;

let windowSize = {
    height: 300,
    width: 400
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
    FOV: 60,
    corrdiates: {
        x: 0,
        y: 2,
        z: 0
    },
    direction: {
        x: 315,
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
        y: null,
        z: null
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

canvas.width = windowSize.width;
canvas.height = windowSize.height;

function setCamraFaced() {
    if (315 <= camra.direction.x && camra.direction.x < 45) {
        camra.faced.parallel = "north";
    } else if (45 <= camra.direction.x && camra.direction.x < 135) {
        camra.faced.parallel = "east";
    } else if (135 <= camra.direction.x && camra.direction.x < 225) {
        camra.faced.parallel = "south";
    } else if (225 <= camra.direction.x && camra.direction.x < 315) {
        camra.faced.parallel = "west";
    }

    if (camra.direction.y >= 0 && camra.direction.y <= 90) {
        camra.faced.horizontal = "up";
    } else if (camra.direction.y < 0 && camra.direction.y <= -90) {
        camra.faced.horizontal = "down";
    }
}

function doRayFunction(x, y) {
    for (let i = 0; i < 50; i += rayTickDistence) {
        ray.corrdiates.x += ((ray.direction.x / 180) - 1) * rayTickDistence;
        ray.corrdiates.y += (ray.direction.y / 90) * rayTickDistence;
        ray.corrdiates.z += rayTickDistence;

        // TODO: 改变 ray.corrdiates.z 值增加 的临时方案

        if (ray.corrdiates.x >= -1 && ray.corrdiates.x <= -2) {
            if (ray.corrdiates.y >= 0 && ray.corrdiates.y <= 1) {
                if (ray.corrdiates.z >= 1 && ray.corrdiates.z <= 2) {
                    setFrameDataColor("#ffffff", x, y);

                    break;
                }
            }
        }

        setFrameDataColor("#000000", x, y);
    }
}

function setFrameDataColor(color, x, y) {
    let index = x * y * 4;

    frame[index + 0] = (hexadecimalToDecimal[color[1]] * 16 + hexadecimalToDecimal[color[2]]);
    frame[index + 1] = (hexadecimalToDecimal[color[3]] * 16 + hexadecimalToDecimal[color[4]]);
    frame[index + 2] = (hexadecimalToDecimal[color[5]] * 16 + hexadecimalToDecimal[color[6]]);
    frame[index + 3] = 255;
}

function rendFrame() {
    for (let x = 0; x < windowSize.width; x++) {
        for (let y = 0; y < windowSize.height; y++) {
            ray.corrdiates.x = camra.corrdiates.x;
            ray.corrdiates.y = camra.corrdiates.y;
            ray.corrdiates.z = camra.corrdiates.z;

            ray.direction.x = camra.direction.x + (((x / windowSize.width) * camra.FOV) - camra.FOV / 2);
            ray.direction.y = camra.direction.y + (((y / windowSize.height) * camra.FOV) - camra.FOV / 2);

            doRayFunction(x, y);
        }
    }

    ctx.putImageData(frame, 0, 0);
}

setCamraFaced();

// setInterval(() => {
//     rendFrame();
// }, 200);

rendFrame();