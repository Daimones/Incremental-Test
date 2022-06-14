import * as ui from './utils.js'
import * as game from './game.js'


var showdebugborders = false

// CONSTANTS
const tabButtonClass = "tabButton"
const tabBackgroundClass = "tabBackground"

// DIVS
var mainDiv
var statsDiv
var tabDiv
var tabButtonDiv

var test =[]
//Stats
var rockStats

//Tabs
var numberTab
var upgradeTab

var rockTabButton
var upgradeTabButton

//NumberPage
var getRockButton

//UpgradePage
var upgrade_ClickButton

function setVisiblity(el,state){
    if (state){
        el.style.display = "initial"
    }
    else{
        el.style.display = "none"
    }
}

function changeTab(evt){
    var selected = evt.currentTarget
    var tabs = document.getElementsByClassName(tabButtonClass)
    for (var i = 0; i < tabs.length; i++)
    {
        
        if(selected.ariaLabel == tabs[i].ariaLabel)
        {            
            tabs[i].className = "tabButton selected"
            console.log(tabs[i].className)
            game.gameState.currentTab = selected.ariaLabel
        }
        else{
            tabs[i].className = "tabButton"
        }
    }


}

function addTab(text){
    var tabButton = ui.makeElement("div",tabButtonDiv)
    tabButton.className = tabButtonClass
    tabButton.ariaLabel = text
    tabButton.innerHTML = text
    setVisiblity(tabButton,false)
    return tabButton
}

export function init() {
    
    mainDiv = ui.makeElement("div")
    mainDiv.className = "mainFlex"
    if (showdebugborders) mainDiv.style.border = '2px solid green'
    mainDiv.innerHTML = "Test"

    statsDiv = ui.makeElement("div",mainDiv)
    statsDiv.className = "statsFlex"

    rockStats = ui.makeElement("div",statsDiv)
    rockStats.className = "statBox"

    tabButtonDiv = ui.makeElement("div",mainDiv)
    if (showdebugborders) tabButtonDiv.style.border = '2px solid yellow'
    tabButtonDiv.className = "tabButtonFlex"

    rockTabButton = addTab("Rocks")
    setVisiblity(rockTabButton,true)

    upgradeTabButton = addTab("Upgrades")


    ui.AddEventsToClass(tabButtonClass,"mousedown",changeTab)

    for (var i=0; i<10; i++){
        var element = ui.makeElement("div",tabButtonDiv)
        test[i] = element
        test[i].className = tabButtonClass
        test[i].innerHTML = "Stuff-" + i
        element.style.display = "none"
        
    }

    tabDiv = ui.makeElement("div",mainDiv)
    if (showdebugborders) tabDiv.style.border = '2px solid yellow'
    tabDiv.className = "gameArea"
    
    numberTab = ui.makeElement("div",tabDiv)
    if (showdebugborders) numberTab.style.border = '2px solid green'
    numberTab.className = "gameArea"
    
    getRockButton = numberTab = ui.makeElement("div",numberTab)
    if (showdebugborders) getRockButton.style.border = '2px solid red'
    
    getRockButton.addEventListener('mouseup', game.AddManualRocks)
    getRockButton.className = "gameButton"
    getRockButton.innerHTML = "Get Rocks"
}

export function UpdateUI() {
    var currentTab = game.GetTab()
    if (game.gameState.upgradesVisible){
        setVisiblity(upgradeTabButton,true)
    }
    for (let index = 0; index < test.length; index++) {
        var element = test[index];
        if (Math.floor(game.GetRocks() / 10) - 1 > index) {
            setVisiblity(element,true)
        }

        
    }
    
    rockStats.innerHTML = "Rocks:<br >" + game.GetRocks() + "</ br>"
}