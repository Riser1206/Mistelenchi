const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
const R = "red"
const Y = "gold"
const B = "blue"

fetch('Levels/' + 'Level' + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => alert($))

function loadMap(Q) {
    Board = Q.Board
    Target = Q.Target
    Solve = Array(Q.Board.length)
    for (let y = 0; y < Board.length; y++) {
        for (let x = 0; x < Board.length; x++) {
            $.fillStyle = Board[y][x] ? "black" : "white"
            $.fillStyle = eval(Board[y][x])
            addSquare(x,y)
            $.fillStyle = "#fff7"
            $.beginPath()
            $.arc(_*(x+1/2)/Board.length,_*(y+1/2)/Board.length,_/7/Board.length,0,7)
            $.fill()
            $.closePath()
        }
    }
}

function clickCanvas() {
            const x = event.clientX - $.canvas.offsetLeft;
            const y = event.clientY - $.canvas.offsetTop;
    if (window.former != undefined) {
        const X = Math.round(x*Board.length/$.canvas.offsetWidth-1/2)
        const Y = Math.round(y*Board.length/$.canvas.offsetHeight-1/2)
        $.fillStyle = former.color
        if (!Board[X][Y]) addSquare(X,Y)
    }
}

function check() {
    alert([_,Canva.width,Canva.height])
        alert(Solve)
}

function addSquare(x,y) {
    $.fillRect(_*x/Board.length+25,_*y/Board.length+25,_/Board.length-50,_/Board.length-50)
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    latter.background = latter.color
    former = latter
}
