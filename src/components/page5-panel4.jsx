import { Size } from '../constants/size';
import { useMediaQuery } from '../hooks/media-query';
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Page5Panel4({images,iwidth=300,iheight=500}){
    const isMd = useMediaQuery(0,Size.md);
    const [showModal, setShowModal] = useState(false);
  return (
    <ul className="grid grid-cols-2 max-md:grid-cols-1 grid-rows-2 p-5 bg-white gap-4 border-[1px] border-gray-100 shadow-lg rounded-md">
        {images.map(({image},index)=>
          <li className="relative h-[300px] lg:h-[250px] sm:min-w-[350px] overflow-hidden" key={index}>
              <Image src={image} fill className="object-fit" alt="" key={index} /> 
          </li>
         )}
    </ul>
  )
}
