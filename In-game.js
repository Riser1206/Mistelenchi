const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
$.lineCap = $.lineJoin = "round"
const R = "red"
const G = "gold"
const B = "blue"
const Level = location.search.split('?')
innerWidth > innerHeight ? spurn("가로 화면입니다. 세로 화면으로 바꿔주세요.",0) : !Number.isInteger(Level[2] -= 0) || Level[2] < 1 ? spurn(Level[2],1) : fetch(`Levels/${Level[1]}/${Level[2]}.json`).then(res => res.json()).then(loadMap).catch($ => spurn($,9))

function spurn(message, code) {
    history.back(alert(message + "\n" + code))
}

function loadMap(Q) {
    Qnumber.innerText = `Stage: ${Level[2]}\nSet: ${Set = Q.Set}`
    if (!Number.isInteger(Set) || Set < 1) return spurn(Set,8)
    if (Set*3 == (Board = Q.Board).length) _1.style.display="none"
    Clear(Paths = Q.Paths)
}

function clickCanvas() {
    const X = Math.round((event.clientX-$.canvas.offsetLeft-5)*Board.length/($.canvas.offsetWidth-10)-.5)
    const Y = Math.round((event.clientY-$.canvas.offsetTop-5)*Board.length/($.canvas.offsetHeight-10)-.5)
    if (X == -1 || Y == -1 || X == Board.length || Y == Board.length) return
    if (!Board[Y][X]) addSquare(X,Y)
}

function Clear() {
    Given = 0
    Solve = []
    for (let y = 0; y < Board.length; y++) {
        Solve[y] = []
        for (let x = 0; x < Board.length; x++) {
            if (typeof Board[y][x] != "string") return spurn(typeof Board[y][x],2)
            $.fillStyle = Board[y][x] ? "black" : "white"
            Color = $.fillStyle = eval(Board[y][x][0])
            addSquare(x,y)
            $.fillStyle = "#fff7"
            $.beginPath()
            $.arc(_*(x+.5)/Board.length,_*(y+.5)/Board.length,_/7/Board.length,0,7)
            $.fill()
            $.closePath()
        }
    }
    pickColor(_0.style)
    Given = 1
    for (const Path of Paths) drawPaths(Path)
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
    for (const Path of Paths) if (!drawPaths(Path)) massage += Path.Color+" 라인 불일치\n"
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

function drawPaths(Path) {
    let x = Path.X
    let y = Path.Y
    if (!("Primary" == Path.Color || "Red" == Path.Color || "Gold" == Path.Color || "Blue" == Path.Color || "Secondary" == Path.Color || "Purple" == Path.Color || "Orange" == Path.Color || "Green" == Path.Color || "Tertiary" == Path.Color)) return spurn(Path.Color,3)
    if (!Number.isInteger(x) || !Number.isInteger(y) || x<1 || y<1 || x>Board.length || y>Board.length) return spurn([x,y],4)
    if (!Path.Array.length) return spurn(JSON.stringify(Path.Array),5)
    const Group = [Solve[y-1][x-1]]
    $.beginPath()
    $.moveTo(_*(x-.5)/Board.length, _*(y-.5)/Board.length)
    for (const pursuit of Path.Array) {
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
    $.strokeStyle = Path.Color
    $.lineWidth = _/7/Board.length
    if ("Primary" == Path.Color) $.strokeStyle = "#bfbfbf"
    if ("Secondary" == Path.Color) $.strokeStyle = "#7f7f7f"
    if ("Tertiary" == Path.Color) $.strokeStyle = "#3f3f3f"
    $.stroke()
    const Results = ""+Group.includes(R)+Group.includes(G)+Group.includes(B)
    const Target = $.strokeStyle
    const Achromatic = 6 < Path.Color.length
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
    if (Given) for (const Path of Paths) drawPaths(Path)
}

function pickColor(latter) {
    if (window.former) former.background = latter.background
    Color = $.fillStyle = latter.background = latter.color
    former = latter
}
