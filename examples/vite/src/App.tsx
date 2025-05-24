import { CustomText, HeadlineText, List, SlideBase, SlideCore, TitleText } from 'react-slide-craft'
import './App.css'

function App() {
  const slides = [
    HeadlineSlide,
    ListSlide,
    CustomTextsSlide,
    () => <CustomText text='good' />,
  ]

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SlideCore
        slides={slides}
        baseSlideFrameStyle={{
          backgroundColor: '#404855',
          textColor: 'white',
          cornerRadius: 20,
          padding: '20',
        }}
      />
    </div>
  )
}

function HeadlineSlide() {
  return (
    <HeadlineText text='Hello |World|!' highlightColor='#f0864b' />
  )
}

function ListSlide() {
  const listItems = [
    'react-slide-craft',
    '/Library for creating slides in React',
    '//Created by HASURO',
  ]

  return (
    <SlideBase
      backgroundStyle={{
        gap: '20',
      }}
    >
      <TitleText text='About' />
      <List
        items={listItems}
        listMarker='dot'
        textColor='white'
      />
    </SlideBase>
  )
}

function CustomTextsSlide() {
  return (
    <>
      <CustomText
        size='base'
        text='hello |world|!'
        highlightColor='red'
      />
      <CustomText
        size='lg'
        text='happy |happy| happy'
      />
      <CustomText
        size='30'
        text='happy |happy| happy'
      />
    </>
  )
}

export default App
