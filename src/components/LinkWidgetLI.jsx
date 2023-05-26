const LinkWidgetLI = ({key, text}) => {
    console.log(text)
  return (
    <a href={text}><li key={key}>{text}</li></a>
  )
}

export default LinkWidgetLI
