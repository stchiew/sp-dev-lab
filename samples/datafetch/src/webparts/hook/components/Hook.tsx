import * as React from 'react';
import styles from './Hook.module.scss';

import { escape } from '@microsoft/sp-lodash-subset';
import { IHookWebPartProps } from '../HookWebPart';
import { ICountry } from '../../../common/models/ICountry';

export default function Hook(props: IHookWebPartProps) {
  const initialCountries: ICountry[] = null;
  const [countries, setCountries] = React.useState(initialCountries);
  var content: any = null;
  React.useEffect(() => {
    props.dataProvider.getCountryItems().then(
      countryList => { setCountries(countryList); }
    );
  }, []);

  if (countries === null) {
    content = (<div>No data</div>);
  } else {
    content = (<ul>{countries.map(country => <li>{country.Title}</li>)}</ul>);
  }

  return (
    <div className={styles.hook}>
      <div className={styles.container}>

        <div className={styles.row}>
          <span className={styles.title}>Hooks</span>
          {content}
        </div>
      </div>
    </div>
  );

}
