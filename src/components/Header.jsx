'use client';
import Image from "next/image";
const Header = () => {
    return (
        <section className="md:flex world-news items-center ">
            <img src="/header.png" className="w-3/5	" alt="Image Of Mountain Road" />
            <div className="headline-content">
                <h1>World news</h1>
                <hr className="border-t border-solid border-white w-3/6"  />
                <h3>Amazing places in America to visit.</h3>
                <p className="w-3/5">
                For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in.
                </p>
                <button className="bg-[#fa6980]">learn more</button>
            </div>
            <div className="m-10 p-5">
            <div className="flex spans-wrapper">
                <h2>more news</h2>
                <div>
                <span className="left-span"> <i className="fa-solid fa-angle-left"></i> </span>
                <span className="right-span"> <i className="fa-solid fa-angle-right"></i> </span>
                </div>
            </div>
            <hr  />
            <div className="articles-wrapper">
                <article id="right-article">
                <h3 className="text-[#fa6980]">travel</h3>
                <h4 className="font-semibold">Article title</h4>
                <p className="text-[#abadb4]">
                    Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                    has appareat…
                </p>
                <i className="far fa-clock"></i><small>2 min ago</small>
                </article>
                <article>
                <h3 className="text-[#fa6980]">technology</h3>
                <h4 className="font-semibold">Article title</h4>
                <p className="text-[#abadb4]">
                    Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                    has appareat…
                </p>
                <i className="far fa-clock"></i><small>2 min ago</small>
                </article>
            </div>
            </div>
      </section>

    )
}

export default Header;