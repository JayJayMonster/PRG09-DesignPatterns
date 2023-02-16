import { Missile } from "../projectiles/missile.js";
export class MissileWeapon {
    constructor(tank) {
        this.tank = tank;
        console.log('created missile');
    }
    shoot() {
        console.log('shooting missile');
        return new Missile(this.tank);
    }
}
