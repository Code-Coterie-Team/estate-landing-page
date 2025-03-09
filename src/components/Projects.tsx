import { useGetAllData } from "../api";
import { Left, Right } from "../icons";
import { useInView,motion } from "framer-motion";
import { useRef } from "react";


const Projects: React.FC = () => {
  const { data } = useGetAllData();

  const scroll = useRef<HTMLDivElement>(null);

  const itemWidth = 300;
  const scrollLeft = () => {
    if (scroll.current) {
      scroll.current.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scroll.current) {
      scroll.current.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    }
  };


  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  
  const animateItem = {
    hidden :{opacity:0,x:100},
    visible:{opacity:1,x:0,transition:{duration:1}}
  }
  return (
    <motion.div className="w-full flex justify-center "  ref={ref} variants={animateItem} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <div className="w-11/12 p-14 flex flex-col justify-center items-center gap-5 overflow-hidden">
        <div>
          <h1 className="font-bold text-4xl">
            Projects{" "}
            <span className="font-light underline underline-offset-4 decoration-1">
              {" "}
              Compeleted
            </span>
          </h1>
          <p className="text-center max-w-80 text-gray-500 p-2">
            {" "}
            Crafting Spaces, Building Legacies-Explore Our Portfolio
          </p>
        </div>
        <div className="w-full flex justify-end gap-2">
          <button className="p-3 bg-gray-200 rounded" onClick={scrollLeft}>
            <Left className="text-blue-600" />
          </button>
          <button className="p-3 bg-gray-200 rounded" onClick={scrollRight}>
            <Right className="text-blue-600" />
          </button>
        </div>
        <div className="overflow-hidden w-full p-4 flex gap-3" ref={scroll}>
          {data?.map((project, index) => (
            <div className="flex gap-8 flex-shrink-0" key={index}>
              <div className="relative">
                <img
                  src={project.image}
                  alt=""
                  className="pb-12 w-[20rem] h-[25rem] object-fill "
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className=" bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {project.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="px-1">|</span>
                      {project.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
