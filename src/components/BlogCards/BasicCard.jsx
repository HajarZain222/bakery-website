import { Link } from 'react-router-dom';

function BasicCard() {
    return (
        <div className="basic-card card">
            <div className="card-body">
                <Link to="/basic-post">
                    <h5 className="card-title">Basic Post</h5>
                </Link>
                <h6 className="card-subtitle">By Philip on April 22, 2017</h6>
                <p className="card-text">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros...
                </p>
            </div>

            <div className="card-body">
                <Link to="/basic-post" className="card-link">
                    Read More
                    <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
            </div>
        </div>
    );
}

export default BasicCard;
