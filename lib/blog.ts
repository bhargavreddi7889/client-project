import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string;
}

const postsDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        author: data.author || "ComplyBridge Team",
        category: data.category || "Compliance",
        excerpt: data.excerpt || "",
        readTime: data.readTime || "5 min read",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const altPath = path.join(postsDir, `${slug}.md`);
  const fullPath = fs.existsSync(filePath) ? filePath : fs.existsSync(altPath) ? altPath : null;
  if (!fullPath) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    author: data.author || "ComplyBridge Team",
    category: data.category || "Compliance",
    excerpt: data.excerpt || "",
    readTime: data.readTime || "5 min read",
    content,
  };
}
