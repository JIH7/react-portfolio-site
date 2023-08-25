const LinkWidgetLI = ({key, text}) => {
  return (
    <a href={text.linkAdress}><li className="bg-opacity-0 hover:bg-white hover:bg-opacity-5 | px-2 py-1 | rounded | transition-all" key={key}>{text.linkName}</li></a>
  )
}

export default LinkWidgetLI
