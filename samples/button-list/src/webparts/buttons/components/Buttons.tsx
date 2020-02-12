import * as React from 'react';
import styles from './Buttons.module.scss';
import { IButtonsProps } from './IButtonsProps';
import { CompoundButton, Stack, IStackTokens, IIconProps, IButtonStyles, IIconStyles, IStackStyles, PrimaryButton, Customizer, DefaultButton } from 'office-ui-fabric-react';
//import { Customizer } from '@uifabric/utilities';
import { FontSizes, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
const buttonData = [
  { "Title": "Kuala Lumpur", "Description": "20 Feb 2020 10:00AM - 11:45AM MYT" },
  { "Title": "Sydney", "Description": "21 Feb 2020 10:00AM - 11:45AM MYT" },
  { "Title": "Sydney", "Description": "22 Feb 2020 10:00AM - 11:45AM MYT" },
  { "Title": "Singapore Connexis", "Description": "20 Feb 2020 10:00AM - 11:45AM MYT" },
  { "Title": "Singapore Galaxis", "Description": "20 Feb 2020 10:00AM - 11:45AM MYT" },
  { "Title": "Johor Bahru", "Description": "20 Feb 2020 10:00AM - 11:45AM MYT" },
  { "Title": "Seoul", "Description": "20 Feb 2020 10:00AM - 11:45AM MYT" }
];
const stackTokens: IStackTokens = { childrenGap: 15 };
const primaryCalendar: IIconProps = {
  iconName: 'PrimaryCalendar',
  styles: {
    root: {
      fontSize: FontSizes.large
    }
  }
};
export default class Buttons extends React.Component<IButtonsProps, {}> {
  public render(): React.ReactElement<IButtonsProps> {
    const buttonStyles: IButtonStyles = {
      root: { width: 286, minHeight: 90 },
      label: { fontSize: 15, fontWeight: 400 },
      secondaryText: { fontSize: FontSizes.medium }
    };
    const stackStyles: IStackStyles = {
      root: {
        width: `100%`
      }
    };

    return (
      <div className={styles.buttons}>
        <DefaultButton text="Standard" />
        <div className={styles.container}>

          <Stack horizontal wrap tokens={stackTokens} styles={stackStyles}>
            {
              buttonData.map((btn) =>
                <div className={styles.button} >
                  <CompoundButton
                    secondaryText={btn.Description}
                    iconProps={primaryCalendar}
                    styles={buttonStyles}>{btn.Title}</CompoundButton>
                </div>
              )
            }
          </Stack>
        </div>
      </div>
    );
  }

}
