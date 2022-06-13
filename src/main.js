import * as ui from './ui.js'
import * as game from './game.js'

function initialize() {
    game.Load()
    ui.init()

}
function Update() {
    game.Update()
    ui.UpdateUI()
}
function Save() {
    game.Save()
}


initialize()

const myTimeout = setInterval(Update, 50);
const mySaveTimeout = setInterval(Save, 5000);