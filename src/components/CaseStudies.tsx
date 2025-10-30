import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    mainResult: string;
    timeframe: string;
    seoFocus: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Rebrand + Visual System: Luxury Beauty Goes Global",
    company: "Luxe Beauty Co.",
    industry: "Beauty & Cosmetics",
    challenge: "Outdated brand lacked cohesion across packaging, web, and social; international rollout needed guidelines.",
    solution: "New logo suite, color palette, typography, packaging templates, and a 24‑page brand guideline with exportable assets.",
    results: [
      { metric: "Launch", value: "6 weeks", description: "Global rollout in phases" },
      { metric: "Conversion", value: "+38%", description: "PDP redesign uplift" },
      { metric: "Consistency", value: "+100%", description: "One source of truth" },
      { metric: "Assets", value: "120+", description: "On-brand deliverables" }
    ],
    testimonial: "Our new identity feels premium and modern. The guidelines make every new asset easy and consistent.",
    testimonialAuthor: "Emma Rodriguez",
    testimonialRole: "Founder, Luxe Beauty Co.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: { mainResult: "+38% Conv.", timeframe: "6 weeks", seoFocus: "Brand Identity" }
  },
  {
    id: 2,
    title: "UI/UX Redesign: Coaching Site Boosts Leads",
    company: "Peak Performance Coaching",
    industry: "Professional Services",
    challenge: "Cluttered pages and weak hierarchy led to low lead capture and poor mobile experience.",
    solution: "Re-architected IA, modular components, clearer CTAs, and responsive layouts with accessible color/contrast.",
    results: [
      { metric: "Leads", value: "+62%", description: "Form submissions" },
      { metric: "Speed", value: "+35%", description: "Lighthouse perf" },
      { metric: "Bounce", value: "-24%", description: "Improved first impression" },
      { metric: "Time", value: "+31%", description: "Session duration" }
    ],
    testimonial: "The redesign is clean and persuasive. We get more qualified inquiries every week.",
    testimonialAuthor: "David Chen",
    testimonialRole: "CEO, Peak Performance",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: { mainResult: "+62% Leads", timeframe: "4 weeks", seoFocus: "UI/UX Redesign" }
  },
  {
    id: 3,
    title: "Motion + Social Kit: SaaS Brand Scales Content",
    company: "CloudFlow",
    industry: "SaaS",
    challenge: "Static posts underperformed; no motion templates to scale weekly content and product launches.",
    solution: "Created motion graphic templates, iconography, and a reusable social kit with export presets per platform.",
    results: [
      { metric: "Engagement", value: "+210%", description: "Avg. per post" },
      { metric: "Output", value: "3x", description: "Weekly volume" },
      { metric: "Production", value: "-40%", description: "Time per asset" },
      { metric: "Retention", value: "+18%", description: "Video completion" }
    ],
    testimonial: "Motion templates changed the game—our content looks polished and performs.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "VP Marketing, CloudFlow",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: { mainResult: "+210% Eng.", timeframe: "3 weeks", seoFocus: "Motion & Social" }
  }
];

export { caseStudies };

export const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="case-studies"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(270,80%,65%)] via-[hsl(260,85%,60%)] to-[hsl(220,90%,60%)] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[hsl(250,50%,20%)] dark:text-foreground">
            Design Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            See how brands launched standout identities, redesigned high‑converting websites, and scaled content with motion and systems.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[hsl(270,80%,65%)] dark:hover:border-[hsl(270,80%,65%)] hover:shadow-[0_20px_60px_-15px_rgba(167,139,250,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer w-full"
              onClick={() => navigate(`/case-study/${study.id}`)}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-[hsl(250,100%,98%)] dark:bg-[hsl(270,80%,65%)] text-[hsl(250,50%,20%)] dark:text-white text-xs font-bold rounded-full mb-1.5 sm:mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2">
                    {study.company}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50">
                  <div className="text-center">
                    <div className="text-[hsl(250,50%,20%)] dark:text-white font-bold text-sm sm:text-base lg:text-lg">{study.stats.mainResult}</div>
                    <div className="text-[10px] sm:text-xs text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)]">Result</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[hsl(250,50%,20%)] dark:text-white font-bold text-sm sm:text-base lg:text-lg">{study.stats.seoFocus}</div>
                    <div className="text-[10px] sm:text-xs text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)]">Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[hsl(250,50%,20%)] dark:text-white font-bold text-sm sm:text-base lg:text-lg">{study.stats.timeframe}</div>
                    <div className="text-[10px] sm:text-xs text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)]">Timeframe</div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-[hsl(250,50%,20%)] dark:text-white transition-colors line-clamp-2">
                  {study.title}
                </h4>

                {/* Challenge snippet */}
                <p className="text-xs sm:text-sm text-[hsl(250,30%,50%)] dark:text-[hsl(270,80%,85%)] mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {study.challenge}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1 sm:gap-2 text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)] font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                  <span className="hidden sm:inline">View Full Case Study</span>
                  <span className="sm:hidden">View Study</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ready to write your own success story?
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-[hsl(270,80%,65%)] via-[hsl(260,85%,60%)] to-[hsl(250,70%,55%)] text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-[hsl(270,80%,70%)] hover:via-[hsl(260,85%,65%)] hover:to-[hsl(250,70%,60%)] transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="hidden sm:inline">Book Your Free Consultation →</span>
            <span className="sm:hidden">Get Started →</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
