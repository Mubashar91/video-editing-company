import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Sparkles, Video, Film, Award } from "lucide-react";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center text-foreground overflow-hidden pt-16 sm:pt-20 md:pt-0"
      style={{ opacity }}
    >
      {/* Animated gradient background - Enhanced for dark mode */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-pink-100/60 to-orange-100/60 dark:from-purple-950/40 dark:via-pink-950/40 dark:to-orange-950/40 z-0"
        style={{ y }}
      />
      
      {/* Floating orbs with enhanced animations - Improved for dark mode */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-purple-400/20 rounded-full blur-3xl dark:from-purple-600/30 dark:via-pink-600/30 dark:to-purple-600/10"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/40 via-orange-400/40 to-pink-400/20 rounded-full blur-3xl dark:from-pink-600/30 dark:via-orange-600/30 dark:to-pink-600/10"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-400/30 via-purple-400/30 to-orange-400/10 rounded-full blur-3xl dark:from-orange-600/25 dark:via-purple-600/25 dark:to-orange-600/5"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-8 sm:py-12 md:py-16 lg:py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ 
              duration: 1, 
              delay: 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="inline-block mb-3 sm:mb-4 md:mb-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-purple-500/50 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.span>
                Professional Video Editing Services
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-[1.15] sm:leading-[1.12] md:leading-[1.1] tracking-tight text-gray-900 dark:text-gray-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform Your{' '}
              <span className="relative inline-block">
                <span className="gradient-heading dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
                  Raw Footage Into Viral Content
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full dark:from-purple-400 dark:via-pink-400 dark:to-orange-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-xl font-normal dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Professional video editing for <span className="font-semibold text-purple-600 dark:text-purple-400">YouTube</span>, <span className="font-semibold text-pink-600 dark:text-pink-400">TikTok</span>, <span className="font-semibold text-orange-600 dark:text-orange-400">Instagram Reels</span>, and long-form content. Expert cutting, color grading, motion graphics, and storytelling that captivates your audience and drives engagement.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/book-meeting'}
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 dark:from-purple-500 dark:via-pink-400 dark:to-orange-400 text-white hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 dark:hover:from-purple-600 dark:hover:via-pink-500 dark:hover:to-orange-500 px-8 py-6 rounded-xl font-bold text-lg transition-all relative overflow-hidden group shadow-2xl shadow-purple-500/50 hover:shadow-pink-500/60 dark:hover:shadow-purple-900/50 border-2 border-white/20 dark:border-white/10"
                  aria-label="Book a free 30-minute design consultation"
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "linear" }}
                  />
                  <span className="flex items-center gap-3 relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Video className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                    <span className="hidden sm:inline">Get Free Video Consultation</span>
                    <span className="sm:hidden">Free Consultation</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              
              {/* Enhanced urgency indicator with stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground dark:text-white/80">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" aria-hidden="true" />
                  </motion.div>
                  <span className="font-semibold">Free video review + custom editing strategy included</span>
                </div>
                
                {/* Quick stats with enhanced animations - Professional glassmorphism */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm">
                  <motion.div 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full shadow-lg backdrop-blur-sm border border-purple-200/80 dark:border-purple-500/30 hover:dark:border-purple-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4, rotate: 2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.span 
                      className="text-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >⚡</motion.span>
                    <span className="font-bold text-purple-700 dark:text-purple-300">24-48h Delivery</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-800/30 rounded-full shadow-lg backdrop-blur-sm border border-pink-200/80 dark:border-pink-500/30 hover:dark:border-pink-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4, rotate: -2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <motion.span 
                      className="text-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >🎬</motion.span>
                    <span className="font-bold text-pink-700 dark:text-pink-300">10K+ Videos</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full shadow-lg backdrop-blur-sm border border-orange-200/80 dark:border-orange-500/30 hover:dark:border-orange-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4, rotate: 2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <motion.span 
                      className="text-lg"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >⭐</motion.span>
                    <span className="font-bold text-orange-700 dark:text-orange-400">98% Satisfaction</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative lg:ml-auto mt-8 sm:mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{ perspective: 1200 }}
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20"
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative bg-gradient-to-br from-[hsl(217,91%,65%)] via-[hsl(217,91%,60%)] to-[hsl(217,91%,55%)] dark:from-[hsl(217,91%,70%)] dark:via-[hsl(217,91%,65%)] dark:to-[hsl(217,91%,60%)] text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-[0_10px_30px_-5px_rgba(59,130,246,0.4)] dark:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.6)] border border-white/20 dark:border-white/30 flex items-center gap-1.5 sm:gap-2 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50"></div>
                <Award className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" aria-hidden="true" />
                <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap relative z-10">500+ Clients</span>
              </motion.div>
            </motion.div>
            
            {/* 3D tilt container with enhanced border */}
            <motion.div
              className="relative rounded-xl md:rounded-2xl overflow-hidden p-1 group shadow-[0_30px_120px_-30px_rgba(168,85,247,0.8)]"
              whileHover={{ rotateX: -6, rotateY: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              style={{ 
                transformStyle: "preserve-3d",
                background: "linear-gradient(135deg, #a855f7, #ec4899, #f97316)",
                padding: "4px"
              }}
            >
              {/* Layer 1: image */}
              <motion.img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                alt="Professional video editing workspace with timeline and color grading"
                className="w-full h-auto object-cover"
                style={{ transform: "translateZ(20px)" }}
              />

              {/* Layer 2: brand gradient veil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/30"
                style={{ transform: "translateZ(30px)" }}
              />

              {/* Layer 3: concentric rings for depth */}
              <motion.div
                className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400/40 to-purple-500/40 blur-3xl"
                style={{ transform: "translateZ(60px)" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-tr from-pink-500/40 to-orange-500/40 blur-3xl"
                style={{ transform: "translateZ(40px)" }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Layer 4: floating stats card - Enhanced glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 backdrop-blur-xl bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-orange-900/90 dark:from-purple-900/80 dark:via-pink-900/80 dark:to-orange-900/80 border-2 border-purple-500/50 dark:border-purple-400/40 rounded-xl p-4 sm:p-5 shadow-2xl shadow-purple-500/50 dark:shadow-purple-900/60"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Video className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[hsl(217,91%,75%)] transition-colors" aria-hidden="true" />
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">10K+</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-white/90 font-medium">Videos Edited</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center border-x border-border/50"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                      <Film className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[hsl(217,91%,75%)] transition-colors" aria-hidden="true" />
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">24-48h</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-white/90 font-medium">Turnaround Time</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[hsl(217,91%,75%)] transition-colors" aria-hidden="true" />
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">98%</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-white/90 font-medium">Client Satisfaction</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[hsl(330,81%,60%)]/20 dark:bg-[hsl(330,81%,60%)]/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[hsl(217,91%,60%)]/10 dark:bg-[hsl(217,91%,60%)]/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute top-1/2 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-[hsl(217,91%,60%)]/10 dark:bg-[hsl(217,91%,60%)]/20 rounded-full blur-2xl"
              animate={{
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
      
    </motion.section>
  );
};
