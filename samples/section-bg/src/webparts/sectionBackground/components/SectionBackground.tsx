import * as React from 'react';
import styles from './SectionBackground.module.scss';
import { ISectionBackgroundProps } from './ISectionBackgroundProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SectionBackground extends React.Component<ISectionBackgroundProps, {}> {
  public render(): React.ReactElement<ISectionBackgroundProps> {
    return (
      <div className={styles.sectionBackground}>
        <div className={styles.sectionOne}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
                <p className={styles.description}>{escape(this.props.description)}</p>
                <a href="https://aka.ms/spfx" className={styles.button}>
                  <span className={styles.label}>Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <h3>Section 2</h3>
          <span>This section is totally devoid of any styles</span>
        </div>
      </div>
    );
  }
}
