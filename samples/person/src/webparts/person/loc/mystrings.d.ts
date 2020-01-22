declare interface IPersonWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'PersonWebPartStrings' {
  const strings: IPersonWebPartStrings;
  export = strings;
}
