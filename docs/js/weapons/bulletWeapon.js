import { Bullet } from "../projectiles/bullet.js";
export class BulletWeapon {
    constructor(tank) {
        console.log('created bullet');
        this.tank = tank;
    }
    shoot() {
        console.log('shooting bullet');
        return new Bullet(this.tank);
    }
}
