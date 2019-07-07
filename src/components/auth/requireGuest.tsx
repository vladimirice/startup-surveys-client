/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { IPropsWithAuthHistory } from '../../interfaces/propsInterfaces';
import { mapToPropsWithAuth } from '../../utils/redux-helper/mapStateToPropsHelper';

export default function requireGuest<P>(ChildComponent: ComponentType<P>): any {
  class ComposedComponent extends Component<P & IPropsWithAuthHistory> {
    public componentDidMount(): void {
      this.redirectLoggedToSurveys();
    }

    public componentDidUpdate(): void {
      this.redirectLoggedToSurveys();
    }

    public render(): JSX.Element {
      return (
        <ChildComponent {...this.props as P & IPropsWithAuthHistory}/>
      );
    }

    private redirectLoggedToSurveys(): void {
      if (this.props.auth) {
        this.props.history.push('/surveys');
      }
    }
  }

  return connect(mapToPropsWithAuth)(ComposedComponent as any);
}
