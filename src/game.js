import Decimal from "break_eternity.js"

var gameName = "D-inc"

const TabEnum ={
    NumberTab: "NumberTab"
}

const defaultState = {
    version: "0.0.4",

    //Status
    tab: TabEnum.NumberTab,
    upgradesVisible: false,
    
    //Rocks
    rocks: new Decimal(0),
    rockClickIncrement: 1

}



const UpgradeUnlock = 10

export var gameState 

export function Load(){
    gameState = Object.create(defaultState)
    let properties = Object.getOwnPropertyNames(defaultState)
    let encodedSave = localStorage.getItem(gameName)
    console.log(encodedSave)
    if (encodedSave){
        try{
            let state = JSON.parse(atob(encodedSave))
            if (state.version != defaultState.version){
                console.log("Version mismatch - " + state.version + " - " + defaultState.version)
            }
            for(var i = 0; i < properties.length;i++){
                var prop = properties[i]
                if(prop != "version"){                
                    if (state[prop]){
                        gameState[prop] = state[prop]
                    }

                }

            }
        }
        catch(e){
            console.error("Exception Thrown",e.stack)
            console.log("exception")
        }
    }
    else{
        gameState = defaultState
    }
    console.log(gameState)
}

export function GetRocks(){
    return gameState.rocks
}


export function AddManualRocks(){

    // let num = new Decimal()
    // num.add()
    gameState.rocks = gameState.rocks.add(gameState.rockClickIncrement) 
}

export function Save(){
    let stateString = btoa(JSON.stringify(gameState))
    localStorage.setItem(gameName,stateString)
    //var notification = new Notification("Saving")
    console.log("Saved")
}

export function GetTab(){
    return gameState.tab
}

export function Update(){
    if(gameState.rocks > UpgradeUnlock) {
        gameState.upgradesVisible = true
    }
}