import Slider from './components/Slider/Slider'
import xlow from './assets/xlow-branco.png'

const arrayImagens = [
  {
    url: xlow,
    alt: 'Image 1',
    link: '#',
  },
  {
    url: xlow,
    alt: 'Image 2',
    link: '#',
  },
  {
    url: xlow,
    alt: 'Image 3',
    link: '#',
  },
  {
    url: xlow,
    alt: 'Image 4',
    link: '#',
  },
]

function App() {
  return (
    <>
      <Slider images={arrayImagens} />
    </>
  )
}

export default App
