// Write your code here
import {Container1, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientItems, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientItems

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <Container1>
      <CustomButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </CustomButton>
    </Container1>
  )
}

export default GradientDirectionItem
