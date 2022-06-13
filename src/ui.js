import * as ui from './utils.js'
import * as game from './game.js'

var showdebugborders = false

// CONSTANTS
const tabButtonClass = "tabButton"
const tabBackgroundClass = "tabBackground"

// DIVS
var mainDiv
var tabDiv
var tabButtonDiv

var test =[]

//Tabs
var numberTab
var upgradeTab

var numberTabButton
var upgradeTabButton

//NumberPage
var mainButton

//UpgradePage
var upgrade_ClickButton




export function init() {
    
    mainDiv = ui.makeElement("div")
    mainDiv.className = "mainFlex"
    if (showdebugborders) mainDiv.style.border = '2px solid green'

    tabButtonDiv = ui.makeElement("div",mainDiv)
    if (showdebugborders) tabButtonDiv.style.border = '2px solid yellow'
    tabButtonDiv.className = "tabButtonFlex"

    numberTabButton = ui.makeElement("div",tabButtonDiv)
    numberTabButton.className = tabButtonClass
    numberTabButton.innerHTML = "Main"

    for (var i=0; i<10; i++){
        var element = ui.makeElement("div",tabButtonDiv)
        test[i] = element
        test[i].className = tabButtonClass
        test[i].innerHTML = "Test"
        if (i>3){
            element.style.display = "none"
        }
    }

    tabDiv = ui.makeDiv(0,50,600,350,mainDiv)
    if (showdebugborders) tabDiv.style.border = '2px solid yellow'
    tabDiv.className = tabBackgroundClass
    
    numberTab = ui.makeDiv(0,200,600,200,tabDiv)
    if (showdebugborders) numberTab.style.border = '2px solid green'
    
    mainButton = ui.makeDiv(200,0,100,50,numberTab)
    if (showdebugborders) mainButton.style.border = '2px solid red'
    
    mainButton.addEventListener('mouseup', game.IncrementNumber)
    mainButton.className = tabButtonClass
}

export function UpdateUI() {
    var currentTab = game.GetTab()
    for(var i =0;i<test.length;i++){
        if (game.GetNumber()> i){
            test[i].style.display = "initial"
        }
    }
    mainButton.innerHTML = "<br >" + game.GetNumber() + "</ br>"
}