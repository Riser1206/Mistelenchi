const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
const R = "red"
const Y = "gold"
const B = "blue"
const Level = location.search.split('?')
fetch('Levels/' + Level[1] + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => alert($))

function loadMap(Q) {
    Board = Q.Board
    Target = Q.Target
    Clear()
}

function clickCanvas() {
    if (window.former != undefined) {
        const X = Math.round((event.clientX-$.canvas.offsetLeft)*Board.length/$.canvas.offsetWidth-1/2)
        const Y = Math.round((event.clientY-$.canvas.offsetTop)*Board.length/$.canvas.offsetHeight-1/2)
        if (!Board[Y][X]) addSquare(X,Y)
    }
}

function Clear() {
    Solve = Array(Board.length)
    for (let y = 0; y < Board.length; y++) {
        Solve[y] = Array(Board.length)
        for (let x = 0; x < Board.length; x++) {
            $.fillStyle = Board[y][x] ? "black" : "white"
            Color = $.fillStyle = eval(Board[y][x][0])
            addSquare(x,y)
            $.fillStyle = "#fff7"
            $.beginPath()
            $.arc(_*(x+1/2)/Board.length,_*(y+1/2)/Board.length,_/7/Board.length,0,7)
            $.fill()
            $.closePath()
        }
    }
    Color = $.fillStyle = window.former != undefined ? former.background : "transparent"
}

function Check() {
    const Trans = []
    for (let i = 0; i < Solve.length; i++) {
        Trans[i] = []
        for (let j = 0; j < Solve.length; j++) {
            Trans[i][j] = Solve[j][i]
        }
    }
    // Count(Trans)
   // Target 
        Qnumber.style="font-size:5;font-family: monospace;color:#ccc"
        Qnumber.innerText = "conut"+Count(Trans)+Count(Solve)
}

function Count(Way) {
    const triplet = [undefined,R,Y,B]
    let conut = "\n\n"
    for (let i = 0; i < Board.length; i++) {
        for (let j = 0; j < 3;) {
            j++
            const n = Way[i].filter(item => item === triplet[j]).length;
            let q
            if (Target < n) q = "<"
            if (Target == n) q = "="
            if (Target > n) q = ">"
            conut += " " + triplet[j] + i + " " + q
        }
    }
    return conut
}

function addSquare(x,y) {
    Solve[y][x] = Color
    $.fillRect(_*x/Board.length+25,_*y/Board.length+25,_/Board.length-50,_/Board.length-50)
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    Color = $.fillStyle = latter.background = latter.color
    former = latter
}
