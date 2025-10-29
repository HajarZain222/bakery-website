import GalleryCard from '../../components/BlogCards/GalleryCard';
import QuoteCard from '../../components/BlogCards/QuoteCard';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function Travel() {
    const posts = [GalleryCard, QuoteCard];
    return <CategoryPage categoryName="Travel" posts={posts} />;
}