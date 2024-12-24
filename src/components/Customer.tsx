const Customer = () => {
  return (
    <div className="w-full flex justify-center ">
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
          <div className="px-8 py-12 flex flex-col items-center border shadow-lg gap-3">
            <img src="/src/assets/profile_img_1.png" alt="" />
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">Donald Jackman</p>
              <p className="text-sm text-gray-500">Marketing Manager</p>
            </div>
            <div className="flex gap-1">
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
            </div>
            <p className="text-gray-600 text-center">
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched
            </p>
          </div>
          <div className="px-8 py-12 flex flex-col items-center border shadow-lg gap-3">
            <img src="/src/assets/profile_img_2.png" alt="" />
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">Richard Nelson</p>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
            <div className="flex gap-1">
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
            </div>
            <p className="text-gray-600 text-center">
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched
            </p>
          </div>
          <div className="px-8 py-12 flex flex-col items-center border shadow-lg gap-3">
            <img src="/src/assets/profile_img_3.png" alt="" />
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">James Washington</p>
              <p className="text-sm text-gray-500">Co-Founder</p>
            </div>
            <div className="flex gap-1">
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
              <img src="/src/assets/stars.svg" alt="" />
            </div>
            <p className="text-gray-600 text-center">
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
