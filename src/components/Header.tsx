import React, { Component } from 'react';
import { connect } from 'react-redux';
import { serverURL } from '../utils/config';
import { Link } from 'react-router-dom';
import Payments from './Payments';

type HeaderProps = { auth: any };

class Header extends Component<HeaderProps> {
  renderLogin = () => {
    if (this.props.auth) {
      return [
        <li key="2"><Payments/></li>,
        <li key="1"><a href={serverURL + '/auth/logout'}>Log out</a></li>,
      ];
    }

    return <li><a href={serverURL + '/auth/google'}>Auth via Google</a></li>;
  };


  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Startup surveys
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
