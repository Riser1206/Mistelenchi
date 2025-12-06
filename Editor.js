const _ = Canva.width = Canva.height = 2500
const $ = Canva.getContext("2d")
const Euameate=document.createElement('textarea')//ctx
document.body.appendChild(Euameate)//ctx
Euameate.style.height = innerHeight//ctx
Euameate.style.width = innerWidth//ctx
Euameate.style.fontSize = 9//ctx
$.lineCap = "round"
$.lineJoin = "round"
const R = "red"
const G = "gold"
const B = "blue"
if (innerWidth > innerHeight) spurn("가로 화면입니다. 세로 화면으로 바꿔주세요."); else loadMap(``,1,3)

function spurn(message) {
    alert(message)
    history.back()
}

function loadMap(Stage,Set,Length) {
    isPathNum = 0
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
        let Z
        for (let y = 0; y < 3; y++) for (let x = 0; x < 3; x++) if ($.isPointInPath(Switches[x][y],Math.round((event.clientX-$.canvas.offsetLeft-5)*_/($.canvas.offsetWidth-10)-.5),Math.round((event.clientY-$.canvas.offsetTop-5)*_/($.canvas.offsetHeight-10)-.5))) if (x*y-(Z=1)) Paths[isPathNum-1].Array.push(4-Math.atan2(x-1,y-1)/Math.PI*4); else Paths[isPathNum-1].Array.pop()
        if (!Z) {
            cease()
            isPathNum = 0
            select()
        }
    } else if (isPathNum == []) if (select()); else isPathNum = Paths.push({Color:Color,X:X+1,Y:Y+1,Array:[]}); else if (!window.isTest) Board[Y][X] = Solve[Y][X] = Color; else if (Board[Y][X] == "white") Solve[Y][X] = Color
    drawSquare()
}

function cease() {
    if (!Paths[isPathNum-1].Array.length) Paths.splice(isPathNum-1,1)
}

function select() {
    $.lineWidth = _/7/Length_
    PathSwitches.forEach((PathSwitch, i) => {if ($.isPointInStroke(PathSwitch,Math.round((event.clientX-$.canvas.offsetLeft-5)*_/($.canvas.offsetWidth-10)-.5),Math.round((event.clientY-$.canvas.offsetTop-5)*_/($.canvas.offsetHeight-10)-.5))) isPathNum = i == Paths.length ? 0 : i+1})
    return isPathNum
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
    PathSwitches = []
    Switches = [[],[],[]]
    for (const Path of Paths) drawPaths(Path)
    if (isPathNum) drawPaths(Paths[isPathNum-1])
    Euameate.value = JSON.stringify({isPathNum:isPathNum,Color:Color,PathSwitches:PathSwitches,Switches:Switches,Paths:Paths,Board:Board,Solve:Solve}, null, 2)//ctx
}

function drawPaths(Path,z) {
    let x = Path.X
    let y = Path.Y
    const Group = [Solve[y-1][x-1]]
    const PathSwitch = new Path2D()
    PathSwitch.moveTo(_*(x-.5)/Length_, _*(y-.5)/Length_)
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
        Group.push(Solve[y-1][x-1])
        PathSwitch.lineTo(_*(x-.5)/Length_, _*(y-.5)/Length_)
    }
    $.strokeStyle = Path.Color
    if (!z) {
        $.lineWidth = _/7/Length_
        $.stroke(PathSwitch)
        if (Path.Array.length) PathSwitches.push(PathSwitch)
    }
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
    if (!z) {
        $.lineWidth = _/15/Length_
        $.stroke(PathSwitch)
    } else return Target == $.strokeStyle
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
    if (isPathNum) cease()
    isPathNum = Z
    if (Board+Solve) drawSquare()
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
    for (const Path of Paths) if (!drawPaths(Path,1)) massage += Path.Color+" 라인 불일치\n"
    return massage
}

function Count(Way, Language) {
    let massage = ""
    const triplet = [R,G,B]
    for (let i = 0; i < Length_; i++) {
        for (let j = 0; j < 3; j++) {
            const n = Way[i].filter(item => item === triplet[j]).length
            if (Set_ != n) massage += i+1+Language+triplet[j]
            if (Set_ < n) massage+=" 초과\n"
            if (Set_ > n) massage+=" 부족\n"
        }
    }
    return massage
}

function alternate(key,value) {
/*
try{}catch(re){alert(re)}finally {}
if ([]) 
*/
    switch (value) {
        case "rgb(191, 191, 191)": value = "Primary"; break
        case R: value = "Red"; break
        case G: value = "Gold"; break
        case B: value = "Blue"; break
        case "rgb(127, 127, 127)": value = "Secondary"; break
        case "purple": value = "Purple"; break
        case "orange": value = "Orange"; break
        case "green": value = "Green"; break
        case "rgb(63, 63, 63)": value = "Tertiary"; break
    }
    return value
}

function Save() {
    const Level = JSON.stringify({Set:Set_,Board:Board,Paths:Paths}, alternate, 2)
    const massage = Check(alert(Level))
    if (massage) return alert(massage)
    let __ = URL.createObjectURL(new Blob([Level], { type: 'application/json' }))
    if (window.___) URL.revokeObjectURL(___)
    ___ = __
    const a = document.createElement('a')
    a.download = Stage_+'.json'
    a.href = __
    a.click()
}
