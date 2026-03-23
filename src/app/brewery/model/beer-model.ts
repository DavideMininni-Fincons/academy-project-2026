export interface Beer {
  beerId: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  quantityOnHand: number;
  createdDate: Date;
  lastModifiedDate: Date;
  version: number;
}

export enum BeerStyle {
  ALE = 'ALE',
  GOSE = 'GOSE',
  IPA = 'IPA',
  LAGER = 'LAGER',
  PALE_ALE = 'PALE_ALE',
  PILSNER = 'PILSNER',
  PORTER = 'PORTER',
  SAISON = 'SAISON',
  STOUT = 'STOUT',
  HEAT = 'HEAT',
  WHEAT = 'WHEAT'
}
