import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../../actions';
import AppRouter from './AppRouter';
import { IActionFunction } from '../../interfaces/actionsInterfaces';

interface Props {
  fetchCurrentUser: IActionFunction;
}

class App extends Component<Props> {
  public componentDidMount(): void {
    this.props.fetchCurrentUser();
  }

  public render(): JSX.Element {
    return (
      <div>
        <AppRouter/>
      </div>
    );
  }
}

export default connect(null, { fetchCurrentUser })(App);
