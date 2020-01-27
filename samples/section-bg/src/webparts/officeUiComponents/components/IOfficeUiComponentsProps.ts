import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface IOfficeUiComponentsProps {
  description: string;
  themeVariant: IReadonlyTheme | undefined;
}
