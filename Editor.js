const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
const Switches = [[],[],[]]
$.lineCap = "round"
$.lineJoin = "round"
if (innerWidth > innerHeight) spurn("가로 화면입니다. 세로 화면으로 바꿔주세요."); else loadMap(``,1,3)

function spurn(message) {
    alert(message)
    history.back()
}

function loadMap(Stage,Set,Length) {
    Paths = []
    Board = []
    Solve = []
    _1.style.display = Set*3 == (Length_=Length) ? "none" : "inline-block"
    Qnumber.innerText = `${(Stage_=Stage) ? Stage_ : "→Click←"}\nSet: ${Set_=Set}`
    pickColor(_0.style)
    for (let y = 0; y < Length_; y++) {
        Board[y] = []
        Solve[y] = []
        for (let x = 0; x < Length_; x++) {
            Board[y][x] = Color
            Solve[y][x] = Color
        }
    }
    drawSquare()
}

function clickCanvas() {
    const X = Math.round((event.clientX-$.canvas.offsetLeft-5)*Length_/($.canvas.offsetWidth-10)-.5)
    const Y = Math.round((event.clientY-$.canvas.offsetTop-5)*Length_/($.canvas.offsetHeight-10)-.5)
    if (X == -1 || Y == -1 || X == Length_ || Y == Length_) return
    if (isPathNum) {
        for (let y = 0; y < 3; y++) for (let x = 0; x < 3; x++) if ($.isPointInPath(Switches[x][y],Math.round((event.clientX-$.canvas.offsetLeft-5)*_/($.canvas.offsetWidth-10)-.5),Math.round((event.clientY-$.canvas.offsetTop-5)*_/($.canvas.offsetHeight-10)-.5))) {
            if (x*y-1) Paths[isPathNum-1].Array.push(4-Math.atan2(x-1,y-1)/Math.PI*4); else Paths[isPathNum-1].Array.pop()
        }
     alert(JSON.stringify(Paths))
    } else if (isPathNum == []) isPathNum = Paths.push({Color:Color,X:X+1,Y:Y+1,Array:[]}); else if (!window.isTest) Board[Y][X] = Solve[Y][X] = Color; else if (Board[Y][X] == "white") Solve[Y][X] = Color
    drawSquare();try{Qnumber.innerText=JSON.stringify(Paths.splice(isPathNum-1))}catch(thN){Qnumber.innerText=thN}
}

function drawSquare() {
    $.clearRect(0, 0, Canva.width, Canva.height)
    for (let y = 0; y < Length_; y++) {
        for (let x = 0; x < Length_; x++) {
            $.fillStyle = Solve[y][x]
            $.fillRect(_*x/Length_+25,_*y/Length_+25,_/Length_-50,_/Length_-50)
            if (Board[y][x] == "white") continue
            $.fillStyle = "#fff7"
            $.beginPath()
            $.arc(_*(x+.5)/Length_,_*(y+.5)/Length_,_/7/Length_,0,7)
            $.fill()
            $.closePath()
        }
    }
    for (const Path of Paths) drawPaths(Path)
}

function drawPaths(Path) {
    let x = Path.X
    let y = Path.Y
    $.beginPath()
    $.moveTo(_*(x-.5)/Length_, _*(y-.5)/Length_)
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
        }
        $.lineTo(_*(x-.5)/Length_, _*(y-.5)/Length_)
    }
    $.strokeStyle = Path.Color
    $.lineWidth = _/7/Length_
    $.stroke()
    if (Paths[isPathNum-1] == Path) {
        for (let Y = 0; Y < 3; Y++) {
            for (let X = 0; X < 3; X++) {
                const Z = $.createConicGradient(0, _*(x+X-1.5)/Length_, _*(y+Y-1.5)/Length_)
                Z.addColorStop(0, 'black')
                Z.addColorStop(1/8, 'white')
                Z.addColorStop(2/8, 'black')
                Z.addColorStop(3/8, 'white')
                Z.addColorStop(4/8, 'black')
                Z.addColorStop(5/8, 'white')
                Z.addColorStop(6/8, 'black')
                Z.addColorStop(7/8, 'white')
                Z.addColorStop(1, 'black')
                $.strokeStyle = Z
                $.fillStyle = Path.Color
                $.lineWidth = _/37/Length_
                const Switch = Switches[X][Y] = new Path2D()
                Switch.arc(_*(x+X-1.5)/Length_,_*(y+Y-1.5)/Length_,_/(X*Y-1 ? 9 : 5)/Length_,0,7)
                Switch.closePath()
                $.fill(Switch)
                $.stroke(Switch)
            }
        }
    }
}

function pickColor(latter,Z) {
    if (window.former) former.background = latter.background
    Color = latter.background = latter.color
    former = latter
    isPathNum = Z
    if (Board+Solve) drawSquare()
}

function save() {
    let __ = URL.createObjectURL(new Blob([JSON.stringify({Set:Set_,Board:Board,Paths:Paths})], { type: 'application/json' }))
    if (window.___) URL.revokeObjectURL(___)
    ___ = __
    const a = document.createElement('a')
    a.download = Stage_+'.json'
    a.href = __
    a.click()
}

/*
    switch (latter.background = latter.color) {
        case $0: Color = ""; break
        case R: Color = "R"; break
        case G: Color = "G"; break
        case B: Color = "B"; break
        case $1: Color = " "; break
    }
    if (isPathNum == []) switch (Color) {
        case "rgb(191, 191, 191)": Color = "Primary"; break
        case "red": Color = "Red"; break
        case "gold": Color = "Gold"; break
        case "blue": Color = "Blue"; break
        case "rgb(127, 127, 127)": Color = "Secondary"; break
        case "purple": Color = "Purple"; break
        case "orange": Color = "Orange"; break
        case "green": Color = "Green"; break
        case "rgb(63, 63, 63)": Color = "Tertiary"; break
    }
    const blob = new Blob([data], { type: 'text/plain' });
    objURL = URL.createObjectURL(blob);
    if (window._) URL.revokeObjectURL(_);
    _ = objURL;
    const a = document.createElement('a');
    a.download = $;
    a.href = objURL;
    a.click();
    if ("Primary" == Object.Color) $.strokeStyle = "#bfbfbf"
    if ("Secondary" == Object.Color) $.strokeStyle = "#7f7f7f"
    if ("Tertiary" == Object.Color) $.strokeStyle = "#3f3f3f"
    if (Results == "truefalsetrue") $.strokeStyle = Achromatic ? "#7f7f7f" : "Purple"
    if (Results == "truefalsefalse") $.strokeStyle = Achromatic ? "#bfbfbf" : "Red"
    if (Results == "truetruefalse") $.strokeStyle = Achromatic ? "#7f7f7f" : "Orange"
    if (Results == "falsetruefalse") $.strokeStyle = Achromatic ? "#bfbfbf" : "Gold"
    if (Results == "falsetruetrue") $.strokeStyle = Achromatic ? "#7f7f7f" : "Green"
    if (Results == "falsefalsetrue") $.strokeStyle = Achromatic ? "#bfbfbf" : "Blue"
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
    pickColor(_0.style)
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
    alert(massage ? massage : (location.href=`Editor?${Level[1]}?${Level[2]+1}`,"완료!"))
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
*/
