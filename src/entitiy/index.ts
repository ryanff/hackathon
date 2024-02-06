import { injectable, inject } from "inversify";
import type { IWarrior, IWeapon } from "../types";
import { TYPES } from "../constants";

@injectable()
class Katana implements IWeapon {
  public hit(): string {
    return "cut";
  }
}

@injectable()
class Ninja implements IWarrior {
  @inject(TYPES.Weapon)
  private _katana: IWeapon;

  public fight() {
    return this._katana.hit();
  }

  public sneak() {
    return "sneak";
  }
}

export { Katana, Ninja };
