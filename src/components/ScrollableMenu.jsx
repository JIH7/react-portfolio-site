import ListItem from "./ListItem"

const ScrollableMenu = ({appList, onToggle, menuOpen}) => {
    

    return (
        <div className={`bg-darkGray | fixed md:static | h-full md:w-1/3 lg:w-1/5 | overflow-y-scroll |${menuOpen ? ' left-0' : ' -left-64'} md:block | transition-all ease-in duration-150`}>
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
