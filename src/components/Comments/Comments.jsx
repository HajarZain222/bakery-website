import './Comments.css'
import author from '../../assets/philip.png'

function Comments({ numOfComments }) {
    return (
        <div className='comments'>
            <h5 className='comments__title'>{numOfComments} Comments</h5>

            {numOfComments > 0 && (
                <div className="comments__item d-flex justify-content-between align-items-center gap-1">
                    <div className="comments__content d-flex justify-content-center align-items-stretch gap-1">
                        <div className="comments__image p-1">
                            <img src={author} alt="author" className='img-fluid rounded-circle' />
                        </div>
                        <div className="comments__info">
                            <div className="comments__name d-flex gap-2">
                                <h6>Phil</h6>
                                <span>April 22, 2017</span>
                            </div>
                            <p className="comments__description">
                                Wow, I love this post! Thanks for the information!
                            </p>
                        </div>
                    </div>
                    <button className='comments__reply-btn btn'>Reply</button>
                </div>
            )}
        </div>
    )
}

export default Comments;

