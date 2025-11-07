if (innerWidth > innerHeight) alert(location.assign("https://www.bonuslevel.org"))
const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
const R = "red"
const Y = "gold"
const B = "blue"
const Level = location.search.split('?')

fetch('Levels/' + Level[1] + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => alert($))

function loadMap(Q) {
    Qnumber.innerText = Level[2]
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
    const massage = Count(Solve,"번 가로줄에 ")+Count(Trans,"번 세로줄에 ")
    alert(massage ? massage : location.assign("https://www.bonuslevel.org")+"완료!")
}

function Count(Way, Language) {
    const triplet = [undefined,R,Y,B]
    for (let i = 0; i < Board.length; i++) {
        for (let j = 0; j < 3;) {
            j++
            const n = Way[i].filter(item => item === triplet[j]).length
            const msg = i+1+Language+triplet[j]
            if (Target < n) return msg+" 초과\n"
            if (Target > n) return msg+" 부족\n"
        }
    }
    return ""
}

function hintPaths() {
    alert(0)
    $.beginPath()
    $.moveTo(10, 10)
    $.lineTo(100, 150)
    $.lineWidth = 10
    $.strokeStyle = "red"
    $.lineCap = "round"
    $.stroke()
    alert(1)
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
