import * as React from 'react';
import styles from './DivButton.module.scss';
import { IDivButtonProps } from './IDivButtonProps';

import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

export default function HelloWorld(props: IHelloWorldProps) {
  return (
    <div className={styles.btnCell}>
      <div style="margin: 0px 10px 14px; position: relative;">
        <div style="width: 286px;">
          <a class="ButtonCard root-152" role="listitem"
            aria-label="Johor Bahru.25 Mar 2020 3:00PM - 4:45PM MYT "
            href="/sites/AppLab/SitePages/AirMini.aspx" target="_self"
            data-is-focusable="true" data-is-focused-in="false"
            data-interception="propagate">
            <div class="content-151" data-automation-id="button-card">
              <div class="thumbnail-148">
                <FontIcon iconName="TrainSolid" className={iconClass} />
              </div>
              <div class="textArea-150">
                <div class="labelTextWrapper-153">
                  <div class="lessText_61b7e382" data-automation-id="less-text">Johor Bahru</div>
                </div>
                <div class="descriptionTextWrapper-154">
                  <div class="lessText_61b7e382" data-automation-id="less-text">25 Mar 2020 3:00PM - 4:45PM MYT</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}