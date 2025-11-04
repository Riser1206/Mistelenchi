const _ = Canva.width = Canva.height = innerWidth < innerHeight ? innerWidth : innerHeight
const $ = Canva.getContext("2d")
const X = "black"
const R = "maroon"
const Y = "olive"
const B = "navy"
fetch('Levels/' + 'Level' + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => alert($))


function loadMap(Q) {
    Board = Q.Board
alert(Q.Target)
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            $.fillStyle = "white"
            $.fillStyle = eval(Board[y][x])
            $.fillRect(_*x/Board.length+3,_*y/Board.length+3,_/Board.length-6,_/Board.length-6)
        }
    }
    Qnumber.innerText = "_"
}

function clickCanvas(event) {
    eventCanvas(event.pageX, event.pageY, true);
}

function eventCanvas(x, y, z) {
    const X0 = x - Canva.getBoundingClientRect().x;
    const Y0 = y - Canva.getBoundingClientRect().y;
    if (window.former != undefined) $.fillStyle = former.color
    $.fillRect(X0, Y0, _ / Board.length, _ / Board.length)
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    latter.background = latter.color
    former = latter
}
