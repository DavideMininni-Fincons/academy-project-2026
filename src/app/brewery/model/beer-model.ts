
export interface Beer {
  id: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  createdDate: Date;
  lastModifiedDate: Date;
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
