const Projects = ()=> {
    return (
    <div className="w-full flex justify-center ">
        <div className="w-10/12 p-14 flex flex-col justify-center items-center gap-5 overflow-hidden">
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
            <button className="p-3 bg-gray-200 rounded">
                <img src="/src/assets/left.svg" alt="" />
            </button>
            <button className="p-3 bg-gray-200 rounded">
                <img src="/src/assets/right.svg" alt="" />
            </button>
        </div>
        <div className="overflow-hidden">
            <div className="flex-gap-8">
                <div className="relative">
                    <img src="/src/assets/project1.jpg" alt="" className="" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className=" bg-white w-3/4 px-4 py-2 shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Skyline Haven</h2>
                        <p className="text-gray-500 text-sm">$2,50,000 <span className="px-1">|</span> California</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Projects