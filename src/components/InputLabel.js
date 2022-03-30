import styled from 'styled-components'

const MyInputLabel = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
`
export default MyInputLabel;
