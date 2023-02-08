import { Game } from "../game"
import { Missile } from "../projectiles/missile"
import { Tank } from "../tank"
import { Weapon } from "./weapon"

export class MissileWeapon implements Weapon {
    private game: Game
    private tank: Tank
    
    constructor(){
        console.log('created missile')
    }
    public shoot(): void {
        console.log('shooting missile')
        this.game.gameObjects.push(new Missile(this.tank))
    }
}