import { JSX } from "react"
import "./index.css"

export type CommonCircleButtonProps = {
  backgroundColor?: string | null
  icon?: JSX.Element | null
  isDisabled?: boolean
  onClick: () => void
}

export const CommonCircleButton = (props: CommonCircleButtonProps) => {
  const {
    backgroundColor,
    icon,
    isDisabled = false,
    onClick,
  } = props

  return (
    <button
      className="circle-btn"
      style={{ backgroundColor: backgroundColor ?? "" }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
