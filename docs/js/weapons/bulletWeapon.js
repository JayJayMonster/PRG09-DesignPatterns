import { Bullet } from "../projectiles/bullet";
export class BulletWeapon {
    constructor() {
        console.log('created bullet');
    }
    shoot() {
        console.log('shooting bullet');
        this.game.gameObjects.push(new Bullet(this.tank));
    }
}
