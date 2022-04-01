import styled from 'styled-components'

const Button = styled.button`
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  text-transform: uppercase;
  min-width: ${({ theme }) => theme.space[5]}px;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radii[2]}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.cyanBlue};
  margin-top: ${({ theme }) => theme.space[3]}px;
  margin-left: ${({ theme }) => theme.space[2]}px;

  &:hover {
      background-color: ${({ theme }) => theme.colors.strongCyan};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.buttonDisabledTextColor};
    background-color: ${({ theme }) => theme.colors.buttonDisabledBackground};
  }
`
export default Button;
