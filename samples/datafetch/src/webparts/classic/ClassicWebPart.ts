import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ClassicWebPartStrings';
import Classic from './components/Classic';
import { IClassicProps } from './components/IClassicProps';
import { IDataProvider } from '../../common/provider/IDataProvider';
import MockProvider from '../../common/provider/MockProvider';
import { sp } from '@pnp/sp';
import SharePointProvider from '../../common/provider/SharePointProvider';

export interface IClassicWebPartProps {
  description: string;
}

export default class ClassicWebPart extends BaseClientSideWebPart<IClassicWebPartProps> {
  private _dataProvider: IDataProvider;

  protected onInit(): Promise<void> {
    if (DEBUG && Environment.type === EnvironmentType.Local) {
      this._dataProvider = new MockProvider();
    } else {
      // TODO add SharePoint provider
      this._dataProvider = new SharePointProvider();
      sp.setup({ spfxContext: this.context });
    }

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IClassicProps> = React.createElement(
      Classic,
      {
        description: this.properties.description,
        dataProvider: this._dataProvider
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
        }
      ]
    };
  }
}
