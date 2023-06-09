import SvgDoubleBed from "@/svgrs/double-bed"
import SvgNoView from "@/svgrs/svgr-no-view"
import { Calendar, LocalTwo } from "@icon-park/react"
import clsx from "clsx"
import moment from "moment"
import Image from "next/image"
import { useState } from "react"
import ImageModal from "./image-modal"


export const Landmarks =({landmarks})=>{
  return (
    <div className="">
      <p className="text-md font-bold">Nearby Landmarks</p>
      <table className="table-auto text-sm text-gray-500">
        <thead>
          <tr>
            <th className="font-normal border-r-[1px] border-b-[1px]  border-gray-400 box-border p-3">Distance</th>
            <th className="font-normal border-b-[1px]  border-gray-400 box-border p-3 text-left">Name of the place</th>
          </tr>
        </thead>
        <tbody>
          {landmarks.map(({distance,placeName},index)=>
            <tr key={index} className="border-gray-400 box-border">
              <td className="border-r-[1px] border-b-[1px]  border-gray-400 box-border p-3">{distance}</td>
              <td className="border-b-[1px]  border-gray-400 box-border p-3">{placeName}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const Cancellations = ({until,after,refund1="100%",refund2="No"})=>{
  const untilDate = moment(until).format("dddd, MMMM d \u25aa h a")
  const afterDate = moment(after).format("dddd, MMMM d \u25aa h a")

  return(
    <div className="flex flex-col max-sm:mt-2 h-max">
      <div className="flex mb-2">
        <div className="bg-green-400 w-2 h-[45px] mr-4 "></div>
        <div className="flex flex-col">
          <div className="text-md">Until {untilDate}</div>
          <div className="text-sm text-green-400">{refund1} refund</div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-red-400 w-2 h-[45px] mr-4"></div>
        <div className="flex flex-col">
          <div className="text-md">After {afterDate}</div>
          <div className="text-sm text-red-400">{refund2} refund</div>
        </div>
      </div>
    </div>
  )
}

export const ImageGrid = ({images,setShowModal,hotelName,address,children,noCol=false})=>{
  
  return(
    <>
      <div className="grid sm:grid-rows-2 sm:grid-flow-col sm:gap-4 w-full h-[250px]">
        <div className="row-span-2 col-span-3 relative">
          <Image src={images[0].image} alt="grid pictures" fill className="rounded-md"/>
          <div className="sm:hidden z-0 absolute w-full h-full flex justify-center items-center text-4xl text-white font-bold">{images.length}+</div>
          <div className="sm:hidden absolute w-full h-full z-10 bg-black bg-opacity-25 hover:bg-opacity-20" onClick={()=>setShowModal(true)}></div>
        </div>
        {images.slice(1,images.length).map(({image},index)=>
            <div className="max-sm:hidden sm:col-span-2 relative"  key={index}><Image src={image} alt="grid pictures" fill className="rounded-md"/></div>
        )}
      </div>
        <div className={clsx("flex items-start mt-4",{"max-sm:flex-col":!noCol})}>
          <div className="flex flex-col grow">
            <div className="text-xl font-bold">{hotelName}</div>
            <div className="text-sm text-gray-500">{address}</div>
          </div>
          {children}
      </div>
    </>
  )
}

const BedTypePanel = ({bedTypes})=>{
  return(
    <div className="grid sm:grid-cols-3 w-full rounded-md mt-4 overflow-hidden border-[1px] border-gray-200 box-border">
      {bedTypes.map(({image,type,view,ViewIcon,beds,BedIcon,desc},ind)=>
        <div className="flex flex-col p-2 border-[1px] border-gray-200" key={ind}>
          <Image src={image} width="414" height="200" alt=""/>
          <p className="text-md font-bold py-1">{type}</p>
          <div className="flex mb-2">
            <SvgNoView/>
            <p className="text-sm text-gray-400 mr-5">{view}</p>
            <SvgDoubleBed/>
            <p className="text-sm text-gray-400">{beds}</p>
          </div>
          <p className="text-xs text-gray-400">{desc}</p>
        </div>
      )}
    </div>
  )
}

const OptionsList = ({options})=>{
  return(
    <div className="flex flex-col justify-start mt-5">
          <ul className="grid grid-cols-6 gap-2 max-xs:grid-cols-4 md:max-lg:grid-cols-4 mb-5 max-sm:mt-4" >
                {options.map((option,ind)=>{
                    const Icon = option.icon;
                  return( 
                    <li key={ind} className="mx-2 flex flex-col justify-center items-center sm:grow">
                      <div key={ind} className="border-gray-400 border-[1px] rounded-lg px-3 py-2">
                            <Icon size="24" className="stroke-current text-gray-400 "/>
                      </div>
                      <div className="text-gray-400 text-xs mt-1">{option.name}</div>
                    </li>
                    )
                })}
          </ul>
          <div className="flex flex-row-reverse w-full">
            <div className="ml-5 flex flex-col items-center">
              <div className="relative w-12 h-6">
                <div className="absolute z-0 w-10 bg-gray-300 h-5"></div>
                <div className="absolute z-10 top-[-4px] bg-gray-400 rounded-sm w-5 h-7"></div>
              </div>  
              <div className="text-green-800 text-xs pl-1">AC</div>
            </div>
            <div className="ml-5 flex flex-col">
              <LocalTwo size="24" className="stroke-current text-green-800 "/>
              <div className="text-green-800 text-xs">Map</div>
            </div>
          </div>

        </div>
  )
}

export default function Page4Panel1 ({images,hotelName,address,until,after,importantNotes,bedTypes,landmarks,options,checkIn,checkOut}) {
    const [showModal, setShowModal] = useState(false);

    if (images.length<7)throw Error("Not enough images!")

  return(
      <div className="flex flex-col border-[1px] border-gray-200 shadow-2xl py-5 rounded-lg sm:px-10 px-3">
          <ImageModal images={images} showModal={showModal} setShowModal={setShowModal}/>
          <div className="flex">
            <div className="flex flex-col mr-2 mb-2">
              <p className="text-sm text-gray-500">CHECK-IN</p>
              <div className="bg-gray-200 bg-opacity-50 rounded-sm text-green-800 px-2 py-1 flex justify-center">
                <p className="font-bold grow">{moment(checkIn).format("D MMM YYYY")}</p>
                <Calendar className="pt-1"/>
              </div>
            </div>
            <div className="flex flex-col">
            <p className="text-sm text-gray-500">CHECK-OUT</p>
              <div className="bg-gray-200 bg-opacity-50 rounded-sm text-green-800 px-2 py-1 flex justify-center">
                <p className="font-bold grow">{moment(checkOut).format("D MMM YYYY")}</p>
                <Calendar className="pt-1"/>
              </div>
            </div>
          </div>
          
          <ImageGrid images={images}  hotelName={hotelName} address={address} setShowModal={setShowModal}><button className="bg-green-800 text-white px-5 py-2 rounded-md hover:transition-transform hover:scale-110 hover:duration-750">Send Enquiry</button></ImageGrid>

            <div className="flex max-md:flex-col mt-4 grow">
                <div className="flex max-sm:flex-col">
                  <Landmarks landmarks={landmarks}/>
                  <div className="flex flex-col sm:py-0 sm:ml-12 grow">
                    <Cancellations until={until} after={after}/>
                    <div className="text-md font-bold mt-5">Important to note</div>
                    <ul className="text-sm list-disc ml-3">
                      {importantNotes.map((note,index)=>
                        <li className="" key={index}>{note}</li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <OptionsList options={options}/>
                
            </div>

                <BedTypePanel bedTypes={bedTypes}/>
      </div>
  )
}