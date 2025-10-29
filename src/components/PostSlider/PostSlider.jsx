import './PostSlider.css';

function PostSlider({ prevLink, prevTitle, nextLink, nextTitle }) {
    return (
        <div className="post-slider">
            <div className="post-slider__nav">
                {/* Previous Post */}
                <div className="post-slider__link post-slider__link--prev">
                    {prevLink ? (
                        <a href={prevLink} className="post-slider__anchor">
                            <i className="fa-solid fa-angle-left post-slider__icon"></i>
                            <div className="post-slider__text">
                                <span>Previous Post</span>
                                <h4>{prevTitle}</h4>
                            </div>
                        </a>
                    ) : (
                        <div className="post-slider__empty"></div>
                    )}
                </div>
                {/* Next Post */}
                <div className="post-slider__link post-slider__link--next">
                    {nextLink ? (
                        <a href={nextLink} className="post-slider__anchor">
                            <div className="post-slider__text">
                                <span className="post-slider__next-label">Next Post</span>
                                <h4>{nextTitle}</h4>
                            </div>
                            <i className="fa-solid fa-angle-right post-slider__icon"></i>
                        </a>
                    ) : (
                        <div className="post-slider__empty"></div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default PostSlider;
