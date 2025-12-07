'use client';

import Link from 'next/link';
import { BlogPost, formatDate, extractFirstImage } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Get image from featured_image or extract from content
  const imageUrl = post.featured_image || extractFirstImage(post.content);

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes growSpin {
          0% {
            transform: scale(0.1) rotate(0deg);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          100% {
            transform: scale(1) rotate(720deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
        }
        
        .newspaper-card {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .group:hover .newspaper-card {
          animation: growSpin 0.5s cubic-bezier(0.5, 0.5, 0.5, 1) forwards;
        }
      `}} />
      <article className="h-full bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl flex flex-col newspaper-card">
        {/* Featured Image with 5:3 aspect ratio */}
        {imageUrl ? (
          <div className="relative w-full aspect-[5/3] overflow-hidden bg-gray-100">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-[5/3] bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center overflow-hidden">
            <span className="text-red-300 text-4xl font-bold">
              FOREIGNERS.pl
            </span>
          </div>
        )}

        {/* Content - flex-grow to fill remaining space */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Categories */}
          {post.categories && post.categories.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.map((cat: any) => (
                <span 
                  key={cat.category.id}
                  className="inline-block px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold"
                >
                  {cat.category.name}
                </span>
              ))}
            </div>
          ) : post.category?.name && (
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold">
                {post.category.name}
              </span>
            </div>
          )}

          {/* Title - line-clamp-3 to show more text */}
          <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight flex-grow line-clamp-3">
            {post.title}
          </h2>

          {/* Date and Reading Time - pushed to bottom */}
          <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
            {post.published_at && (
              <time dateTime={post.published_at} className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.published_at)}
              </time>
            )}
            {post.reading_time_minutes && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.reading_time_minutes} min
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}