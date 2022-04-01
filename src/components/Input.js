import styled from 'styled-components'

const Input = styled.input`
  font: inherit;
  padding: ${({ theme }) => theme.space[1]}px 0 ${({ theme }) => theme.space[1]}px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  box-sizing: content-box;
  background: none;
  margin: 0;
  min-width: 0;
  width: 100%;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  &: focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.cyanBlue};
    outline: 0;
  }
`
export default Input;
