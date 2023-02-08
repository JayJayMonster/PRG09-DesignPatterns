import { Game } from "../game"
import { Bullet } from "../projectiles/bullet"
import { Tank } from "../tank"
import { Weapon } from "./weapon"

export class BulletWeapon implements Weapon {
    private game: Game
    private tank: Tank
    
    constructor(){
        console.log('created bullet')
    }
    public shoot(): void {
        console.log('shooting bullet')
        this.game.gameObjects.push(new Bullet(this.tank))
    }
}