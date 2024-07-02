// Style your elements here
import styled from 'styled-components/macro'

export const CustomButton = styled.button`

color : ${props => (props.isActive ? '#334155' : '#1e293b')}

opacity : ${props => (props.isActive ? 1 : 0.5)}
  
`

export const Container1 = styled.li``
