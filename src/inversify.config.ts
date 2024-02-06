import { Container } from "inversify";
import { IWarrior, IWeapon } from "./types";
import { TYPES } from "./constants";
import { Katana, Ninja } from "./entitiy";

const myContainer = new Container();
myContainer.bind<IWarrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<IWeapon>(TYPES.Weapon).to(Katana);

export { myContainer };
