const About: React.FC  = () => {
  return (
    <div className="w-full">
      <div className=" w-full p-14 flex flex-col justify-center items-center gap-5 overflow-hidden">
      <div>
      <h1 className="font-bold text-4xl">
          About{" "}
          <span className="font-light underline underline-offset-4 decoration-1">
            {" "}
            Our Brand
          </span>
        </h1>
        <p className="text-center max-w-80 text-gray-500 p-2">
          {" "}
          Passionate About Properties, Dedicated to Your Vision
        </p>
      </div>

        <div className="flex gap-14 ">
          <img src="/src/assets/about-img.png" alt="" className="w-full max-w-lg "/>
          <div className="flex flex-col p-12 gap-8">
            <div className="grid grid-cols-2 gap-10">
              <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
              </div>
              <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="text-gray-600">Ongoing Projects</p>
              </div>
            </div>
            <p className="max-w-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button className="bg-blue-600 text-white px-8 py-2 rounded w-40">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
