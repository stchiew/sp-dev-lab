import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ButtonsWebPartStrings';
import Buttons from './components/Buttons';
import { IButtonsProps } from './components/IButtonsProps';

export interface IButtonsWebPartProps {
  description: string;
  darkLightMode: boolean;
}

export default class ButtonsWebPart extends BaseClientSideWebPart<IButtonsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IButtonsProps> = React.createElement(
      Buttons,
      {
        description: this.properties.description,
        darkLightMode: this.properties.darkLightMode
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneToggle('darkLightMode', {
                  label: 'Dark mode?'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
