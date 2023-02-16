import { Rocket } from "../projectiles/rocket.js";
export class RocketWeapon {
    constructor(tank) {
        this.tank = tank;
        console.log('created rocket');
    }
    shoot() {
        console.log('shooting rocket');
        return new Rocket(this.tank);
    }
}
