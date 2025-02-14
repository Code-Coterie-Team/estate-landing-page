import React from "react";

const Contact:React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 p-14 flex flex-col justify-center items-center gap-10 overflow-hidden">
        <div>
          <h1 className="font-bold text-4xl">
            Contact{" "}
            <span className="font-light underline underline-offset-4 decoration-1">
              {" "}
              With US
            </span>
          </h1>
          <p className="text-center max-w-80 text-gray-500 p-2">
            {" "}
            Ready to Make a Move? Let’s Build Your Future Together
          </p>
        </div>
        <form className="grid grid-cols-2 gap-4 w-8/12">
            <div className="flex flex-col gap-2">
            <label className="text-gray-600">Your Name</label>
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded py-3 px-4" required />
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-gray-600">Your Email</label>
            <input type="text" placeholder="Your Email" className="border border-gray-300 rounded py-3 px-4" required />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
            <label className="text-gray-600">Message</label>
             <textarea placeholder="Message" name="" id="" className="border border-gray-300 resize-none p-3 h-48 rounded"></textarea>
            </div>
            <button className="bg-blue-600 text-white py-2 px-12 rounded justify-self-center col-span-2">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
