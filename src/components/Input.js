import styled from 'styled-components'

const Input = styled.input`
  font: inherit;
  letter-spacing: inherit;
  padding: 4px 0 5px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
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
