const _ = Canva.width = Canva.height = (innerWidth < innerHeight ? innerWidth : innerHeight) - 25
const $ = Canva.getContext("2d")
const R = "red"
const Y = "gold"
const B = "blue"

fetch('Levels/' + 'Level' + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => alert($))

function loadMap(Q) {
    Board = Q.Board
    Target = Q.Target
    for (let y = 0; y < Board.length; y++) {
        for (let x = 0; x < Board.length; x++) {
            $.fillStyle = Board[y][x] ? "black" : "white"
            $.fillStyle = eval(Board[y][x])
            addSquare(x,y)
            $.fillStyle = "#fff7"
            $.beginPath()
            $.arc(_*(x+1/2)/Board.length,_*(y+1/2)/Board.length,_/5/Board.length,0,7)
            $.fill()
            $.closePath()
        }
    }
}

function clickCanvas(event) {
    eventCanvas(event.pageX, event.pageY)
}

function eventCanvas(x, y) {
    x -= Canva.getBoundingClientRect().x
    y -= Canva.getBoundingClientRect().y
    if (window.former != undefined) {
        const X = Math.round(x*Board.length/_-1/2)
        const Y = Math.round(y*Board.length/_-1/2)
        $.fillStyle = former.color
        if (!Board[X][Y]) addSquare(X,Y)
    }
}

function addSquare(x,y) {
    $.fillRect(_*x/Board.length+3,_*y/Board.length+3,_/Board.length-6,_/Board.length-6)
    //Solve = $.fillStyle
    //Qnumber.innerText = Solve
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    latter.background = latter.color
    former = latter
}
