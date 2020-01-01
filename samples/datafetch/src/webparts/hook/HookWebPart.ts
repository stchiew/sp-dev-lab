import { IDataProvider } from './../../common/provider/IDataProvider';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HookWebPartStrings';
import Hook from './components/Hook';
import { IHookProps } from './components/IHookProps';
import MockProvider from '../../common/provider/MockProvider';

export interface IHookWebPartProps {
  description: string;
  dataProvider: IDataProvider;
}

export default class HookWebPart extends BaseClientSideWebPart<IHookWebPartProps> {
  private _dataProvider: IDataProvider;

  protected onInit(): Promise<void> {
    if (DEBUG && Environment.type === EnvironmentType.Local) {
      this._dataProvider = new MockProvider();
    } else {
      // TODO add SharePoint provider
    }
    this.properties.dataProvider = this._dataProvider;
    return super.onInit();
  }

  public render(): void {

    ReactDom.render(React.createElement(Hook, this.properties), this.domElement);
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
        }
      ]
    };
  }
}
