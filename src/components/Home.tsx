import { useEffect, useState } from "react";
import { Estate, Hamburger } from "../icons";
import { useStore } from "../store/useStore";

interface IHomeProps {
  onNavigateAbout: () => void;
  onNavigateProjects: () => void;
  onNavigateCustomers: () => void;
  onNavigateContact: () => void;
}
const Home: React.FC<IHomeProps> = ({
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCustomers,
  onNavigateContact,
}) => {

  const {setShowModal} = useStore();

  const [translateStyle, setTranslateStyle] = useState({
    transform: "translateY(35%)",
    transition: "transform 3s ease-in-out",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslateStyle({
        transform: "translateY(0%)",
        transition: "transform 3s ease-in-out",
      });
    }, 300);
    return () => clearTimeout(timer);
  },[]);

  
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-home_image bg-cover bg-no-repeat bg-center">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-4 md:px-24">
          <Estate className="text-white" />
          <ul className="hidden md:flex gap-7 text-white font-normal">
            <li className="cursor-pointer hover:text-gray-400">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Home
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateAbout();
                }}
              >
                About
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateProjects();
                }}
              >
                Projects
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateCustomers();
                }}
              >
                Testimonials
              </a>
            </li>
          </ul>
          <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer ">
            Sign up
          </button>
          <Hamburger className="w-7 cursor-pointer md:hidden text-white" onClick={()=>setShowModal(true)}/>
        </div>
      </div>
      <div
        className=" flex flex-col gap-10 justify-center items-center  h-full w-full pt-20"
        style={translateStyle}
      >
        <h2 className="text-xl1 font-semibold text-white leading-none max-w-3xl text-center">
          Explore homes that <br /> fit your dreams
        </h2>
        <div className="flex gap-7">
          <button
            className="border-white border-solid border-[1px] px-8 py-3 rounded text-white font-semibold"
            onClick={onNavigateProjects}
          >
            Projects
          </button>
          <button
            className="bg-blue-500 px-8 py-3 rounded text-white font-semibold "
            onClick={onNavigateContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
