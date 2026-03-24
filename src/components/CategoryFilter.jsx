import { categories } from '../data/tools';

export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-filter animate-fade-in-delayed">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
