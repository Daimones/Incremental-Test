
const TabEnum ={
    NumberTab: "NumberTab"
}

const UpgradeUnlock = 10

class GameState {
    version = "0.0.1"
    rocks = 0
    rockClickIncrement = 1
    tab = TabEnum.NumberTab
    upgradesVisible = false
}


export var gameState 

export function Load(){
    var defaultState = new GameState()
    if (localStorage.getItem('Save')){
        try{
        state = JSON.parse(localStorage.getItem('Save'))
        if (gameState.version != defaultState.version){
            console.log("Version mismatch - " + gameState.version + " - " + defaultState.version)
        }
        }
        catch{
            gameState = defaultState
        }
    }
    else{
        gameState = defaultState
    }
    console.log(gameState.number)
}

export function GetRocks(){
    return gameState.rocks
}


export function AddManualRocks(){
    gameState.rocks = gameState.rocks + gameState.rockClickIncrement
}

export function Save(){
    var stateString = JSON.stringify(gameState)
    localStorage.setItem('Save',stateString)
}

export function GetTab(){
    return gameState.tab
}

export function Update(){
    if(gameState.rocks > UpgradeUnlock) {
        gameState.upgradesVisible = true
    }
}