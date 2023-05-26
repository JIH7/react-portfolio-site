import { useState } from 'react'
import '../public/main.css'

//Makeshift CMS
import AppList from './AppList'

import Hamburger from './components/Hamburger'
import ScrollableMenu from './components/ScrollableMenu'
import Page from './components/Page'



function App() {
  const [currentApp, setCurrentApp] = useState(0)

  return (
    <div className='w-screen h-screen | flex flex-row justify-start | bg-darkGray'>
      <Hamburger />
      <ScrollableMenu appList={AppList} onToggle={setCurrentApp}/>
      <Page app={AppList[currentApp]}/>
    </div>
  )
}

export default App
