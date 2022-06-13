
class GameState {
    version = "0.0.1"
    number = 0
    numberIncrement = 1
}

var gameState 

export function Load(){
    var defaultState = new GameState()
    if (localStorage.getItem('Save')){
        try{
        gameState = JSON.parse(localStorage.getItem('Save'))
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