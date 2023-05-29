import HeadShot from '../assets/headshot.jpg'
import LinksWidget from './LinksWidget'


const Page = ({app}) => {
  return (
    <div className="w-full md:w-4/5 p-4 mb-4 sm:mx-auto | flex flex-col md:flex-wrap justify-between">

      <img className="w-full md:w-1/2 h-3/4 | pb-4 | rounded | object-cover object-top" src={app.image} alt="" />
      <LinksWidget className links={app.links}/>

      <main className="bg-white bg-opacity-5 | sm:pb-4 md:h-full w-full md:w-1/2 | mx-auto md:mx-2 | px-4 pt-2 | sm:rounded-md  md:rounded">
        <h1 className='text-2xl md:text-4xl'>{app.name}</h1>
        <p>{app.description}</p>
      </main>

    </div>
  )
}

export default Page
