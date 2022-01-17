import React from 'react';
import './service/css-imports/index';
import { Wrapper } from './components/wrapper/Wrapper';
import { PageOne } from './pages/page-one/PageOne';
import { GlobalStyle } from './service/styles/global-styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PageOne />
      </Wrapper>

    </>
  );
}

export default App;
