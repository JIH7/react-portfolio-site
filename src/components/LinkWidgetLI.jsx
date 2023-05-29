const LinkWidgetLI = ({key, text}) => {
  return (
    <a href={text.linkAdress}><li key={key}>{text.linkName}</li></a>
  )
}

export default LinkWidgetLI
