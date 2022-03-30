import styled from 'styled-components'

const Button = styled.button`
  outline: 0;
  border: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: ${({ theme }) => theme.radii[2]}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.cyanBlue};
  margin-top: 24px;
  margin-left: 8px;

  &:hover {
      background-color: ${({ theme }) => theme.colors.strongCyan};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.buttonDisabledTextColor};
    background-color: ${({ theme }) => theme.colors.buttonDisabledBackground};
  }
`
export default Button;
