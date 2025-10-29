import { Link } from 'react-router-dom';

function QuoteCard() {
    return (
        <div className="quote-card card">
            <Link to="/quote-post">
                <blockquote className="blockquote mb-0 text-white p-4">
                    <p className="card-text">
                        Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
                    </p>
                    <footer className="blockquote-footer d-flex justify-content-between">
                        Albert Einstein
                        <i className="fa-solid fa-quote-left"></i>
                    </footer>
                </blockquote>
            </Link>

            <div className="card-body">
                <Link to="/quote-post">
                    <h5 className="card-title">Quote Post</h5>
                </Link>
                <h6 className="card-subtitle">By Philip on April 22, 2017</h6>
                <p className="card-text">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros...
                </p>
            </div>

            <div className="card-body">
                <Link to="/quote-post" className="card-link">
                    Read More
                    <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
            </div>
        </div>
    );
}

export default QuoteCard;
