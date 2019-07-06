import React, { FunctionComponent } from 'react';
import { serverURL } from '../../utils/config';

type Props = {
  class: string;
}

const GoogleAuthLink: FunctionComponent<Props> = (props: Props) => {
  return (
    <a className={props.class} href={`${serverURL}/auth/google`}>{'Auth via Google'}</a>
  );
};

export default GoogleAuthLink;

