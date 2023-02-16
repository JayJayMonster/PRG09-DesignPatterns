import { Game } from "../game.js"
import { Projectile } from "../projectiles/projectile.js"
import { Rocket } from "../projectiles/rocket.js"
import { Tank } from "../tank.js"
import { Weapon } from "./weapon.js"

export class RocketWeapon implements Weapon {
    private game: Game
    private tank: Tank
    
    constructor(tank: Tank){
        this.tank = tank;
        console.log('created rocket')
    }
    public shoot(): Projectile {
        console.log('shooting rocket')
        return new Rocket(this.tank)
    }
}