import HeadShot from '../assets/headshot.jpg'
import LinksWidget from './LinksWidget'


const Page = ({app}) => {
  return (
    <div className="w-full md:w-4/5 p-4 mb-4 | block md:flex">
      <main className="bg-white bg-opacity-5 | sm:pb-4 md:h-full w-full md:w-1/2 | mx-auto md:mx-2 my-4 | px-4 pt-2 | sm:rounded-md  md:rounded">
        <h1>{app.name}</h1>
        <p>{app.description}</p>
      </main>
      <div className="flex flex-col | h-full w-full md:w-1/2 | mx-auto md:mx-2 my-4">
        <img className="w-full h-2/3 | pb-4 | rounded | object-cover object-top" src={app.image} alt="" />
        <LinksWidget links={app.links}/>
      </div>
    </div>
  )
}

export default Page
