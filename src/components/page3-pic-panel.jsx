import Image from 'next/image'
import React from 'react'

export default function Page3PicPanel({duration,images:{image1,image2,image3,image4,image5,image6},imagesRemaining,desc,startingPrice,date}){
    return (
        <div className="flex flex-col w-full border-[1px] border-gray-200 shadow-2xl px-5 rounded-md bg-repeat mx-2" style={{
            background:"url('/assets/images/back3.png')"
        }}>
            <div className="flex px-12 mt-6">
                <div className="text-green-800 font-bold text-md grow">{duration}</div>
                <button className="text-green-800 font-bold text-sm">Change</button>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 w-full h-[400px] px-10">
                <div className="row-span-2 relative"><Image src={image6} fill className="rounded-md"/></div>
                <div className="col-span-2 relative"><Image src={image2} fill className="rounded-md"/></div>
                <div className="row-span-1 relative"><Image src={image1} fill className="rounded-md"/></div>
                <div className="row-span-1 relative"><Image src={image3} fill className="rounded-md"/></div>
                <div className="col-span-1 relative"><Image src={image4} fill className="rounded-md"/></div>
                <div className="col-span-1 relative overflow-hidden">
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src={image5} fill className="rounded-md overflow-hidden" style={{objectFit:'cover'}}/>
                </div>
                    <div className="absolute w-full h-full z-10">
                        <div className="flex w-full h-full text-4xl text-white font-bold justify-center items-center">+{imagesRemaining}</div> 
                    </div>
                    <div className="absolute w-full h-full bg-slate-900 hover:bg-slate-800 hover:bg-opacity-50 bg-opacity-50 z-20"></div>                
                </div>
            </div>
            <div className="flex w-full px-12">
                <div className="my-8">
                    <div className="text-2xl font-bold text-green-800 w-[70%]">{desc}</div>
                </div>
                <div className="grow"></div>
                <div className="flex flex-col bg-[#C6FBB4] h-full px-4 py-2">
                    <p className="text-green-800 text-sm">Starting from</p>
                    <div className="flex items-end">
                        <p className="text-green-800 font-bold text-6xl mr-4">{"\u20B9"+startingPrice}</p>
                        <p className="text-green-800 text-sm pb-5">per person onwards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
