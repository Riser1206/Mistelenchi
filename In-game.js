if (innerWidth > innerHeight) spurn("가로 화면입니다. 세로 화면으로 바꿔주세요.")
const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
const R = "red"
const Y = "gold"
const B = "blue"
const Level = location.search.split('?')

fetch('Levels/' + Level[1] + '.json').then(res => res.json()).then(data => loadMap(data)).catch($ => spurn($))

function spurn(Note) {
    alert(Note)
    location.assign("https://www.bonuslevel.org")
    $ = $
}

function loadMap(Q) {
    Qnumber.innerText = Level[2]
    Board = Q.Board
    Target = Q.Target
    Paths = Q.Paths
    $.lineCap = "round"
    $.lineJoin = "round"
    $.lineWidth = _/7/Board.length
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
    Given = 0
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
    Given = 1
    for (const Path of Paths) hintPaths(Path)
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

function hintPaths(Object) {
    if (!Number.isInteger(Object.X) || !Number.isInteger(Object.Y)) spurn(JSON.stringify(Object))
    let x = Object.X
    let y = Object.Y
    const Group = [Solve[y-1][x-1]]
    $.beginPath()
    $.moveTo(_*(x-.5)/Board.length, _*(y-.5)/Board.length)
    for (const pursuit of Object.Array) {
        switch (pursuit) {
            case 0: y--; break
            case 1: x++; y--; break
            case 2: x++; break
            case 3: x++; y++; break
            case 4: y++; break
            case 5: x--; y++; break
            case 6: x--; break
            case 7: x--; y--; break
            default: spurn(pursuit)
        }
        Group.push(Solve[y-1][x-1])
        $.lineTo(_*(x-.5)/Board.length, _*(y-.5)/Board.length)
    }
    $.strokeStyle = Object.Color
    if ("Primary" == Object.Color) $.strokeStyle = "#ccc"
    if ("Secondary" == Object.Color) $.strokeStyle = "#999"
    if ("Tertiary" == Object.Color) $.strokeStyle = "#666"
    $.stroke()
    let results
    switch (Group) {
        default: break
    }
    return Qnumber.innerText = results
}

function addSquare(x,y) {
    Solve[y][x] = Color
    $.fillRect(_*x/Board.length+25,_*y/Board.length+25,_/Board.length-50,_/Board.length-50)
    if (Given) for (const Path of Paths) hintPaths(Path)
}

function pickColor(latter) {
    if (window.former != undefined) former.background = latter.background
    Color = $.fillStyle = latter.background = latter.color
    former = latter
}
