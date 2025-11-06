import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Mail, Inbox, Filter, Settings, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  seoTopics?: never;
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
    `,
    author: "Editing Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Color Grading Basics: Make Your Footage Pop",
    excerpt: "Exposure, contrast, and color balance tips for a clean, modern look.",
    content: `
      <h2>Grading Tips</h2>
      <ul>
        <li>Normalize LOG with LUTs, then refine</li>
        <li>Use vectorscope and waveform for accuracy</li>
        <li>Skin-tone protection and selective grading</li>
        <li>Match shots for consistency</li>
      </ul>
    `,
    author: "Color Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "Color",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Motion Graphics That Convert: Lower Thirds to Hooks",
    excerpt: "Design motion that supports the story and drives retention—without clutter.",
    content: `
      <h2>What Works</h2>
      <ul>
        <li>Brand kits and reusable title templates</li>
        <li>Hook animations under 3 seconds</li>
        <li>Callouts for steps, features, and benefits</li>
        <li>Subtle transitions over flashy effects</li>
      </ul>
    `,
    author: "Graphics Team",
    date: "September 28, 2025",
    readTime: "5 min read",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Audio Post: Clean Dialogue Every Time",
    excerpt: "Noise reduction, EQ, compression, and mastering for professional sound.",
    content: `
      <h2>Signal Chain</h2>
      <ul>
        <li>Dialogue isolate and noise print removal</li>
        <li>Subtractive EQ to remove mud</li>
        <li>Compression for intelligibility</li>
        <li>Loudness normalization to platform specs</li>
      </ul>
    `,
    author: "Audio Team",
    date: "September 15, 2025",
    readTime: "8 min read",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Shortform Editing: TikTok/Reels that Retain",
    excerpt: "Cut for pace, punchlines, and captions—our checklist for viral shortform.",
    content: `
      <h2>Checklist</h2>
      <ul>
        <li>Open with the payoff in 2–3 seconds</li>
        <li>Jump cuts and whip pans to keep momentum</li>
        <li>High-contrast captions with emojis sparingly</li>
        <li>Aspect-specific framing and export</li>
      </ul>
    `,
    author: "Shortform Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Shortform",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Podcast to Video: Turn Conversations into Content",
    excerpt: "Template-driven edits, multicam sync, and social cutdowns for podcasts.",
    content: `
      <h2>Process</h2>
      <ul>
        <li>Automated transcript for fast selects</li>
        <li>Speaker labels and dynamic cropping</li>
        <li>Chapter markers and shorts extraction</li>
        <li>Package deliverables for all platforms</li>
      </ul>
    `,
    author: "Production Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Production",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80"
  }
];

// Extra posts
blogPosts.push(
  {
    id: 7,
    title: "DaVinci Resolve: Creator-Friendly Color Workflow",
    excerpt: "From balance to look—a simple, repeatable node tree for YouTube and shorts.",
    content: `
      <h2>Node Tree</h2>
      <ul>
        <li>Balance: WB, exposure, match shots</li>
        <li>Look: Contrast curve, soft rolloff</li>
        <li>Skin: Isolate and protect tones</li>
        <li>Brand: LUT/OFX overlays and grain</li>
      </ul>
    `,
    author: "Color Team",
    date: "August 02, 2025",
    readTime: "6 min read",
    category: "Color",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    title: "Retention First: Editing Pacing for YouTube",
    excerpt: "Cut decisions that keep viewers watching—beats, reveals, and payoff timing.",
    content: `
      <h2>Pacing</h2>
      <ul>
        <li>Open with payoff, then setup</li>
        <li>Trim breaths and hesitations</li>
        <li>Place B‑roll for meaning, not filler</li>
        <li>CTA beats at natural peaks</li>
      </ul>
    `,
    author: "Editing Team",
    date: "July 21, 2025",
    readTime: "7 min read",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    title: "Caption Styles that Convert on Shorts",
    excerpt: "Readable, branded captions without clutter—sizes, contrast, and emojis.",
    content: `
      <h2>Captions</h2>
      <ul>
        <li>High-contrast, stroke or shadow</li>
        <li>Brand fonts and colors</li>
        <li>Emojis sparingly for emphasis</li>
        <li>Safe zones for each platform</li>
      </ul>
    `,
    author: "Shorts Team",
    date: "July 08, 2025",
    readTime: "4 min read",
    category: "Shortform",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80"
  }
);

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Editing Insights
          </span>
          <h2 className="section-heading">
            Blog & <span className="gradient-heading">Video Editing Guides</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Workflows, grading, motion, audio, and shorts—everything you need to produce fast, consistent, on-brand videos.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer w-full flex flex-col hover:-translate-y-2"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5
                  }
                }}
              >
                {/* Hover glow border */}
                <div className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[hsl(var(--gold))]/20 via-transparent to-[hsl(var(--brand-blue))]/20" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(217,91%,65%)] to-transparent opacity-60" />
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle image gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 backdrop-blur-[2px] bg-card text-card-foreground text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-card-foreground mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-card-foreground transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-card-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="text-[10px] sm:text-xs text-card-foreground truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card dark:bg-white/10 text-card-foreground dark:text-white border border-card-foreground/30 dark:border-white/20 hover:bg-gradient-to-r hover:from-[hsl(var(--gold))] hover:to-[hsl(var(--brand-blue))] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                        <span className="hidden sm:inline">Read</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
