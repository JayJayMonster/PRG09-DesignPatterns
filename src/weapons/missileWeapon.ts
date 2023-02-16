import { Game } from "../game.js"
import { Missile } from "../projectiles/missile.js"
import { Projectile } from "../projectiles/projectile.js"
import { Tank } from "../tank.js"
import { Weapon } from "./weapon.js"

export class MissileWeapon implements Weapon {
    private game: Game
    private tank: Tank
    
    constructor(tank: Tank){
        this.tank = tank;
        console.log('created missile')
    }
    public shoot(): Projectile {
        console.log('shooting missile')
        return new Missile(this.tank)
    }
}