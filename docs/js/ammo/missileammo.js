import { Tank } from "../tank.js";
import { MissileWeapon } from "../weapons/missileWeapon.js";
import { Ammunition } from "./ammunition.js";
export class MissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-missile", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setWeapon(new MissileWeapon(target));
        }
    }
}
