import { Logo } from "../../public";

interface IFooterProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
}
const Footer: React.FC<IFooterProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateContact,
}) => {
  return (
    <div className="w-full bg-gray-900 pt-10 px-10 flex flex-col items-center gap-12">
      <div className="grid grid-cols-3 gap-10  w-10/12">
        <div className=" flex flex-col gap-2 ">
          <Logo className="w-[131px] text-" />
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className=" flex flex-col gap-2 px-10 ">
          <p className="text-white font-bold">Company</p>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-400 ">
              <a
                href="#home"
                className="hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
              >
                Home
              </a>
            </li>
            <li className="text-gray-400 ">
              <a
                href="#about"
                className="hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateAbout();
                }}
              >
                About us
              </a>
            </li>
            <li className="text-gray-400 ">
              <a
                href="#contact"
                className="hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateContact();
                }}
              >
                Contact us
              </a>
            </li>
            <li className="text-gray-400 ">
              <a
                href="#home"
                className="hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-2 ">
          <p className="text-white font-bold">Subscribe to our newsletter</p>
          <p className="text-gray-400 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 w-10/12  text-center text-gray-500">
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
