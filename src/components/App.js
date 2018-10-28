import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import { DarkBaseline, LightBaseline } from './Baseline';
import usePreferredColorScheme from '../hooks/usePreferredColorScheme';

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
