interface IInfo{
    image:string,
    name:string,
    position:string,
}
const Persons=({image,name,position}:IInfo)=> {
  return (
    <div className="px-8 py-5 md:py-12 flex flex-col items-center border shadow-lg gap-3">
            <img src={image} alt="" />
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-lg font-medium">{name}</p>
              <p className=" text-xs md:text-sm text-gray-500">{position}</p>
            </div>
            <div className="flex gap-1">
              <img src="/stars.svg" alt="" />
              <img src="/stars.svg" alt="" />
              <img src="/stars.svg" alt="" />
              <img src="/stars.svg" alt="" />
              <img src="/stars.svg" alt="" />
            </div>
            <p className="text-gray-600 text-center text-sm md:text-base">
            From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.
            </p>
          </div>
  )
}

export default Persons