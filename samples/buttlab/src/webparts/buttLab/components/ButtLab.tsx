import * as React from 'react';
import styles from './ButtLab.module.scss';
import { IButtLabProps } from './IButtLabProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton } from 'office-ui-fabric-react';

export default class ButtLab extends React.Component<IButtLabProps, {}> {
  public render(): React.ReactElement<IButtLabProps> {
    return (
      <div className={styles.buttLab}>
        <div className={styles.container}>
          <div className={styles.row}>
            <span>Welcome to SharePoint</span>
            <DefaultButton text="Standard" />
          </div>
        </div>
      </div>
    );
  }
}
