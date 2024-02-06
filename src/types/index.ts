export interface IWarrior {
  fight(): string | undefined;
  sneak(): string;
}

export interface IWeapon {
  hit(): string;
}

export * from "./camera";
