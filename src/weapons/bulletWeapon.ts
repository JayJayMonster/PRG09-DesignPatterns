import { Game } from "../game.js"
import { Bullet } from "../projectiles/bullet.js"
import { Projectile } from "../projectiles/projectile.js"
import { Tank } from "../tank.js"
import { Weapon } from "./weapon.js"

export class BulletWeapon implements Weapon {
    private tank: Tank
    private game: Game
    
    constructor(tank: Tank){
        console.log('created bullet')
        this.tank = tank
    }
    public shoot(): Projectile {
        console.log('shooting bullet')
        return new Bullet(this.tank)
    }
}