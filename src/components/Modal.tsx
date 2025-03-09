import { useStore } from "../store/useStore";
interface IModalProps {
  onNavigateAbout: () => void;
  onNavigateProjects: () => void;
  onNavigateCustomers: () => void;
}

const Modal = ({
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCustomers,
}: IModalProps) => {
  const { setShowModal } = useStore();
  return (
    <div className="w-full h-screen bg-white flex flex-col gap-6">
      <div className="flex justify-end p-4">
        <button onClick={() => setShowModal(false)}>
          <img src="/closing.svg" alt="close" className="size-5" />
        </button>
      </div>
      <div className="p-3 flex flex-col justify-center items-center gap-2 font-medium text-sm">
      <ul >
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
      </div>
    </div>
  );
};

export default Modal;
