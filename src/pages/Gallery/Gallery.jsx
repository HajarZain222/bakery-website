import { useState } from 'react';
import './Gallery.css';
import chef from '../../assets/chef.jpg';
import Bagels from '../../assets/Bagels.jpg';
import Cookies from '../../assets/Cookies.jpg';
import superior_breads from '../../assets/superior_breads.jpg';
import location from '../../assets/location.jpg';
import breads from '../../assets/breads.jpg';

function Gallery() {
    const images = [chef, Bagels, Cookies, superior_breads, location, breads];
    const [currentIndex, setCurrentIndex] = useState(null);

    // Handlers 
    const openSlider = (index) => setCurrentIndex(index);
    const closeSlider = () => setCurrentIndex(null);
    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <>
            {/* Header Section */}
            <header className="gallery page-header">
                <div className="page-header-content">
                    <h2 className="page-title">Gallery</h2>
                    <p className="page-desc">
                        Awesome gallery showcasing our artisan bakings.
                    </p>
                </div>
            </header>

            {/* Gallery Section */}
            <section className="gallery-section p-lg-5 p-2">
                <div className="container">
                    <div className="row">
                        {images.map((img, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div
                                    className="gallery-item"
                                    onClick={() => openSlider(index)}
                                >
                                    <img
                                        src={img}
                                        className="img-fluid"
                                        alt={`Image-${index}`}
                                    />
                                    <div className="overlay">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Slider */}
            {currentIndex !== null && (
                <div className="lightbox">
                    <span className="close-btn" onClick={closeSlider}>
                        &times;
                    </span>
                    <span className="prev-btn" onClick={prevSlide}>
                        &#10094;
                    </span>
                    <img
                        src={images[currentIndex]}
                        className="lightbox-image"
                        alt="slide"
                    />
                    <span className="next-btn" onClick={nextSlide}>
                        &#10095;
                    </span>
                </div>
            )}
        </>
    );
}

export default Gallery;
