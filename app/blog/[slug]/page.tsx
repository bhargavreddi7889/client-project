import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found – ComplyBridge" };
  return {
    title: `${post.title} – ComplyBridge Blog`,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-[#112740] mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#112740] mt-10 mb-4 border-b border-gray-200 pb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-[#112740] mt-8 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[#112740]">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-green-600 underline hover:text-green-700">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-gray-700">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal text-gray-700">$2</li>')
    .replace(/(<li[\s\S]+?<\/li>\n?)+/g, (match) => `<ul class="space-y-2 my-4">${match}</ul>`)
    .replace(/^(?!<[h|u|o|l]).+$/gm, (line) => line.trim() ? `<p class="text-gray-700 leading-relaxed my-3">${line}</p>` : "");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const categoryColors: Record<string, string> = {
    GST: "bg-orange-100 text-orange-700",
    "Company Law": "bg-blue-100 text-blue-700",
    "Income Tax": "bg-purple-100 text-purple-700",
    Compliance: "bg-green-100 text-green-700",
    MSME: "bg-yellow-100 text-yellow-700",
    Trademark: "bg-pink-100 text-pink-700",
    LLP: "bg-teal-100 text-teal-700",
  };
  const catColor = categoryColors[post.category] ?? "bg-gray-100 text-gray-700";

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${catColor}`}>
            <Tag size={11} />{post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">{post.title}</h1>
          <div className="flex flex-wrap gap-5 text-sm text-gray-300">
            <span className="flex items-center gap-2"><User size={14} className="text-green-400" />{post.author}</span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-green-400" />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-green-400" />{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
          {/* Article */}
          <article className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            {post.excerpt && (
              <p className="text-lg text-gray-600 font-medium border-l-4 border-green-500 pl-4 mb-8 italic">{post.excerpt}</p>
            )}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group flex items-center gap-3 text-left bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl p-4 transition-all max-w-xs">
                  <ArrowLeft size={18} className="text-gray-400 group-hover:text-green-600 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Previous</p>
                    <p className="text-sm font-semibold text-[#112740] line-clamp-1">{prevPost.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group flex items-center gap-3 text-right bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl p-4 transition-all max-w-xs ml-auto">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Next</p>
                    <p className="text-sm font-semibold text-[#112740] line-clamp-1">{nextPost.title}</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-green-600 shrink-0" />
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-6">
            {/* CTA */}
            <div className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Need Help with {post.category}?</h3>
              <p className="text-gray-300 text-sm mb-4">Talk to our experts for a free consultation on your compliance requirements.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors w-full justify-center">
                Get Free Consultation <ArrowRight size={14} />
              </Link>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-[#112740] mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                      <p className="text-sm font-semibold text-[#112740] group-hover:text-green-600 transition-colors line-clamp-2">{rp.title}</p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <Clock size={11} />{rp.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts Link */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
              <p className="text-sm text-gray-600 mb-3">Browse all our expert articles</p>
              <Link href="/blog" className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:gap-2 transition-all">
                View All Articles <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
