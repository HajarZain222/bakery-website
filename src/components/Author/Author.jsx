import './Author.css'
import author from '../../assets/philip.png'

function Author() {
    return (
        <div className='author d-flex justify-content-center align-items-stretch gap-1'>
            <div className="author-image p-1">
                <img src={author} className='img-fluid rounded-circle' alt="Author Philip" />
            </div>
            <div className="author-info d-flex flex-column">
                <h5>Philip</h5>
                <p>
                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis.
                </p>
            </div>
        </div>
    )
}

export default Author;

