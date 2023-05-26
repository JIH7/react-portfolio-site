import ListItem from "./ListItem"

const ScrollableMenu = ({appList, onToggle}) => {
    

    return (
        <div className='h-full w-1/5 | overflow-y-scroll | hidden md:block'>
            {
                appList.map((el, i) => (
                    //ToDo: If removing shortName remove this.
                    //If the app has optional shortName paramater, use that to prevent overflow
                    <ListItem appName={el.shortName ? el.shortName : el.name} onToggle={onToggle} idKey={i}/>
                ))
            }
        </div>
    )
}

export default ScrollableMenu   
