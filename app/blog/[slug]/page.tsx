import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import CategoryNav from '@/components/blog/CategoryNav';
import CategoryCTA from '@/components/blog/CategoryCTA';
import { BlogPostContent, RelatedPostsSection } from '@/sections/blog';
import { getSupabaseAdmin } from '@/lib/supabase';
import { BlogPost } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabaseAdmin();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug, sort_order),
      categories:blog_post_categories(
        category:blog_categories(id, name, slug, sort_order)
      )
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
}

async function getRelatedPosts(categoryId: string | null, currentSlug: string): Promise<BlogPost[]> {
  const supabase = getSupabaseAdmin();
  
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug),
      categories:blog_post_categories(
        category:blog_categories(id, name, slug)
      )
    `)
    .eq('status', 'published')
    .neq('slug', currentSlug)
    .order('published_at', { ascending: false })
    .limit(3);

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }

  return data || [];
}

async function getCategories() {
  const supabase = getSupabaseAdmin();
  
  const { data } = await supabase
    .from('blog_categories')
    .select('*')
    .order('sort_order');

  return data || [];
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | FOREIGNERS.pl',
    };
  }

  return {
    title: post.meta_title || `${post.title} | FOREIGNERS.pl Blog`,
    description: post.meta_description || post.excerpt || undefined,
    keywords: post.focus_keyword ? [post.focus_keyword] : undefined,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || undefined,
      images: post.featured_image ? [post.featured_image] : undefined,
      type: 'article',
      publishedTime: post.published_at || undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const [relatedPosts, categories] = await Promise.all([
    getRelatedPosts(post.category?.id || null, slug),
    getCategories()
  ]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-12">
          <Container>
            <CategoryNav 
              categories={categories} 
              currentCategory={post.category?.id}
            />

            {/* Main Content - Centered, unaffected by sidebar */}
            <div className="max-w-4xl mx-auto relative">
              <BlogPostContent post={post} />
              <RelatedPostsSection posts={relatedPosts} />
              
              {/* Sticky Sidebar - Absolute positioned to the right of content */}
              <aside className="hidden xl:block absolute left-full ml-8 top-0 w-72">
                <div className="sticky top-24 space-y-4">
                  {post.categories && post.categories.length > 0 ? (
                    post.categories
                      .filter((cat: any) => cat.category.slug !== 'news')
                      .map((cat: any) => (
                        <CategoryCTA key={cat.category.id} category={cat.category} />
                      ))
                  ) : post.category && post.category.slug !== 'news' && (
                    <CategoryCTA category={post.category} />
                  )}
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </div>
      <Footer />
    </>
  );
}