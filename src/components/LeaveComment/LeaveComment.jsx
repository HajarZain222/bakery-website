import './LeaveComment.css'
function LeaveComment() {
    return (
        <div className="leave-comment">
            <h5 className="leave-comment__title">Leave a Comment</h5>
            <p className="leave-comment__description">
                Your email address will not be published. Required fields are marked *
            </p>
            <form className="leave-comment__form">
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingTextarea" placeholder='Your comment...'></textarea>
                    <label htmlFor="floatingTextarea">Your comment...</label>
                </div>
                <div className="inputs-row d-flex gap-3">
                    <input type="text" className="form-control" id="InputName" placeholder='Your Name' aria-describedby="nameHelp" />
                    <input type="email" className="form-control" id="InputEmail" placeholder='Your Email' aria-describedby="emailHelp" />
                </div>
                <button className='btn my-3'>Post Comment</button>
            </form>
        </div>
    )
}

export default LeaveComment;