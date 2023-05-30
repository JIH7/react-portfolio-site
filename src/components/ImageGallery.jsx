import { useState } from "react"

import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"

const ImageGallery = ({app}) => {
    const [currentImg, setCurrentImg] = useState(0)

    return (
        <div className="w-full h-96 md:w-1/2 md:h-3/4 | relative | group">
            <button className="w-4 h-12 | group-hover:block | md:opacity-0 group-hover:opacity-100 | rounded | transition-all | absolute | top-40 md:top-64 left-0"><FaChevronLeft /></button>
            <img className="h-full w-full | pb-4 | rounded | object-cover object-top" src={app.image} alt="" />
            <button className="w-4 h-12 | group-hover:block | md:opacity-0 group-hover:opacity-100 | rounded | transition-all | absolute | top-40 md:top-64 right-0"><FaChevronRight /></button>
        </div>
    )
}

export default ImageGallery