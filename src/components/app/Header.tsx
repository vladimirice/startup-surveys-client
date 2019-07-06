import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleAuthLink from '../common/GoogleAuthLink';
import { serverURL } from '../../utils/config';
import Payments from '../payments/Payments';

type HeaderProps = { auth: any };

class Header extends Component<HeaderProps> {
  renderLogin = () => {
    if (this.props.auth) {
      return [
        <li key="1" style={{margin: '0 10px'}}>credits {this.props.auth.credits}</li>,
        <li key="2"><Payments/></li>,
        <li key="3"><a href={serverURL + '/auth/logout'}>Log out</a></li>,
      ];
    }

    return (
      <li>
        <GoogleAuthLink class=""/>
      </li>
    )
  };


  render() {
    return (
      <nav>
        <div className="nav-wrapper #42a5f5 blue lighten-1">
          <Link to="/" className="left brand-logo" style={{margin: '0 20px'}}>
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

function mapStateToProps(state: any) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Header);
