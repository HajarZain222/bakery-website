import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Offer from '../pages/Offer/Offer';
import Gallery from '../pages/Gallery/Gallery';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Archives from '../pages/Archives/Archives';
import Classes from '../pages/Classes/Classes';
import Photography from '../pages/Photography/Photography';
import Travel from '../pages/Travel/Travel';
import SimplePost from '../pages/BlogPosts/SimplePost';
import GalleryPost from '../pages/BlogPosts/GalleryPost';
import BasicPost from '../pages/BlogPosts/BasicPost';
import QuotePost from '../pages/BlogPosts/QuotePost';
import Yoga from '../pages/Yoga/Yoga';
import Peace from '../pages/Peace/Peace';

function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/offer' element={<Offer />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='/simple-post' element={<SimplePost />} />
                <Route path='/gallery-post' element={<GalleryPost />} />
                <Route path='/basic-post' element={<BasicPost />} />
                <Route path='/quote-post' element={<QuotePost />} />

                <Route path='/archives' element={<Archives />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='/photography' element={<Photography />} />
                <Route path='/travel' element={<Travel />} />
                <Route path='/peace' element={<Peace />} />
                <Route path='/yoga-class' element={<Yoga />} />
            </Route>
        </Routes>
        </>
    )
}

export default AppRoutes;
