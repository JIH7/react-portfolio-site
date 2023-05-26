const LinkWidgetLI = ({key, text}) => {
  return (
    <a href={text}><li key={key}>{text}</li></a>
  )
}

export default LinkWidgetLI
