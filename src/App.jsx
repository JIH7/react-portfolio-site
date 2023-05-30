import { useEffect, useState } from 'react'
import '../public/main.css'

//Makeshift CMS
import AppList from './AppList'

import Hamburger from './components/Hamburger'
import ScrollableMenu from './components/ScrollableMenu'
import Page from './components/Page'

function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}


function App() {
  const [currentApp, setCurrentApp] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [screenSize, setScreenSize] = useState(getCurrentDimension)

  useEffect(() => {
    const upDateDimension = () => {
      setScreenSize(getCurrentDimension())
    }

    window.addEventListener('resize', upDateDimension())

    return(() => {
      window.removeEventListener('resize', upDateDimension)
    })
  }, [screenSize])

  const onToggle = (id) => {
    setCurrentApp(id)
    setMenuOpen(false)
  }

  return (
    <div className='w-screen h-full md:h-screen | flex flex-row justify-start | bg-darkGray'>
      <Hamburger menuOpen={menuOpen} handleClick={setMenuOpen}/>
      <ScrollableMenu menuOpen={menuOpen} currentApp={currentApp} appList={AppList} onToggle={onToggle}/>
      <Page app={AppList[currentApp]} screenWidth={screenSize.width}/>
    </div>
  )
}

export default App
