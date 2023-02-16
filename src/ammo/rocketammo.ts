import { GameObject }       from "../gameobject.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { RocketWeapon } from "../weapons/rocketWeapon.js";
import { Ammunition }       from "./ammunition.js";

export class RocketAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-rocket", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.setWeapon(new RocketWeapon(target))
        }
    }
}