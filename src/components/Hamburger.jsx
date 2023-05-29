const Hamburger = ({menuOpen, handleClick}) => {


  return (
    <div onClick={() => handleClick(!menuOpen)} className='bg-white bg-opacity-5 hover:bg-opacity-10 | fixed top-4 right-8 | h-16 w-16 | px-4 py-5 | rounded-md | flex flex-col justify-between md:hidden | '>
      <div className={`w-full h-1 | bg-white transition-all duration-300 relative ${menuOpen ? 'rotate-45 top-3' : ''}`}></div>
      <div className={`w-full h-1 | bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
      <div className={`w-full h-1 | bg-white transition-all duration-300 relative ${menuOpen ? '-rotate-45 bottom-2' : ''}`}></div>
    </div>
  )
}
export default Hamburger
