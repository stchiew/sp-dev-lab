import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls';

import * as strings from 'PropertyPaneWebPartStrings';
import PropertyPane from './components/PropertyPane';
import { IPropertyPaneProps } from './components/IPropertyPaneProps';

export interface IPropertyPaneWebPartProps {
  description: string;
  numberValue: number;
}

export default class PropertyPaneWebPart extends BaseClientSideWebPart<IPropertyPaneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPropertyPaneProps> = React.createElement(
      PropertyPane,
      {
        description: this.properties.description,
        numberValue: this.properties.numberValue
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
                })
              ]
            }
          ]
        },
        {
          header: {
            description: "Page 2 - pnp controls"
          },
          groups: [
            {
              groupName: "Group 1",
              groupFields: [
                PropertyFieldNumber('numberValue', {
                  key: 'numberValue',
                  description: "Number field description",
                  maxValue: 10,
                  minValue: 0,
                  label: 'Number value only'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
