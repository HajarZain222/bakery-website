import SimpleCard from '../../components/BlogCards/SimpleCard';
import GalleryCard from '../../components/BlogCards/GalleryCard';
import BasicCard from '../../components/BlogCards/BasicCard';
import QuoteCard from '../../components/BlogCards/QuoteCard';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function Archives() {
    const posts = [SimpleCard, GalleryCard, BasicCard, QuoteCard];
    return <CategoryPage categoryName="Archives" posts={posts} />;
}