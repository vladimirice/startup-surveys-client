import React, { FunctionComponent } from 'react';
import { serverURL } from '../../utils/config';

interface Props {
  class: string;
}

const GoogleAuthLink: FunctionComponent<Props> = (props: Props): JSX.Element => {
  return (
    <a className={props.class} href={`${serverURL}/auth/google`}>{'Auth via Google'}</a>
  );
};

export default GoogleAuthLink;

