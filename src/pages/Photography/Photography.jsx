import SimpleCard from '../../components/BlogCards/SimpleCard';
import GalleryCard from '../../components/BlogCards/GalleryCard';
import BasicCard from '../../components/BlogCards/BasicCard';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function Photography() {
    const posts = [SimpleCard, GalleryCard, BasicCard];
    return <CategoryPage categoryName="Photography" posts={posts} />;
}
