import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – ComplyBridge",
  description: "Expert articles on GST, company registration, ITR filing, compliance, and more from ComplyBridge professionals.",
};

const categoryColors: Record<string, string> = {
  GST: "bg-orange-100 text-orange-700",
  "Company Law": "bg-blue-100 text-blue-700",
  "Income Tax": "bg-purple-100 text-purple-700",
  Compliance: "bg-green-100 text-green-700",
  MSME: "bg-yellow-100 text-yellow-700",
  Trademark: "bg-pink-100 text-pink-700",
  LLP: "bg-teal-100 text-teal-700",
};

function getCategoryColor(category: string) {
  return categoryColors[category] ?? "bg-gray-100 text-gray-700";
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Hub</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ComplyBridge Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Expert articles on GST, company registration, ITR filing, trademark, and compliance — written by practicing professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl font-medium">No posts published yet.</p>
              <p className="text-sm mt-2">Check back soon for expert articles.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="bg-gradient-to-r from-[#112740] to-[#1e4a70] h-2" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                        <Tag size={11} />{post.category}
                      </span>
                    </div>
                    <h2 className="text-[#112740] font-bold text-lg leading-snug mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-5 border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm hover:gap-2 transition-all">
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-16 text-center bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-[#112740] mb-3">Need Expert Compliance Advice?</h3>
            <p className="text-gray-500 mb-6 max-w-lg mx-auto">
              Our team of chartered accountants and legal professionals is ready to assist you with any compliance or registration requirement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
