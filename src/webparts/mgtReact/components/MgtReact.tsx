import * as React from 'react';
import styles from './MgtReact.module.scss';
import { IMgtReactProps } from './IMgtReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Person } from 'mgt-react';

export default class MgtReact extends React.Component<IMgtReactProps, {}> {
  public render(): React.ReactElement<IMgtReactProps> {
    return (
      <div className={ styles.mgtReact }>
        <Person personQuery="me" />
      </div>
    );
  }
}
