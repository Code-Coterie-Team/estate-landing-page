interface HomeProps {
  onNavigateAbout: () => void;
  onNavigateProjects: () => void;
  onNavigateCustomers: () => void; // Define the type for onNavigate
}
const Home : React.FC<HomeProps> = ({onNavigateAbout, onNavigateProjects, onNavigateCustomers }) => {
  return (
    <div className="h-screen bg-cover bg-home_image bg-center flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full">
            <div className="flex justify-between items-center px-28 py-4">
                <img src="/src/assets/Estate.svg" alt="" />
                <ul className="flex gap-7 text-white font-normal">
                    <li  className="cursor-pointer hover:text-gray-400"><a href="#home">Home</a></li>
                    <li className="cursor-pointer hover:text-gray-400"><a href="#about" onClick={onNavigateAbout}>About</a></li>
                    <li className="cursor-pointer hover:text-gray-400"><a href="#projects" onClick={onNavigateProjects}>Projects</a></li>
                    <li className="cursor-pointer hover:text-gray-400"><a href="#testimonials" onClick={onNavigateCustomers}>Testimonials</a></li>
                </ul>
                <button className="bg-white px-8 py-2 rounded-full cursor-pointer">Sign up</button>
            </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center  h-full w-full mt-20">
          <h2 className="text-xl1 font-semibold text-white leading-none max-w-3xl text-center">Explore homes that <br /> fit your dreams</h2>
          <div className="flex gap-7">
            <button className="border-white border-solid border-[1px] px-8 py-3 rounded text-white font-semibold">Projects</button>
            <button className="bg-blue-500 px-8 py-3 rounded text-white font-semibold ">Contact Us</button>
          </div>
        </div>

    </div>

  )
}

export default Home