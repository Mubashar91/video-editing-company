import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "YouTube Editing Workflow: From Raw Footage to Publish",
    excerpt: "Our end-to-end workflow for fast, consistent, and cinematic YouTube edits.",
    content: `
      <h2>Workflow Stages</h2>
      <ul>
        <li>Ingest & organize footage with proxies</li>
        <li>Story assembly and pace-first rough cut</li>
        <li>B‑roll, titles, motion graphics, and SFX</li>
        <li>Color grade, audio mix, export presets</li>
      </ul>
      <h3>Tools</h3>
      <p>Premiere Pro, After Effects, DaVinci Resolve, and Topaz for upscaling when needed.</p>
      <h3>Turnaround</h3>
      <p>Most longform edits delivered within 48 hours; shorts within 24 hours.</p>
    `,
    author: "Editing Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Shortform That Hooks: 3-Second Retention Framework",
    excerpt: "Open strong, maintain pace, land the payoff—our template for viral-ready shorts.",
    content: `
      <h2>The Hook</h2>
      <p>Cold open, bold claim, or quick visual payoff within 0–3 seconds.</p>
      <h3>Middle</h3>
      <ul>
        <li>Jump cuts and kinetic text</li>
        <li>Branded captions & emojis</li>
        <li>Sound design for energy</li>
      </ul>
      <h3>Close</h3>
      <p>CTA beat + logo sting. Keep total runtime under 35s for best performance.</p>
    `,
    author: "Shorts Team",
    date: "October 8, 2025",
    readTime: "5 min read",
    category: "Shortform",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Color Grading for Creators: Match Brand and Mood",
    excerpt: "Practical grading steps for consistent, on-brand visuals across episodes and clips.",
    content: `
      <h2>Baseline</h2>
      <p>Balance exposure and white balance, then match shots.</p>
      <h3>Creative Look</h3>
      <ul>
        <li>Contrast curve + highlight rolloff</li>
        <li>Skin tone isolation</li>
        <li>Brand LUTs and overlays</li>
      </ul>
      <h3>Delivery</h3>
      <p>Consistency across longform and shorts with per-platform export profiles.</p>
    `,
    author: "Color Team",
    date: "September 28, 2025",
    readTime: "6 min read",
    category: "Color",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80"
  }
];

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-section-bg text-foreground">
      <Navbar />
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mt-20 sm:mt-18 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/60 backdrop-blur-sm border border-border/60 hover:bg-card/80 rounded-lg sm:rounded-xl text-foreground transition-all duration-300 font-semibold group shadow-md hover:shadow-lg text-sm sm:text-base"
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground/5 text-foreground text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-border">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-foreground/5 flex items-center justify-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-foreground prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-li:my-1 max-w-none mb-10 sm:mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-card/70 border border-border rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:bg-card/80 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  Ready to Transform Your Videos?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Book a free editing consultation and see how we boost retention, pace, and polish across your content.
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:opacity-95 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">Book Free Editing Consultation →</span>
                  <span className="sm:hidden">Get Started →</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">More Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-foreground/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-foreground/10 text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
