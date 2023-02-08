import { Game } from "../game"
import { Rocket } from "../projectiles/rocket"
import { Tank } from "../tank"
import { Weapon } from "./weapon"

export class RocketWeapon implements Weapon {
    private game: Game
    private tank: Tank
    
    constructor(){
        console.log('created rocket')
    }
    public shoot(): void {
        console.log('shooting rocket')
        this.game.gameObjects.push(new Rocket(this.tank))
    }
}