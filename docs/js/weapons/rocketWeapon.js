import { Rocket } from "../projectiles/rocket";
export class RocketWeapon {
    constructor() {
        console.log('created rocket');
    }
    shoot() {
        console.log('shooting rocket');
        this.game.gameObjects.push(new Rocket(this.tank));
    }
}
