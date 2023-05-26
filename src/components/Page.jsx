import HeadShot from '../assets/headshot.jpg'
import LinksWidget from './LinksWidget'


const Page = ({appList, currentApp}) => {
  return (
    <div className="w-4/5 p-4 | flex">
      <main className="bg-white bg-opacity-5 | h-full w-1/2 | mx-2 my-4 | px-4 pt-2 | rounded">
        <h1>{appList[currentApp].name}</h1>
        <p>{appList[currentApp].description}</p>
      </main>
      <div className="flex flex-col | h-full w-1/2 | mx-2 my-4">
        <img className="w-full h-2/3 | pb-4 | rounded | object-cover object-top" src={appList[currentApp].image} alt="" />
        <LinksWidget links={appList[currentApp].links}/>
      </div>
    </div>
  )
}

export default Page
