import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styles from '../../common/cssModules/common.module.css';

const ThanksPage: FunctionComponent = (): JSX.Element => (
  <div>
    <h5>Thanks! We are happy to receive your replay.</h5>
    <p className={styles.testerTip}>Follow to the <Link to="/surveys">main page</Link> to observe survey results.</p>
    <img src="/img/thanks-smile.png" width='300' alt="thanks"/>
  </div>
);

export default ThanksPage;
