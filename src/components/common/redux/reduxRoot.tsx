import { applyMiddleware, createStore, Store } from 'redux';
import React, { FunctionComponent } from 'react';

import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../../../reducers';
import { IStringToAny } from '../../../interfaces/commonInterfaces';

interface Props {
  children:     JSX.Element;
  initialState: IStringToAny;
}

const ReduxRoot: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const store: Store = createStore(
    reducers,
    props.initialState,
    applyMiddleware(reduxThunk),
  );

  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxRoot;
