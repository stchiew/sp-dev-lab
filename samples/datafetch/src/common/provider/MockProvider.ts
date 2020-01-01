import { IDataProvider } from './IDataProvider';
import { ICountry } from '../models/ICountry';

export default class MockProvider implements IDataProvider {

  private _countries: ICountry[];

  public async getCountryItems(): Promise<ICountry[]> {

    const response = await fetch('https://my-json-server.typicode.com/stchiew/warehouse/countries');
    return await response.json();
    /**
        return new Promise<ICountry[]>((resolve) => {
          setTimeout(() => resolve(items), 500);
        });
      }
      **/
  }


}
