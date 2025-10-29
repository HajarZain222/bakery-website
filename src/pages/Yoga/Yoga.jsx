
import BasicCard from '../../components/BlogCards/BasicCard';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function Yoga() {
    const posts = [BasicCard];
    return <CategoryPage categoryName="Yoga Classes" posts={posts} />;
}