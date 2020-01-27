import * as React from 'react';
import styles from './Person.module.scss';
import { IPersonProps } from './IPersonProps';
import { PrimaryButton } from 'office-ui-fabric-react';
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/site-users";

export default class Person extends React.Component<IPersonProps, {}> {
  public render(): React.ReactElement<IPersonProps> {
    return (
      <div className={styles.person}>
        <div className={styles.container}>
          <PrimaryButton text="Save user" onClick={this._saveUser} />
        </div>
      </div>
    );
  }

  // Note: for person/group fields, append Id to the column name
  private async _saveUser(): Promise<void> {
    let currentUser = await sp.web.currentUser.get();
    console.log('Id' + currentUser.Id);
    const i = await sp.web.lists.getByTitle('Registration').items.add({
      Title: currentUser.LoginName,
      AttendeeId: currentUser.Id
    });
  }
}
