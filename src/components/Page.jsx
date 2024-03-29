import { useState } from 'react'

import LinksWidget from './LinksWidget'
import ImageGallery from './ImageGallery'

import { FaPlay } from 'react-icons/fa'

const Page = ({app}) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded)
  }

  return (
    <div className="w-full md:w-4/5 p-4 mb-4 sm:mx-auto | flex flex-col md:flex-wrap justify-start md:justify-between">

      <ImageGallery app={app}/>
      <LinksWidget className links={app.links}/>

      <main className="bg-white bg-opacity-5 | sm:pb-4 md:h-full w-full md:w-1/2 | mx-auto md:mx-2 mb-4 md:mb-0 | px-4 pt-2 pb-2 md: pb-0 | sm:rounded-md  md:rounded | transition-all | order-first md:order-none">
        <h1 className='text-2xl md:text-4xl | flex'>{app.name}
          <div onClick={toggleDescription} className={`h-8 w-8 | md:hidden | relative | transition-all duration-300 delay-75 | ${descriptionExpanded ? '-rotate-90' : 'rotate-90'}`}><FaPlay/></div>
        </h1>
        <p className={`${descriptionExpanded ? '' : 'hidden'} md:block || display-linebreak`}>{app.description}</p>
      </main>
    </div>
  )
}

export default Page
