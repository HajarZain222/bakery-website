import './BlogPosts.css';
import Author from '../../components/Author/Author';
import PostSlider from '../../components/PostSlider/PostSlider';
import Comments from '../../components/Comments/Comments';
import LeaveComment from '../../components/LeaveComment/LeaveComment';
import BlakeParkinson from '../../assets/blake-parkinson.jpeg';

function BasicPost() {
    return (
        <>
            <header className="basic-post page-header">
                <div className="page-header-content">
                    <h2 className="page-title">Basic Post</h2>
                    <p className="page-desc">
                        By <a>Philip</a> on April 22, 2017 in{' '}
                        <a href="/classes">Classes</a>,{' '}
                        <a href="/photography">Photography</a>
                    </p>
                    <div className="page-links d-flex justify-content-center gap-2">
                        <a href="/">Home</a>
                        <span> / </span>
                        <p>Basic Post</p>
                    </div>
                </div>
            </header>

            <section className="basic-post-content p-lg-5 p-3">
                <div className="container">

                    {/*  Main Post Content  */}
                    <div className="py-lg-4 py-2 border-1 border-bottom">
                        <p className="desc">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                            qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                        </p>

                        {/*  Quote Section  */}
                        <div className="quote position-relative border-4 border-start text-start ms-4 px-4 py-2">
                            <i className="fa-solid fa-quote-left quote-icon-left"></i>
                            <p className="desc ms-3">
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsam.
                                Nam liber tempor cum soluta.
                            </p>
                            <i className="fa-solid fa-quote-right quote-icon-right"></i>
                        </div>

                        <p className="desc">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                            qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                            Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                            anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                            Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                        </p>

                        <p className="title">Mirum Est Notare Quam Littera Gothica</p>

                        {/*  Text with Image  */}
                        <div className="text-with-image">
                            <p className="desc">
                                Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                                anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                                Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                                <img
                                    src={BlakeParkinson}
                                    alt="BlakeParkinson"
                                    className="inline-image float-lg-start p-3 ps-0"
                                />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                                in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                                at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                                delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                        </div>

                        {/*  Tags / Buttons  */}
                        <div className="buttons">
                            <a href="/peace">Peace</a>
                            <a href="/yoga-class">Yoga Class</a>
                        </div>
                    </div>

                    {/*  Author Section  */}
                    <div className="p-lg-4 p-2 border-1 border-bottom">
                        <Author />
                    </div>

                    {/*  Post Slider  */}
                    <div className="p-lg-4 p-2 border-1 border-bottom">
                        <PostSlider
                            prevLink="/gallery-post"
                            prevTitle="Gallery Post"
                            nextLink="/quote-post"
                            nextTitle="Quote Post"
                        />
                    </div>

                    {/*  Comments  */}
                    <div className="p-lg-4 p-2 border-1 border-bottom">
                        <Comments numOfComments={0} />
                    </div>

                    {/*  Leave a Comment  */}
                    <div className="p-lg-4 p-2">
                        <LeaveComment />
                    </div>
                </div>
            </section>
        </>
    );
}

export default BasicPost;
