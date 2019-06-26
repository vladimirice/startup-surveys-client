import React, { Component } from 'react';
import { connect } from 'react-redux';
import Config from '../utils/config';
import { Link } from 'react-router-dom';

type HeaderProps = { auth: any };

class Header extends Component<HeaderProps> {
  renderLogin = () => {
    if (this.props.auth) {
      return <li><a href={Config.getBackendUrl() + '/auth/logout'}>Log out</a></li>
    }

    return <li><a href={Config.getBackendUrl() + '/auth/google'}>Auth via Google</a></li>;
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
