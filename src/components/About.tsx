import { useInView,motion } from "framer-motion";
import { useRef } from "react";

const About: React.FC  = () => {
const ref = useRef(null);
const isInView = useInView(ref, { amount: 0.1 });

const animateItem = {
  hidden :{opacity:0,x:100},
  visible:{opacity:1,x:0,transition:{duration:1}}
}


  return (
    <motion.div className="w-full" ref={ref} variants={animateItem} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <div className=" w-full p-14 flex flex-col justify-center items-center gap-5 overflow-hidden">
      <div>
      <h1 className="font-bold text-2xl md:text-4xl flex justify-center md:justify-normal">
          About{" "}
          <span className="font-light underline underline-offset-4 decoration-1">
            {" "}
            Our Brand
          </span>
        </h1>
        <p className="text-sm md:text-base text-center max-w-80 text-gray-500 p-2">
          {" "}
          Passionate About Properties, Dedicated to Your Vision
        </p>
      </div>

        <div className=" flex flex-col gap-4 md:flex-row md:gap-14 ">
          <img src="/about-img.png" alt="" className="p-4 md:p-0 w-full max-w-lg "/>
          <div className="flex flex-col p-12 gap-8">
            <div className="grid grid-cols-2 gap-5 md:gap-10">
              <div>
              <p className="text-2xl md:text-4xl font-medium text-gray-800">10+</p>
                <p className="text-sm md:text-base text-gray-600">Years of Excellence</p>
              </div>
              <div>
              <p className="text-2xl md:text-4xl font-medium text-gray-800">12+</p>
              <p className="text-sm md:text-base text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-medium text-gray-800">20+</p>
                <p className="text-sm md:text-base text-gray-600">Mn. Sq. Ft. Delivered</p>
              </div>
              <div>
              <p className="text-2xl md:text-4xl font-medium text-gray-800">25+</p>
              <p className="text-sm md:text-base text-gray-600">Ongoing Projects</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 md:text-base max-w-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button className="bg-blue-600 text-white text-xs px-4 md:px-8 py-2 rounded w-32 md:w-40">Learn more</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
