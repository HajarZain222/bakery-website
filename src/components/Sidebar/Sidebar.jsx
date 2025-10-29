import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__content">

                {/* Search */}
                <div className="sidebar__search border-1 pb-3">
                    <input 
                        className="sidebar__input form-control" 
                        type="search" 
                        placeholder="Search..." 
                        aria-label="Search" 
                    />
                    <button type="submit" className="sidebar__search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                {/* Recent Posts */}
                <div className="sidebar__section sidebar__recent-posts border-1 pb-3">
                    <h4 className="sidebar__title">Recent Posts</h4>
                    <ul className="sidebar__links">
                        <li><Link to="/simple-post">Simple Post</Link></li>
                        <li><Link to="/gallery-post">Gallery Post</Link></li>
                        <li><Link to="/basic-post">Basic Post</Link></li>
                        <li><Link to="/quote-post">Quote Post</Link></li>
                    </ul>
                </div>

                {/* Recent Comments */}
                <div className="sidebar__section sidebar__recent-comments border-1 pb-3">
                    <h4 className="sidebar__title">Recent Comments</h4>
                    <ul className="sidebar__links">
                        <li>Phil on <Link to="/simple-post">Simple Post</Link></li>
                    </ul>
                </div>

                {/* Archives */}
                <div className="sidebar__section sidebar__archives border-1 pb-3">
                    <h4 className="sidebar__title">Archives</h4>
                    <ul className="sidebar__links">
                        <li><Link to="/archives">April 2017</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="sidebar__section sidebar__categories border-1 pb-3">
                    <h4 className="sidebar__title">Categories</h4>
                    <ul className="sidebar__links">
                        <li><Link to="/classes">Classes</Link></li>
                        <li><Link to="/photography">Photography</Link></li>
                        <li><Link to="/travel">Travel</Link></li>
                    </ul>
                </div>

                {/* Meta */}
                <div className="sidebar__section sidebar__meta border-1 pb-3">
                    <h4 className="sidebar__title">Meta</h4>
                    <ul className="sidebar__links">
                        <li><Link to="#">Log in</Link></li>
                        <li><Link to="#">Entries RSS</Link></li>
                        <li><Link to="#">Comments RSS</Link></li>
                        <li><a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress.org</a></li>
                    </ul>
                </div>

            </div>
        </aside>
    );
}

export default Sidebar;

