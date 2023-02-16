import { Tank } from "../tank.js";
import { RocketWeapon } from "../weapons/rocketWeapon.js";
import { Ammunition } from "./ammunition.js";
export class RocketAmmo extends Ammunition {
    constructor(position) {
        super("ammo-rocket", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setWeapon(new RocketWeapon(target));
        }
    }
}
