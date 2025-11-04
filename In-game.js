const _ = Canva.width = Canva.height = innerWidth < innerHeight ? innerWidth : innerHeight
const $ = Canva.getContext("2d")
//$.path()
loadMap(10,3)

function loadMap(size,need) {
    globalSize = size
    globalNeed = need
    const Board = [[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,]]
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            switch (Board[y][x]) {
                case undefined: $.fillStyle = 'White'; break
                case 'R': $.fillStyle = 'Red'; break
                case 'Y': $.fillStyle = 'Gold'; break
                case 'B': $.fillStyle = 'Blue'; break
                default: $.fillStyle = 'Black'
            }
            //try{$.fillStyle = }catch(_){alert(_)}"rgb(" + x*3*x + "," + x*3*y + "," + y*3*y + ")"
            $.fillRect(_*x/globalSize+3,_*y/globalSize+3,_/globalSize-6,_/globalSize-6)
        }
    }
    Qnumber.innerText = Board
}

function clickCanvas(event) {
    eventCanvas(event.pageX, event.pageY, true);
}

function eventCanvas(x, y, z) {
    const X0 = x - Canva.getBoundingClientRect().x;
    const Y0 = y - Canva.getBoundingClientRect().y;
    if (window.former != undefined) $.fillStyle = former.color
    $.fillRect(X0, Y0, _ / globalSize, _ / globalSize)
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    latter.background = latter.color
    former = latter
}
