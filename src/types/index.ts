export interface IWarrior {
    fight(): string;
    sneak(): string;
}

export interface IWeapon {
    hit(): string
}

export * from './camera'