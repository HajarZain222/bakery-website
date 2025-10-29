import './BlogPosts.css';
import Author from '../../components/Author/Author';
import PostSlider from '../../components/PostSlider/PostSlider';
import Comments from '../../components/Comments/Comments';
import LeaveComment from '../../components/LeaveComment/LeaveComment';

import locationImage from '../../assets/location.jpg';
import BreadsImage from '../../assets/breads.jpg';
import BlakeParkinson from '../../assets/blake-parkinson.jpeg';

function GalleryPost() {
    return (
        <>
        <header className="gallery-post page-header">
            <div className="page-header-content">
            <h2 className="page-title">Gallery Post</h2>
            <p className="page-desc">
                By <a>Philip</a> on April 22, 2017 in{' '}
                <a href="/photography">Photography</a>,{' '}
                <a href="/travel">Travel</a>
            </p>
            <div className="page-links d-flex justify-content-center gap-2">
                <a href="/">Home</a>
                <span>/</span>
                <p>Gallery Post</p>
            </div>
            </div>
        </header>

        <section className="gallery-post-content p-lg-5 p-3">
            <div className="container">
            {/* === Post Content === */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                {/* === Carousel === */}
                <div
                id="carouselExampleAutoplaying"
                className="carousel slide mb-3"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                >
                <div className="carousel-indicators">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="0"
                    className="active rounded-circle"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to="1"
                    className="rounded-circle"
                    aria-label="Slide 2"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img
                        src={locationImage}
                        className="img-fluid"
                        alt="locationImage"
                    />
                    </div>
                    <div className="carousel-item">
                    <img src={BreadsImage} className="img-fluid" alt="BreadsImage" />
                    </div>
                </div>
                </div>

                {/* === Text Content === */}
                <p className="desc">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim. Investigationes demonstraverunt
                lectores legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram, anteposuerit litterarum formas humanitatis per seacula
                quarta decima et quinta decima. Eodem modo typi, qui nunc nobis
                videntur parum clari, fiant sollemnes in futurum.
                </p>

                {/* === Quote === */}
                <div className="quote position-relative border-4 border-start text-start ms-4 px-4 py-2">
                <i className="fa-solid fa-quote-left quote-icon-left"></i>
                <p className="desc ms-3">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                    esse molestie consequat, vel illum dolore eu feugiat nulla
                    facilisis at vero eros et accumsam. Nam liber tempor cum soluta.
                </p>
                <i className="fa-solid fa-quote-right quote-icon-right"></i>
                </div>

                <p className="desc">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim. Claritas est etiam processus
                dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                notare quam littera gothica, quam nunc putamus parum claram,
                anteposuerit litterarum formas humanitatis per seacula quarta
                decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
                parum clari, fiant sollemnes in futurum.
                </p>

                <p className="title">Mirum Est Notare Quam Littera Gothica</p>

                {/* === Text with Image === */}
                <div className="text-with-image">
                <p className="desc">
                    Mirum est notare quam littera gothica, quam nunc putamus parum
                    claram, anteposuerit litterarum formas humanitatis per seacula
                    quarta decima et quinta decima. Eodem modo typi, qui nunc nobis
                    videntur parum clari, fiant sollemnes in futurum.
                    <img
                    src={BlakeParkinson}
                    alt="BlakeParkinson"
                    className="inline-image float-lg-start p-3 ps-0"
                    />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                    nobis eleifend option congue nihil imperdiet doming id quod mazim
                    placerat facer possim assum.
                </p>
                </div>
            </div>

            {/* === Author === */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <Author />
            </div>

            {/* === Post Slider === */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <PostSlider
                prevLink="/simple-post"
                prevTitle="Simple Post"
                nextLink="/basic-post"
                nextTitle="Basic Post"
                />
            </div>

            {/* === Comments === */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <Comments numOfComments={0} />
            </div>

            {/* === Leave Comment === */}
            <div className="py-lg-4 py-2">
                <LeaveComment />
            </div>
            </div>
        </section>
        </>
    );
}

export default GalleryPost;
