import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  color: palevioletred;
  background: none;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 4rem;
  min-height: 2.25rem;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  letter-spacing: 0.02857em;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
