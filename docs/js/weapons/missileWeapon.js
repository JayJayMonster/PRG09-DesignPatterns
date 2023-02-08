import { Missile } from "../projectiles/missile";
export class MissileWeapon {
    constructor() {
        console.log('created missile');
    }
    shoot() {
        console.log('shooting missile');
        this.game.gameObjects.push(new Missile(this.tank));
    }
}
