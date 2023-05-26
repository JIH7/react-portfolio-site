import { useState } from 'react'
import '../public/main.css'

//Makeshift CMS
import AppList from './AppList'

import Hamburger from './components/Hamburger'
import ScrollableMenu from './components/ScrollableMenu'
import Page from './components/Page'



function App() {
  const [currentApp, setCurrentApp] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const onToggle = (id) => {
    setCurrentApp(id)
    setMenuOpen(false)
  }

  return (
    <div className='w-screen md:h-screen | flex flex-row justify-start | bg-darkGray'>
      <Hamburger menuOpen={menuOpen} handleClick={setMenuOpen}/>
      <ScrollableMenu menuOpen={menuOpen} currentApp={currentApp} appList={AppList} onToggle={onToggle}/>
      <Page app={AppList[currentApp]}/>
    </div>
  )
}

export default App
