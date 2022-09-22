export type EnergyType = 'mana' | 'stamina';
// https://www.digitalocean.com/community/tutorials/how-to-create-custom-types-in-typescript

export default interface Energy {
  type_: EnergyType,
  amount: number,
}