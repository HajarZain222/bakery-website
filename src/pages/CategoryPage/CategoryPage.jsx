import Sidebar from '../../components/Sidebar/Sidebar';

function CategoryPage({ categoryName, posts }) {
    return (
        <>
        <header className={`${categoryName} page-header`}>
            <div className="container page-header-content d-flex justify-content-between align-items-center">
            <h2 className='page-title'>Archives</h2>
            <div className="page-links d-flex justify-content-center gap-2">
                <a href="/">Home</a>
                <span> / </span>
                <p>Blog</p>
                <span> / </span>
                <p>Posts by category "{categoryName}"</p>
            </div>
            </div>
        </header>

        <section className={`${categoryName}-content`}>
            <div className="container">
            <div className="row p-lg-5 p-3">
                <div className="col-md-8">
                <div className="row">
                    {posts.map((PostComponent, index) => (
                    <div className="col-md-12 mb-3" key={index}>
                        <PostComponent />
                    </div>
                    ))}
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

export default CategoryPage;