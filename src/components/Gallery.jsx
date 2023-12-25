const Gallery = () => { 
    return ( 
        <>
            <section class="container happening-now">
            <div class="title">
            <h2>happening now</h2>
            <div>
                <span class="left-span">
                <i className="fa-solid fa-angle-left"></i>
                </span>
                <span class="right-span">
                <i className="fa-solid fa-angle-right"></i>
                </span>
            </div>
            </div>
            <div class="flex justify-between images-wrapper-div">
            <div class="big-cards">
                <div class="big-card">
                <img src="https://meri-mg.github.io/Unilab-world-news/images/imageBG1.png" alt="Bridge" />
                <div class="big-card-content">
                    <h2>City</h2>
                    <h3>Large article title</h3>
                    <p>
                    Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                    detracto, vidit vituperatoribus duo id. Affert detraxit
                    voluptatum vis eu, inermis eloquentiam.
                    </p>
                    <i class="far fa-clock"></i><small>2m ago</small>
                </div>
                </div>
                <div class="big-card">
                <img src="https://meri-mg.github.io/Unilab-world-news/images/imageBG2.png" alt="Forest" />
                <div class="big-card-content forest">
                    <h2>Travel</h2>
                    <h3>Large article title</h3>
                    <p>
                    Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                    detracto, vidit vituperatoribus duo id. Affert detraxit
                    voluptatum vis eu, inermis eloquentiam.
                    </p>
                    <i class="far fa-clock"></i><small>2m ago</small>
                </div>
                </div>
            </div>
            <div class="small-cards">
                <div class="elephant">
                <img src="https://meri-mg.github.io/Unilab-world-news/images/image4.png" alt="elephant" />
                <h4>small title</h4>
                <small
                    ><i class="far fa-clock"></i>3h ago by
                    <a href="">Worldnews</a></small
                >
                </div>
                <div>
                <img src="https://meri-mg.github.io/Unilab-world-news/images/image5.png" alt="parrot" />
                <h4>small title</h4>
                <small
                    ><i class="far fa-clock"></i>4h ago by
                    <a href="">Days</a></small
                >
                </div>
                <div class="mountRoad">
                <img src="https://meri-mg.github.io/Unilab-world-news/images/image6.png" alt="mountain Road" />
                <h4>small title</h4>
                <small
                    ><i class="far fa-clock"></i>3h ago by
                    <a href="">Monica</a></small
                >
                </div>
            </div>
            </div>
        </section>
        </>
    )
}


export default Gallery;