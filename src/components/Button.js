import styled from 'styled-components'
import { space, color } from 'styled-system'

const StyledButton = styled.button`
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-transform: uppercase;
  min-width: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii[2]};

  ${space}
  ${color}

  &:hover {
      background-color: ${({ theme }) => theme.colors.strongCyan};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.black.opacityDotTwo};
    background-color: ${({ theme }) => theme.colors.black.opacityDotOne};
    cursor: not-allowed;
  }
`

const Button = (props) => (
  <StyledButton mt={3} ml={2} backgroundColor="cyanBlue" color="white" {...props} />
)

export default Button;
