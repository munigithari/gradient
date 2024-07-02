import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  AppContainer,
  FormContainer,
  TextContent,
  MiddleContainer,
  CustomValue,
  CustomInput,
  ButtonContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    color1Input: '#8ae323',
    color2Input: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerateForm = () => {
    const {activeGradientDirection, color1Input, color2Input} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${color1Input}, ${color2Input}`,
    })
  }

  onChangeColor1Input = event => {
    this.setState({color1Input: event.target.value})
  }

  onChangeColor2Input = event => {
    this.setState({color2Input: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {activeGradientDirection, color1Input, color2Input, gradientValue} = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <AppContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <FormContainer onSubmit={this.onGenerateForm}>
            <TextContent>Choose Direction</TextContent>
            <MiddleContainer>
              {gradientDirectionsList.map(eachGradientItem => (
                <GradientDirectionItem
                  key={eachGradientItem.directionId}
                  clickGradientDirectionItem={this.clickGradientDirectionItem}
                  gradientItems={eachGradientItem}
                  isActive={eachGradientItem.value === activeGradientDirection}
                />
              ))}
            </MiddleContainer>
            <TextContent>Pick the Colors</TextContent>
            <CustomValue>{color1Input}</CustomValue>
            <CustomInput
              type="color"
              id="label1"
              value={color1Input}
              onChange={this.onChangeColor1Input}
            />

            <CustomValue>{color2Input}</CustomValue>
            <CustomInput
              type="color"
              id="label2"
              value={color2Input}
              onChange={this.onChangeColor2Input}
            />
            <ButtonContainer type="submit">Generate</ButtonContainer>
          </FormContainer>
        </AppContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
