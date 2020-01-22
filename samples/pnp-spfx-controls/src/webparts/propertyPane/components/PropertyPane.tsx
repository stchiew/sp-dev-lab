import * as React from 'react';
import styles from './PropertyPane.module.scss';
import { IPropertyPaneProps } from './IPropertyPaneProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PropertyPane extends React.Component<IPropertyPaneProps, {}> {
  public render(): React.ReactElement<IPropertyPaneProps> {
    return (
      <div className={styles.propertyPane}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <ul>
                <li>{this.props.numberValue}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
