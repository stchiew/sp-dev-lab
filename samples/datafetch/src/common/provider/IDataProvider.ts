import { ICountry } from '../models/ICountry';


export interface IDataProvider {
  getCountryItems(): Promise<ICountry[]>;
}