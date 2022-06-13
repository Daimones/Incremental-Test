import * as ui from './utils.js'
import * as game from './game.js'
var mainButton
var mainDiv

export function init() {
    var showdebugborders = true

    mainDiv = ui.makeDiv(0,0,600,400,null)
    if (showdebugborders) mainDiv.style.border = '2px solid green'
    mainDiv.style.userSelect = "none"
    
    
    mainButton = ui.makeDiv(200,200,100,50,mainDiv)
    if (showdebugborders) mainButton.style.border = '2px solid red'
    mainButton.style.userSelect = "none"
    mainButton.addEventListener('mouseup', game.IncrementNumber)
}

export function UpdateUI() {
    mainButton.innerHTML = "<br >" + game.GetNumber() + "</ br>"
}