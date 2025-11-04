const _ = Canva.width = Canva.height = innerWidth < innerHeight ? innerWidth : innerHeight
const $ = Canva.getContext("2d")
const X = "black"
const R = "maroon"
const Y = "olive"
const B = "navy"
loadMap(10,3)
// fetch('Levels/' + Level[1] + '/' + Level[2] + '.json').then(res => res.json()).then(data => initMap(data)).catch($ => exception($));


function loadMap(size,need) {
    globalSize = size
    globalNeed = need
    try{
        const Board = [[R,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,Y,,,,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,B,,,],[,,,,,,,,,],[,,,,,,,,,],[,,,,,,,,,X]]
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            $.fillStyle = "white"
            $.fillStyle = Board[y][x]
            $.fillRect(_*x/globalSize+3,_*y/globalSize+3,_/globalSize-6,_/globalSize-6)
        }
    }
    }catch(_){alert(_)}
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
