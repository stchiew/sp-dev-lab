import { IDataProvider } from './IDataProvider';
import { ICountry } from '../models/ICountry';
import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';

export default class SharePointProvider implements IDataProvider {

  public async getCountryItems(): Promise<ICountry[]> {
    const countries: ICountry[] = await sp.web.lists.getByTitle('Countries').items.select("id", "Title", "Capital").get();
    return countries;
  }
}