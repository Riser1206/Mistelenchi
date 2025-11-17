const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
$.lineCap = "round"
$.lineJoin = "round"
const R = "red"
const G = "gold"
const B = "blue"
const Level = location.search.split('?')
if (innerWidth > innerHeight) spurn("가로 화면입니다. 세로 화면으로 바꿔주세요.",0); else if (!Number.isInteger(Level[2] -= 0) || Level[2] < 1) spurn(Level[2],1); else fetch(`Levels/${Level[1]}/${Level[2]}.json`).then(res => res.json()).then(data => loadMap(data)).catch($ => spurn($,9))

function spurn(message, code) {
    alert(message + "\n" + code)
    location.assign(code)
}

function loadMap(Q) {
    Qnumber.innerText = `Stage: ${Level[2]}\nSet: ${Set = Q.Set}`
    Board = Q.Board
    Paths = Q.Paths
    if (!Number.isInteger(Set) || Set < 1) return spurn(Set,8)
    if (Set*3 == Board.length) alert(_1.visibility="none")
    Clear()
}

function clickCanvas() {
    const X = Math.round((event.clientX-$.canvas.offsetLeft)*Board.length/$.canvas.offsetWidth-1/2)
    const Y = Math.round((event.clientY-$.canvas.offsetTop)*Board.length/$.canvas.offsetHeight-1/2)
    if (!Board[Y][X]) addSquare(X,Y)
}

function Clear() {
    Given = 0
    Solve = Array(Board.length)
    for (let y = 0; y < Board.length; y++) {
        Solve[y] = Array(Board.length)
        for (let x = 0; x < Board.length; x++) {
            if (typeof Board[y][x] != "string") return spurn(typeof Board[y][x],2)
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
    pickColor(_1.style)
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
    let massage = Count(Solve,"번 가로줄에 ")+Count(Trans,"번 세로줄에 ")
    for (const Path of Paths) if (!hintPaths(Path)) massage += Path.Color+" 라인 불일치\n"
    alert(massage ? massage : (location.href=`In-game?${Level[1]}?${Level[2]+1}`,"완료!"))
}

function Count(Way, Language) {
    let massage = ""
    const triplet = [R,G,B]
    for (let i = 0; i < Board.length; i++) {
        for (let j = 0; j < 3; j++) {
            const n = Way[i].filter(item => item === triplet[j]).length
            if (Set != n) massage += i+1+Language+triplet[j]
            if (Set < n) massage+=" 초과\n"
            if (Set > n) massage+=" 부족\n"
        }
    }
    return massage
}

function hintPaths(Object) {
    let x = Object.X
    let y = Object.Y
    if (!("Primary" == Object.Color || "Red" == Object.Color || "Gold" == Object.Color || "Blue" == Object.Color || "Secondary" == Object.Color || "Purple" == Object.Color || "Orange" == Object.Color || "Green" == Object.Color || "Tertiary" == Object.Color)) return spurn(Object.Color,3)
    if (!Number.isInteger(x) || !Number.isInteger(y) || x<1 || y<1 || x>Board.length || y>Board.length) return spurn([x,y],4)
    if (!Object.Array.length) return spurn(JSON.stringify(Object.Array),5)
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
            default: return spurn(pursuit,6)
        }
        if (x<1 || y<1 || x>Board.length || y>Board.length) return spurn([x,y],7)
        Group.push(Solve[y-1][x-1])
        $.lineTo(_*(x-.5)/Board.length, _*(y-.5)/Board.length)
    }
    $.strokeStyle = Object.Color
    $.lineWidth = _/7/Board.length
    if ("Primary" == Object.Color) $.strokeStyle = "#bfbfbf"
    if ("Secondary" == Object.Color) $.strokeStyle = "#7f7f7f"
    if ("Tertiary" == Object.Color) $.strokeStyle = "#3f3f3f"
    $.stroke()
    const Results = ""+Group.includes(R)+Group.includes(G)+Group.includes(B)
    const Target = $.strokeStyle
    x = Object.X
    y = Object.Y
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
        }
        $.lineTo(_*(x-.5)/Board.length, _*(y-.5)/Board.length)
    }
    const Achromatic = 6 < Object.Color.length
    if (Results == "falsefalsefalse") $.strokeStyle = "Ivory"
    if (Results == "truefalsetrue") $.strokeStyle = Achromatic ? "#7f7f7f" : "Purple"
    if (Results == "truefalsefalse") $.strokeStyle = Achromatic ? "#bfbfbf" : "Red"
    if (Results == "truetruefalse") $.strokeStyle = Achromatic ? "#7f7f7f" : "Orange"
    if (Results == "falsetruefalse") $.strokeStyle = Achromatic ? "#bfbfbf" : "Gold"
    if (Results == "falsetruetrue") $.strokeStyle = Achromatic ? "#7f7f7f" : "Green"
    if (Results == "falsefalsetrue") $.strokeStyle = Achromatic ? "#bfbfbf" : "Blue"
    if (Results == "truetruetrue") $.strokeStyle = "#3f3f3f"
    $.lineWidth = _/15/Board.length
    $.stroke()
    return Target == $.strokeStyle
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
