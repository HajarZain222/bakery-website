import { Link } from 'react-router-dom';
import simplePostImage from '../../assets/Cookies.jpg';

function SimpleCard() {
    return (
        <div className="simple-card card">
            <Link to="/simple-post">
                <img src={simplePostImage} className="card-img-top" alt="simple-post" />
            </Link>

            <div className="card-body">
                <Link to="/simple-post">
                    <h5 className="card-title">Simple Post</h5>
                </Link>
                <h6 className="card-subtitle">By Philip on April 22, 2017</h6>
                <p className="card-text">
                    Contrary to popular belief, Lorem Ipsum isn’t simply random text. 
                    It has roots in Virginia Contrary piece of classical Latin literature 
                    from 45 BC, making...
                </p>
            </div>

            <div className="card-body">
                <Link to="/simple-post" className="card-link">
                    Read More
                    <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
            </div>
        </div>
    );
}

export default SimpleCard;
