import { Video, Scissors, Palette, Sparkles, Film, Zap } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Scissors,
    title: "Shortform Video Editing",
    description: "Expert editing for TikTok, Instagram Reels, and YouTube Shorts. Fast-paced cuts, trending effects, and viral-ready content under 60 seconds",
    benefit: "Viral-ready content"
  },
  {
    icon: Film,
    title: "Longform Video Production",
    description: "Professional editing for YouTube videos, podcasts, documentaries, and webinars. Complete post-production with storytelling focus",
    benefit: "Cinematic quality"
  },
  {
    icon: Video,
    title: "Video Cutting & Trimming",
    description: "Precision cutting, scene selection, and pacing optimization. Remove dead air, mistakes, and create engaging flow throughout your content",
    benefit: "Perfect pacing"
  },
  {
    icon: Palette,
    title: "Color Grading & Correction",
    description: "Professional color grading, LUT application, and color correction to achieve cinematic looks and consistent brand aesthetics",
    benefit: "Cinematic look"
  },
  {
    icon: Zap,
    title: "Motion Graphics & VFX",
    description: "Eye-catching motion graphics, animated titles, lower thirds, transitions, and visual effects that enhance your storytelling",
    benefit: "Professional polish"
  },
  {
    icon: Sparkles,
    title: "Audio Enhancement",
    description: "Crystal-clear audio mixing, noise reduction, music selection, and sound design to create immersive viewing experiences",
    benefit: "Studio-quality sound"
  }
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      id="services"
      className="relative py-8 sm:py-10 md:py-14 lg:py-16 text-foreground z-30 overflow-hidden min-h-[500px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative z-10 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 text-white text-xs sm:text-sm md:text-base font-semibold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(168,85,247,0.6)] border border-white/30 backdrop-blur-sm relative overflow-hidden animate-pulse">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50"></span>
            <span className="relative z-10">Video Editing Services</span>
          </span>
          <h2 className="section-heading">
            Complete <span className="gradient-heading">Video Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2 dark:text-white/90">
            From shortform clips to longform productions—cutting, color grading, motion graphics, and audio enhancement with professional expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-card/80 backdrop-blur-sm text-foreground dark:text-white border border-border p-5 sm:p-6 md:p-7 lg:p-9 xl:p-10 rounded-xl sm:rounded-2xl hover:border-[hsl(var(--brand-blue))]/40 dark:hover:border-[hsl(var(--brand-blue))]/40 hover:shadow-[0_25px_80px_-20px_hsl(217_91%_60%/0.2)] dark:hover:shadow-[0_25px_80px_-20px_rgba(59,130,246,0.25)] transition-all duration-700 group overflow-hidden"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-5 lg:gap-6 relative z-10">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white ring-2 ring-purple-400/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_18px_40px_-12px_rgba(168,85,247,0.6)] group-hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.8)] relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  style={{
                    transition: `transform ${index * 0.1}s ease-in-out`
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: index * 0.2 }}
                  />
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8 relative z-10" />
                </motion.div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-3 text-foreground dark:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-4 leading-relaxed dark:text-white/90">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 border border-cyan-300 dark:border-cyan-600/50 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm md:text-xs lg:text-sm font-semibold group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1.5 sm:mr-2 md:mr-1.5 lg:mr-2" />
                    <span className="leading-none">{service.benefit}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-[hsl(var(--gold))]/0 group-hover:border-[hsl(var(--gold))]/50 rounded-tr-xl sm:rounded-tr-2xl transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-[hsl(var(--gold))]/0 group-hover:border-[hsl(var(--gold))]/50 rounded-bl-xl sm:rounded-bl-2xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
