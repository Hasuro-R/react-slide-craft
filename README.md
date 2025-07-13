<p align='center'>
  <img src="https://github.com/user-attachments/assets/67d62b2a-7bc4-4e1e-b59f-75d9c030e711" />
</p>

# React Slide Craft
Library for creating slides in React.

<p align='center'>
  English | <a href='./README.ja.md'>日本語</a>
</p>

## Install
```sh
npm i react-slide-craft
# or
yarn add react-slide-craft
# or
pnpm add react-slide-craft
```

## Usage
It is easy to use, just call `SlideCore` at the top of the application and pass an array of slides (function components) as shown below.
```tsx
import { SlideCore } from "react-slide-craft"

const App = () => {
  const slides = [
    ComponentA,
    ComponentB,
  ]

  return (
    <SlideCore
      slides={slides}
    />
  )
}
```

## Features
- Provides a mechanism for creating slides on the Web by simply passing an array of slides
- Slide switching with arrow keys & button switching is also possible
- A variety of slide templates are available
- Can be displayed in any display size with appropriate size without changing the ratio
- When a string enclosed in `|` is passed to a text component, it is emphasized with the specified style
- There is a List that adjusts the display appropriately by simply passing a string

## Detailed Usage
### Define base style for slides
You can define a default slide style.
You can do this by passing the slide style to `baseSlideStyle` of `SlideCore` as shown below.
```tsx
<SlideCore
  slides={slides}
  baseSlideStyle={
    textColor="black"
    backgroundColor="white"
    padding="20 25"
    cornerRadius={20}
  }
/>
```

### Use text in slides
When using text in slides, please use the provided text component. If you would like to use a customized text component instead of the prepared text component, please use `CustomText` as shown below.

The value specified for `size` should be a string, passing a number.
```tsx
<CustomText
  size="20"
  text="hello"
/>
```

### Create your own slide templates
There may be use cases where you want to create your own slides in addition to the templates provided. In that case, please wrap the component using `SlideBase` as shown below.
> [!CAUTION]
> When creating your own slides, be sure to wrap them in `SlideBase` so that the layout will not be corrupted.
```tsx
const CustomSlideTemplate = ({
  children,
  title,
} : {
  children: React.ReactNode,
  title: string,
}) => {
  return (
    <SlideBase>
      <p>{title}</p>
      {children}
    </SlideBase>
  )
}
```

If you do not want to apply some of the base styles defined in `SlideCore` when applying your own slides, add objects created with `genSlideObject` to the array when passing to `slides` in `SlideCore` as shown below.
```tsx
const App = () => {
  const slides = [
    ComponentA,
    genSlideObject(CustomSlide) // Toggle base style with options isBaseStyle
  ]

  return (
    <SlideCore
      slides={slides}
    />
  )
}
```

## Components
[Click here](https://hasuro-r.github.io/react-slide-craft/?path=/docs/components-slidecore--docs) for more information about Components.

### Core
- SlideCore
- SlideBase

### Templates
- CoverSlideTemplate
- TitleAndBodySlideTemplate
- TitleWithBgAndBodySlideTemplate

### Items
- List
- CustomText
- Spacer
- Image
- Container
- FloatContainer
- Row
- Column

### Texts
- HeadlineText
- TitleText
- SubTTitleText
- SectionTitleText
- CaptionText
- QuoteText

## Credit
ReactSlideCraft library is created by HASURO.
- WebSite : https://hasuro.com
- Twitter : [@HASURO_dev](https://x.com/HASURO_dev)

