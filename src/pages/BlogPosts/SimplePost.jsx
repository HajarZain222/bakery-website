import './BlogPosts.css';
import simplePost from '../../assets/simple_post.jpeg';
import Author from '../../components/Author/Author';
import PostSlider from '../../components/PostSlider/PostSlider';
import Comments from '../../components/Comments/Comments';
import LeaveComment from '../../components/LeaveComment/LeaveComment';

function SimplePost() {
    return (
        <>
        <header className="simple-post page-header">
            <div className="page-header-content">
            <h2 className="page-title">Simple Post</h2>
            <p className="page-desc">
                By <a>Philip</a> on April 22, 2017 in{' '}
                <a href="/classes">Classes</a>,{' '}
                <a href="/photography">Photography</a>
            </p>
            <div className="page-links d-flex justify-content-center gap-2">
                <a href="/">Home</a>
                <span>/</span>
                <p>Simple Post</p>
            </div>
            </div>
        </header>

        <section className="simple-post-content p-lg-5">
            <div className="container">
            {/*  Post Content  */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <div className="image mb-3">
                <img src={simplePost} className="img-fluid" alt="simplePost" />
                </div>

                <p className="desc">
                Contrary to popular belief, Lorem Ipsum isn’t simply random text. It has roots in Virginia Contrary piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                </p>

                <p className="desc">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                </p>

                <p className="desc">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                </p>
            </div>

            {/*  Author  */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <Author />
            </div>

            {/*  Post Slider  */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <PostSlider
                prevLink=""
                prevTitle=""
                nextLink="/gallery-post"
                nextTitle="Gallery Post"
                />
            </div>

            {/*  Comments  */}
            <div className="py-lg-4 py-2 border-1 border-bottom">
                <Comments numOfComments={1} />
            </div>

            {/*  Leave Comment  */}
            <div className="py-lg-4 py-2">
                <LeaveComment />
            </div>
            </div>
        </section>
        </>
    );
}

export default SimplePost;
