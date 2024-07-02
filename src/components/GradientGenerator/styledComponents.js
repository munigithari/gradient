// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
 background-image : linear-gradient($(props => props.gradientValue));
min-height : 100vh;
display : flex;
flex-direction : column;
justify-content : center;
`

export const AppContainer = styled.div``

export const MiddleContainer = styled.ul``

export const Heading = styled.h1``
export const Paragraphing = styled.p``
export const TextContent = styled.p``
export const FormContainer = styled.div``
export const CustomValue = styled.p``
export const CustomInput = styled.input``
export const ButtonContainer = styled.button``
