
const TabEnum ={
    NumberTab: "NumberTab"
}

class GameState {
    version = "0.0.1"
    number = 0
    numberIncrement = 1
    tab = TabEnum.NumberTab
}


var gameState 

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

export function GetNumber(){
    return gameState.number
}


export function IncrementNumber(){
    console.log("Increment")
    gameState.number = gameState.number + gameState.numberIncrement
}

export function Save(){
    var stateString = JSON.stringify(gameState)
    localStorage.setItem('Save',stateString)
}

export function GetTab(){
    return gameState.tab
}