const _ = Canva.width = Canva.height = innerWidth < innerHeight ? innerWidth : innerHeight
const $ = Canva.getContext("2d")
const R = "red"
const Y = "gold"
const B = "blue"

fetch('Levels/' + 'Level' + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => alert($))

function loadMap(Q) {
    let txt = 'table'
    Board = Q.Board
    Target = Q.Target
    for (let y = 0; y < Board.length; y++) {
        for (let x = 0; x < Board.length; x++) {
            $.fillStyle = Board[y][x] ? "black" : "white"
            $.fillStyle = eval(Board[y][x])
            $.fillRect(_*x/Board.length+3,_*y/Board.length+3,_/Board.length-6,_/Board.length-6)
            $.fillStyle = "#fff7"
            $.beginPath()
            $.arc(_*(x+1/2)/Board.length,_*(y+1/2)/Board.length,_/3/Board.length,0,7)
            $.fill()
            $.closePath()
            txt += (x == 0 ? '\n' : ' ') + Board[y][x]
        }
    }
    Qnumber.innerText = txt
}

function clickCanvas(event) {
    eventCanvas(event.pageX, event.pageY, true)
}

function eventCanvas(x, y, z) {
    x -= Canva.getBoundingClientRect().x
    y -= Canva.getBoundingClientRect().y
    if (window.former != undefined) $.fillStyle = former.color
    $.fillRect(x, y, _/Board.length, _/Board.length)
    alert([Math.round(x*Board.length/_), Math.round(y*Board.length/_)])
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    latter.background = latter.color
    former = latter
}
