import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { BlogPost } from '@/lib/blog';

interface BlogGridSectionProps {
  posts: BlogPost[];
}

export default function BlogGridSection({ posts }: BlogGridSectionProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">
          No blog posts yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}