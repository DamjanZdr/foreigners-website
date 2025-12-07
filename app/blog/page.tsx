import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import CategoryNav from '@/components/blog/CategoryNav';
import { BlogGridSection } from '@/sections/blog';
import { theme } from '@/lib/theme';
import { getSupabaseAdmin } from '@/lib/supabase';
import { BlogPost } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | FOREIGNERS.pl',
  description: 'Articles, guides, and news about immigration, business, and living in Poland for foreigners.',
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = getSupabaseAdmin();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug),
      categories:blog_post_categories(
        category:blog_categories(id, name, slug)
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('Error fetching blog posts:', error);
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

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories()
  ]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-12">
          <Container>
            <div className="text-center mb-12">
              <h1 className={`${theme.fontSize['4xl']} md:${theme.fontSize['5xl']} ${theme.fontWeight.bold} text-gray-900 mb-4`}>
                The Foreigners - Blog
              </h1>
              <p className={`${theme.fontSize.lg} text-gray-600 max-w-2xl mx-auto`}>
                Helpful articles and guides about immigration, business, and life in Poland
              </p>
            </div>

            <CategoryNav categories={categories} />
            <BlogGridSection posts={posts} />
          </Container>
        </Section>
      </div>
      <Footer />
    </>
  );
}
