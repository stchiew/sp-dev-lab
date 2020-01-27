import * as React from 'react';

import { IOfficeUiComponentsProps } from './IOfficeUiComponentsProps';
import { PrimaryButton, DefaultButton, CompoundButton } from 'office-ui-fabric-react/lib/Button';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { Customizer } from '@uifabric/utilities/lib/customizations/Customizer';
export default class OfficeUiComponents extends React.Component<IOfficeUiComponentsProps, {}> {
  public render(): React.ReactElement<IOfficeUiComponentsProps> {
    const { semanticColors }: IReadonlyTheme = this.props.themeVariant;
    return (
      <div >

        Container
        <div style={{ background: semanticColors.bodyBackground }}>
          <p>This web part implements an Office UI Framework component which inherits the background and correct colors</p>
          <Customizer settings={{ theme: this.props.themeVariant }} >
            <PrimaryButton>Standard</PrimaryButton>
          </Customizer>
          <CompoundButton primary>Primary</CompoundButton>

        </div>
      </div >
    );
  }
}
