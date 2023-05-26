import ListItem from "./ListItem"

const ScrollableMenu = ({appList}) => {
    

    return (
        <div className='h-full w-1/5 | overflow-y-scroll'>
            {
                appList.map((el) => (
                    //ToDo: If removing shortName remove this.
                    //If the app has optional shortName paramater, use that to prevent overflow
                    <ListItem appName={el.shortName ? el.shortName : el.name} />
                ))
            }
        </div>
    )
}

export default ScrollableMenu   
