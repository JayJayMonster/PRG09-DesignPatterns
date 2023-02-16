import { Projectile } from "../projectiles/projectile.js";

export interface Weapon {
    shoot():Projectile
}