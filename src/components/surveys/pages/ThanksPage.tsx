import React, { FunctionComponent } from 'react';

import styles from './../../common/cssModules/common.module.css';

const ThanksPage: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <h5>Thanks! We are happy to receive your replay.</h5>
      <p className={styles.testerTip}>Follow to the main page to observe survey results.</p>
      <img src="/img/thanks-smile.png" width='300' alt="thanks"/>
    </div>
  );
};

export default ThanksPage;
