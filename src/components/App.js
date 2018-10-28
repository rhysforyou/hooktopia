import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Counter from './Counter';
import usePreferredColorScheme from '../hooks/usePreferredColorScheme';

const DarkBaseline = createGlobalStyle`
  html, body, :root {
    background-color: #303030;
    color: #fff;
  }
`;

const LightBaseline = createGlobalStyle`
  html, body, :root {
    background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Container = styled.main`
  margin: auto;
  padding: 1rem;
  max-width: 32rem;
`;

const App = () => {
  const preferredColorScheme = usePreferredColorScheme();

  return (
    <Container>
      {preferredColorScheme === 'dark' ? <DarkBaseline /> : <LightBaseline />}
      <h1>Hello, React 16.7 (with hooks!)</h1>
      <Counter />
    </Container>
  );
};

export default App;
