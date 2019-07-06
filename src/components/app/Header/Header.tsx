import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../../payments/Payments';
import { serverURL } from '../../../utils/config';
import GoogleAuthLink from '../../common/GoogleAuthLink';

import styles from './Header.module.css';
import { AuthType, IUser } from '../../../interfaces/modelInterfaces';
import { IState } from '../../../interfaces/stateInterfaces';

interface HeaderProps {
  auth: AuthType;
}

class Header extends Component<HeaderProps> {
  private renderLogin = (): JSX.Element[] | JSX.Element => {
    if (this.props.auth) {
      const { credits } = (this.props.auth as IUser);

      return [
        <li key="credits-header-li" className={styles.li_margins}>credits {credits}</li>,
        <li key="payments-header-li"><Payments/></li>,
        <li key="logout-header-li"><a href={`${serverURL}/auth/logout`}>Log out</a></li>,
      ];
    }

    return (
      <li>
        <GoogleAuthLink class=""/>
      </li>
    );
  };

  public render(): JSX.Element {
    return (
      <nav>
        <div className="nav-wrapper #42a5f5 blue lighten-1">
          <Link to="/" className={`left brand-logo ${styles.li_margins}`}>
            Surveys
          </Link>
          <ul className="right">
            {this.renderLogin()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state: IState): { auth: AuthType } {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Header);
