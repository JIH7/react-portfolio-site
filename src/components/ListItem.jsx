const ListItem = ({ appName, onToggle, idKey, currentApp, key }) => {
  return (
    <div onClick={() => onToggle(Number(idKey))} className={`border-x-2 border-t-2 border-neutral-900 | h-20 w-full | py-4 px-4 | text-white text-3xl truncate | ${currentApp === idKey ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'} | select-none`}>
      {appName}
    </div>
  )
}

export default ListItem
