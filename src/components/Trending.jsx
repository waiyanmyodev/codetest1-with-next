const Trending = () => {
    return ( 
        <section >
         <h1 className="text-2xl ml-24 mt-12">TRENDING</h1> 
        <div class="flex flex-col md:flex-row items-center justify-center">

            <div class="max-w-sm bg-white  rounded-md shadow m-14">
                
                <img class="w-full rounded-t-lg" src="/image1.png" alt="" />
                
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
                            Morbi eleifend a libero
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far.
                    </p>
                    <div>
                        <i className="fa-regular fa-clock"></i>
                        <span className="text-[#abadb4] italic">1h ago</span>
                    </div>
                </div>
            </div>

            <div class="max-w-sm bg-white  rounded-md shadow m-14">
                
                <img class="w-full rounded-t-lg" src="/image2.png" alt="" />
                
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
                            Morbi eleifend a libero
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far.
                    </p>
                    <div>
                        <i className="fa-regular fa-clock"></i>
                        <span className="text-[#abadb4] italic">1h ago</span>
                    </div>
                </div>
            </div>

            <div class="max-w-sm bg-white  rounded-md shadow m-14">
                
                <img class="w-full rounded-t-lg" src="/image3.png" alt="" />
                
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
                            Morbi eleifend a libero
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far.
                    </p>
                    <div>
                        <i className="fa-regular fa-clock"></i>
                        <span className="text-[#abadb4] italic">1h ago</span>
                    </div>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Trending;
