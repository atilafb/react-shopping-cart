import styled from 'styled-components'

const Header = ({tagName, ...otherProps}) =>  {
  const Tag = tagName;

    return <Tag {...otherProps}/>
}

const Text = styled(Header)`
  text-align: ${props => props.align};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
`
export default Text;
