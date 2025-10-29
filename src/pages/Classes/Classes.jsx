import SimpleCard from '../../components/BlogCards/SimpleCard';
import BasicCard from '../../components/BlogCards/BasicCard';
import QuoteCard from '../../components/BlogCards/QuoteCard';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function Classes() {
    const posts = [SimpleCard, BasicCard, QuoteCard];
    return <CategoryPage categoryName="Classes" posts={posts} />;
}
