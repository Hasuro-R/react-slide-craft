"use client"

import { useEffect, useRef, useState } from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { HighlightTextProps, ParseText } from "../text"
import "./index.css"
import { countLeadingSlashes } from "../../utils/countLeadingSlashes"

export type AutoListProps = {
  // List Items
  // If you want to indent an item, put / in front of it.
  // ex) ["item", "/item2", "//item3"]
  items: string[]

  // Item Text Color
  textColor?: string

  // Item Default Font Size
  defaultFontSize?: string

  // Item Line Height
  lineHeight?: number

  // List Marker
  // "dot" | "number" | "none"
  // Default is dot
  listMarker: ListMarkerKind

  listItemHighlight?: HighlightTextProps | undefined
}

type ListMarkerKind = "dot" | "number" | "none"

export const AutoList = (props: AutoListProps) => {
  const {
    items,
    textColor = "",
    defaultFontSize = "lg",
    lineHeight = 1.6,
    listMarker = "dot",
    listItemHighlight,
  } = props

  const fs = useFontSize()

  const [fontSize, setFontSize] = useState(20)
  const [visibleCount, setVisibleCount] = useState(items.length)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const testDiv = document.createElement('div')
    testDiv.style.position = 'absolute'
    testDiv.style.visibility = 'hidden'
    testDiv.style.pointerEvents = 'none'
    testDiv.style.width = `${container.clientWidth}px`
    testDiv.style.fontFamily = 'inherit'
    testDiv.style.lineHeight = lineHeight.toString()
    testDiv.style.whiteSpace = 'normal'
    testDiv.style.wordWrap = 'break-word'

    document.body.appendChild(testDiv)

    const fitsAtSize = (size: number): { fits: boolean; visible: number } => {
      testDiv.style.fontSize = `${size}px`

      let totalHeight = 0
      let visible = 0
      for (const item of items) {
        testDiv.innerHTML = `<div>${item}</div>`
        const height = testDiv.scrollHeight

        totalHeight += height
        if (totalHeight > container.clientHeight) break
        visible++
      }

      return { fits: visible === items.length, visible }
    }

    const resolveFontSize = (): number => {
      const temp = document.createElement('div')
      temp.style.fontSize = fs(defaultFontSize)
      document.body.appendChild(temp)
      const resolved = parseFloat(getComputedStyle(temp).fontSize)
      document.body.removeChild(temp)
      return resolved
    }

    const resolvedDefaultFontSize = resolveFontSize()

    if (items.length === 0) {
      setFontSize(resolvedDefaultFontSize)
      setVisibleCount(0)
      return
    }

    if (container.clientHeight === 0) return

    const initialCheck = fitsAtSize(resolvedDefaultFontSize)
    if (initialCheck.fits) {
      setFontSize(resolvedDefaultFontSize)
      setVisibleCount(items.length)
    } else {
      let low = 10
      let high = resolvedDefaultFontSize - 1
      let bestFit = 10
      let maxVisible = 0

      while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const {
          fits,
          visible,
        } = fitsAtSize(mid)
        if (fits) {
          bestFit = mid
          maxVisible = visible
          low = mid + 1
        } else {
          high = mid - 1
        }
      }

      setFontSize(bestFit)
      setVisibleCount(maxVisible)
    }

    document.body.removeChild(testDiv)
  }, [items, defaultFontSize])

  return (
    <div
      className="rsc-list-cn"
      ref={containerRef}
    >
      <ul
        className="rsc-ul"
        style={{ fontSize, color: textColor, lineHeight: lineHeight }}
      >
        {items.slice(0, visibleCount).map((item, index) => (
          <li
            className="rsc-li"
            style={{ wordWrap: 'break-word' }}
            key={index}
          >
            <ListMarker
              fontSize={fontSize}
              color={textColor}
              index={index + 1}
              tabCount={countLeadingSlashes(item)}
              kind={listMarker}
            />
            <ParseText
              text={item.replace(/^\/+/, '')}
              spanStyle={{
                ...listItemHighlight?.highlightStyle,
                color: listItemHighlight?.highlightColor,
                fontWeight: listItemHighlight?.highlightFontWeight,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}


const ListMarker = ({
  fontSize, color, index, tabCount, kind,
} : {
  fontSize: number, color: string, index: number, tabCount: number, kind: ListMarkerKind,
}) => {
  if (kind === "none") return

  const tabNum = tabCount % 3 + 1

  return (
    <div
      className="rsc-li-marker"
      style={{
        paddingRight: fontSize / 2,
        marginLeft: fontSize * tabCount,
      }}
    >
      {tabCount > 0 ? (
        <div
          className={`rsc-li-dot-${tabNum}`}
          style={{
            width: fontSize / 3,
            backgroundColor: tabNum !== 3 ? color : "",
            borderColor: color,
          }}
        />
      ) : (
        <>
        {kind === "dot" && (
          <div
            className={`rsc-li-dot-${tabNum}`}
            style={{
              width: fontSize / 3,
              backgroundColor: tabNum !== 3 ? color : "",
            }}
          />
        )}
        {kind === "number" && (
          <p
            className="rsc-li-num"
            style={{
              width: fontSize,
            }}
          >
            {index}.
          </p>
        )}
        </>
      )}
    </div>
  )
}
