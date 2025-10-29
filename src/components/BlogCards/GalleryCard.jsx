import { Link } from 'react-router-dom';
import breadsImage from '../../assets/breads.jpg';
import locationImage from '../../assets/location.jpg';

function GalleryCard() {
    return (
        <div className="gallery-card card">
            <Link to="/gallery-post">
                <div
                    id="galleryCarousel"
                    className="carousel slide mb-3"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#galleryCarousel"
                            data-bs-slide-to="0"
                            className="active rounded-circle"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#galleryCarousel"
                            data-bs-slide-to="1"
                            className="rounded-circle"
                            aria-label="Slide 2"
                        ></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={breadsImage}
                                className="card-img-top img-fluid"
                                alt="Breads"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={locationImage}
                                className="card-img-top img-fluid"
                                alt="Location"
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <div className="card-body">
                <Link to="/gallery-post">
                    <h5 className="card-title">Gallery Post</h5>
                </Link>
                <h6 className="card-subtitle">By Philip on April 22, 2017</h6>
                <p className="card-text">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros...
                </p>
            </div>

            <div className="card-body">
                <Link to="/gallery-post" className="card-link">
                    Read More
                    <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
            </div>
        </div>
    );
}

export default GalleryCard;


