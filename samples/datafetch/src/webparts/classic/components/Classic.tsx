import * as React from 'react';
import styles from './Classic.module.scss';
import { IClassicProps } from './IClassicProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IClassicState } from './IClassicState';
import { ICountry } from '../../../common/models/ICountry';

export default class Classic extends React.Component<IClassicProps, IClassicState> {

  private isLoaded: boolean = false;
  constructor(props: IClassicProps) {
    super(props);

    this.state = { countries: [] };
  }

  public componentDidMount() {
    this.props.dataProvider.getCountryItems().then(
      (countries: ICountry[]) => {
        this.setState({ countries });
      }
    );
    this.isLoaded = true;
  }

  public render(): React.ReactElement<IClassicProps> {

    return (
      <div className={styles.classic}>

        <div className={styles.container}>
          <div className={styles.row}>
            <span className={styles.title}>Classic</span>
            <div>
              {this.isLoaded && <ul>{this.state.countries.map(country => <li>{country.Title} - {country.Capital}</li>)}</ul>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
