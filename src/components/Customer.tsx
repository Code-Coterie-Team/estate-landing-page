import { useInView,motion } from "framer-motion";
import { useRef } from "react";
import Persons from "./persons";

const Customer : React.FC = () => {
  const ref = useRef(null);


  const isInView = useInView(ref, { amount: 0.1 });
  
  const animateItem = {
    hidden :{opacity:0,x:100},
    visible:{opacity:1,x:0,transition:{duration:1}}
  }
  return (
    <motion.div className="w-full flex justify-center " ref={ref} variants={animateItem} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <div className="w-10/12 p-14 flex flex-col justify-center items-center gap-5 overflow-hidden">
        <div>
          <h1 className="font-bold text-4xl">
            Customer{" "}
            <span className="font-light underline underline-offset-4 decoration-1">
              {" "}
              Testimonials
            </span>
          </h1>
          <p className="text-center max-w-80 text-gray-500 p-2">
            {" "}
            Real Stories from Those Who Found Home with Us
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-8">
         <Persons image="/profile_img_1.png" name="Donald Jackman"  position="Marketing Manager"/>
         <Persons image="/profile_img_2.png" name="Richard Nelson" position="UI/UX Designer"/>
         <Persons image="/profile_img_3.png" name="James Washington" position="Co-Founder"/>
        </div>
      </div>
    </motion.div>
  );
};

export default Customer;
