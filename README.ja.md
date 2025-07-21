<p align='center'>
  <img src="https://github.com/user-attachments/assets/67d62b2a-7bc4-4e1e-b59f-75d9c030e711" />
</p>

# React Slide Craft
ReactSlideCraftは、Reactで簡単にスライドを作成できるUIライブラリです。

## インストール
```sh
npm i react-slide-craft
# or
yarn add react-slide-craft
# or
pnpm add react-slide-craft
```

## 使い方
使い方は簡単で、下記のようにアプリケーショントップで`SlideCore`を呼び出し、スライド（関数コンポーネント）の配列を渡すだけです。
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

## 特徴
- スライドの配列を渡すだけでWeb上にスライドを作成できる仕組みを提供
- 矢印キーでのスライド切り替え & ボタンでの切り替えも可能
- 多様なスライドテンプレートを用意
- 適切なサイズがあればどんな表示サイズでも比率を変えずに表示が可能
- `|`で囲んだ文字列をテキストコンポーネントに渡すと、指定のスタイルで強調
- 文字列を渡すだけで適切な表示を調整するList

## 詳しい使い方
### スライドのベーススタイルを定義
デフォルトのスライドスタイルを定義できます。
下記のように`SlideCore`の`baseSlideStyle`へスライドのスタイルを渡すことで可能です。
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

### スライド内でテキストを使用する
スライド内でテキストを使用する際には、用意されているテキストコンポーネントを使用してください。また、用意されているテキストコンポーネントではなくカスタマイズして使用する場合には、下記のように`CustomeText`を使用してください。

`size`に指定する値はstringで、数字を渡すようにしてください。
```tsx
<CustomText
  size="20"
  text="hello"
/>
```

### 自作のスライドテンプレートを作成する
用意されているテンプレートだけではなく、自身でスライドを作成したいユースケースもあると思います。その際には、下記のように`SlideBase`を使用してコンポーネントをラップしてください。
> [!CAUTION]
> スライドを自作する際は、レイアウトが崩れないよう必ず`SlideBase`でラップするようにしてください
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

もし、自作のスライドを適用する際に`SlideCore`で定義したベーススタイルを一部適用したくない場合には、下記のように`SlideCore`の`slides`にわたす際に`genSlideObject`で作成したオブジェクトを配列に加えてください。
```tsx
const App = () => {
  const slides = [
    ComponentA,
    genSlideObject(CustomSlide) // optionsのisBaseStyleでベーススタイルを切り替え
  ]

  return (
    <SlideCore
      slides={slides}
    />
  )
}
```

## Components
Componentsの詳細は[こちらから](https://hasuro-r.github.io/react-slide-craft/?path=/docs/components-slidecore--docs)

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
- Codeblock

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
