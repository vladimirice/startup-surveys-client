import React, { FunctionComponent } from 'react';

const ThanksPage: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <h5>Thanks! We are very glad to receive your replay</h5>
      <p style={{fontSize: '14px', backgroundColor: '#80ced6'}}>Follow to the main page to observe survey results</p>
      <img src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_640.png" width='300' alt="thanks"/>
    </div>
  );
};

export default ThanksPage;
