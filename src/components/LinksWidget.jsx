import LinkWidgetLI from "./LinkWidgetLI"

const LinksWidget = ( {links} ) => {
  return (
    <section className="w-full sm:pb-4 md:h-1/3 | px-4 pt-2 | sm:rounded-md md:rounded | bg-white bg-opacity-5">
        <h2 className='text-4xl'>Links</h2>
        <ul>
            {links.map((e, i) => <LinkWidgetLI text={e} key={i} />)}
        </ul>
    </section>
  )
}

export default LinksWidget
