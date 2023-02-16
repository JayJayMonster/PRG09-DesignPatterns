import { Tank } from "../tank.js";
import { BulletWeapon } from "../weapons/bulletWeapon.js";
import { Ammunition } from "./ammunition.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setWeapon(new BulletWeapon(target));
        }
    }
}
