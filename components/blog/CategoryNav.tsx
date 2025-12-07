import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface CategoryNavProps {
  categories: Category[];
  currentCategory?: string;
}

export default function CategoryNav({ categories, currentCategory }: CategoryNavProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-3 justify-center">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
          !currentCategory
            ? 'bg-primary text-white border-primary'
            : 'bg-white hover:bg-primary hover:text-white text-gray-700 border-gray-200'
        }`}
      >
        All Posts
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog/category/${category.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
            currentCategory === category.slug || currentCategory === category.id
              ? 'bg-primary text-white border-primary'
              : 'bg-white hover:bg-primary hover:text-white text-gray-700 border-gray-200'
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}