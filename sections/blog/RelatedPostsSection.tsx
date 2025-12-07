import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { BlogPost } from '@/lib/blog';

interface RelatedPostsSectionProps {
  posts: BlogPost[];
}

export default function RelatedPostsSection({ posts }: RelatedPostsSectionProps) {
  if (posts.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full transition-colors"
        >
          See All
        </Link>
      </div>
    </div>
  );
}