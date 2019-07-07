/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { mapToPropsWithAuth } from '../../utils/redux-helper/mapStateToPropsHelper';
import { IPropsWithAuthHistory } from '../../interfaces/propsInterfaces';

export default function requireAuth<P>(ChildComponent: ComponentType<P>): any {
  class ComposedComponent extends Component<IPropsWithAuthHistory & P> {
    public componentDidMount(): void {
      this.redirectGuestToMainPage();
    }

    public componentDidUpdate(): void {
      this.redirectGuestToMainPage();
    }

    private redirectGuestToMainPage(): void {
      if (this.props.auth === false) {
        this.props.history.push('/');
      }
    }

    public render(): JSX.Element {
      return <ChildComponent {...this.props as P & IPropsWithAuthHistory}/>;
    }
  }

  return connect(mapToPropsWithAuth)(ComposedComponent as any);
}
