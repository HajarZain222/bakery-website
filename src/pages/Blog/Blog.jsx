import Sidebar from '../../components/Sidebar/Sidebar';
import SimpleCard from '../../components/BlogCards/SimpleCard';
import GalleryCard from '../../components/BlogCards/GalleryCard';
import BasicCard from '../../components/BlogCards/BasicCard';
import QuoteCard from '../../components/BlogCards/QuoteCard';

function Blog() {
    return (
        <>
        <header className="Blog page-header">
            <div className="container page-header-content d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h2 className="page-title">Blog</h2>
            <div className="page-links d-flex justify-content-center gap-2">
                <a href="/">Home</a>
                <span>/</span>
                <p>Blog</p>
            </div>
            </div>
        </header>

        <section className="Blog-content">
            <div className="container">
            <div className="row p-lg-5 p-3">
                <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6 mb-4">
                    <SimpleCard />
                    </div>
                    <div className="col-md-6 mb-4">
                    <GalleryCard />
                    </div>
                    <div className="col-md-6 mb-4">
                    <BasicCard />
                    </div>
                    <div className="col-md-6 mb-4">
                    <QuoteCard />
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <Sidebar />
                </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default Blog;
