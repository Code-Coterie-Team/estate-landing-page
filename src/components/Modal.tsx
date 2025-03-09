import { useStore } from "../store/useStore"

const Modal = ()=> {
const {setShowModal} = useStore()
  return (
    <div className="w-full h-screen bg-white flex flex-col gap-6">
        <div className="flex justify-end p-4">
            <button onClick={()=>setShowModal(false)}><img src="/closing.svg" alt="close" className="size-5"/></button>
        </div>
        <div className="p-3 flex flex-col justify-center items-center gap-2 font-medium text-sm">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Testimonails</p>
        </div>
        
    </div>
  )
}

export default Modal