declare interface IHookWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HookWebPartStrings' {
  const strings: IHookWebPartStrings;
  export = strings;
}
