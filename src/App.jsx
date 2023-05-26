import { useState } from 'react'
import '../public/main.css'

//Makeshift CMS
import AppList from './AppList'

import ScrollableMenu from './components/ScrollableMenu'
import Page from './components/Page'



function App() {


  return (
    <div className='w-screen h-screen | flex flex-row justify-start | bg-darkGray'>
      <ScrollableMenu appList={AppList}/>
      <Page appList={AppList} currentApp={0}/>
    </div>
  )
}

export default App
