import { GameObject }       from "../gameobject.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { BulletWeapon } from "../weapons/bulletWeapon.js";
import { Ammunition }       from "./ammunition.js";

export class BulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.setWeapon(new BulletWeapon(target))
        }
    }
}