import { CommonCircleButton } from "./common/CommonCircleButton"
import arrowRight from "../../../assets/arrow-right.svg"
import arrowLeft from "../../../assets/arrow-left.svg"
import "./index.css"

export type SlideButtonProps = {
  currentNumber: number
  totalCount: number
  isShowIndex?: boolean
  handleBack: () => void
  handleNext: () => void
}

export const SlideButton = (props: SlideButtonProps) => {
  const {
    currentNumber = 1,
    totalCount,
    isShowIndex = false,
    handleBack,
    handleNext
  } = props

  return (
    <div className="slide-btn-cn">
      <CommonCircleButton
        icon={<img src={arrowLeft} />}
        onClick={handleBack}
        isDisabled={currentNumber === 1}
      />
      {isShowIndex && (
        <p className="slide-btn-index">
          {currentNumber}
          <span>/</span>
          {totalCount}
        </p>
      )}
      <CommonCircleButton
        icon={<img src={arrowRight} />}
        onClick={handleNext}
        isDisabled={currentNumber === totalCount}
      />
    </div>
  )
}
