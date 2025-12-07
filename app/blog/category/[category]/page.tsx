import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import CategoryNav from '@/components/blog/CategoryNav';
import { BlogGridSection } from '@/sections/blog';
import { getSupabaseAdmin } from '@/lib/supabase';
import { BlogPost } from '@/lib/blog';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

async function getCategory(slug: string) {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase.from('blog_categories').select('*').eq('slug', slug).single();
  return data;
}

async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug),
      categories:blog_post_categories!inner(
        category:blog_categories!inner(id, name, slug)
      )
    `)
    .eq('status', 'published')
    .eq('categories.category.slug', categorySlug)
    .order('published_at', { ascending: false });
  return data || [];
}

async function getAllCategories() {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase.from('blog_categories').select('*').order('sort_order');
  return data || [];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = await getCategory(category);
  if (!categoryData) return { title: 'Category Not Found' };
  return { title: `${categoryData.name} | FOREIGNERS.pl Blog` };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = await getCategory(category);
  if (!categoryData) notFound();
  
  const [posts, allCategories] = await Promise.all([
    getBlogPostsByCategory(categoryData.slug),
    getAllCategories()
  ]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-12">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.name}</h1>
              {categoryData.description && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {categoryData.description}
                </p>
              )}
            </div>

            <CategoryNav 
              categories={allCategories} 
              currentCategory={categoryData.slug}
            />

            <BlogGridSection posts={posts} />
          </Container>
        </Section>
      </div>
      <Footer />
    </>
  );
}