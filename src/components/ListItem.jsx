const ListItem = ({ appName, onToggle, idKey }) => {
  return (
    <div onClick={() => onToggle(Number(idKey))} className="border-x-2 border-t-2 border-neutral-900 | h-20 w-full | py-4 px-8 | text-white text-3xl truncate | hover:bg-white hover:bg-opacity-5">
      {appName}
    </div>
  )
}

export default ListItem
