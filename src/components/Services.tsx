import { Palette, Layout, Package, Smartphone, Video, Sparkles } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete brand systems including logos, color palettes, typography, and brand guidelines that make you unforgettable",
    benefit: "Stand out boldly"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered interfaces and experiences that are beautiful, intuitive, and conversion-focused for web and mobile",
    benefit: "Delight users"
  },
  {
    icon: Package,
    title: "Marketing Materials",
    description: "Eye-catching brochures, flyers, social media graphics, presentations, and print designs that drive engagement",
    benefit: "Boost engagement"
  },
  {
    icon: Smartphone,
    title: "Digital Design",
    description: "Website designs, landing pages, email templates, and digital ads optimized for modern devices and platforms",
    benefit: "Convert visitors"
  },
  {
    icon: Video,
    title: "Motion Graphics",
    description: "Animated logos, explainer videos, social media animations, and motion design that brings your brand to life",
    benefit: "Captivate audiences"
  },
  {
    icon: Sparkles,
    title: "Creative Consulting",
    description: "Strategic design direction, brand audits, creative workshops, and ongoing design support for your team",
    benefit: "Expert guidance"
  }
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      id="services"
      className="relative py-8 sm:py-10 md:py-14 lg:py-16 bg-background text-foreground z-30 overflow-hidden min-h-[500px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-10 right-5 w-64 h-64 sm:top-16 sm:right-8 sm:w-80 sm:h-80 md:top-20 md:right-10 md:w-96 md:h-96 bg-gold/5 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-10 left-5 w-56 h-56 sm:bottom-16 sm:left-8 sm:w-72 sm:h-72 md:bottom-20 md:left-10 md:w-80 md:h-80 bg-gold/5 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative z-10 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-br from-[hsl(270,80%,65%)] via-[hsl(260,85%,60%)] to-[hsl(220,90%,60%)] text-white text-xs sm:text-sm md:text-base font-semibold rounded-full mb-3 sm:mb-4">
            Our Design Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 px-2 text-[hsl(250,50%,20%)] dark:text-foreground">
            Creative Services That <span className="bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(220,90%,60%)] bg-clip-text text-transparent">Elevate</span> Your Brand
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2">
            From brand identity to digital experiences—comprehensive design solutions that make your brand memorable and drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] text-[hsl(250,50%,20%)] dark:text-white border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 p-5 sm:p-6 md:p-7 lg:p-9 xl:p-10 rounded-xl sm:rounded-2xl hover:border-[hsl(270,80%,65%)] dark:hover:border-[hsl(270,80%,65%)] hover:shadow-[0_25px_80px_-20px_rgba(167,139,250,0.25)] dark:hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 group overflow-hidden"
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
                y: -15, 
                scale: 1.03,
                rotateY: 5,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,95%)]/30 dark:from-[hsl(270,80%,65%)]/30 via-[hsl(250,100%,98%)]/20 dark:via-[hsl(250,45%,20%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-5 lg:gap-6 relative z-10">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[hsl(270,80%,65%)] via-[hsl(260,85%,60%)] to-[hsl(220,90%,60%)] text-white ring-1 ring-[hsl(270,80%,65%)]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_18px_40px_-12px_rgba(167,139,250,0.6)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </motion.div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-3 text-[hsl(250,50%,20%)] dark:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-sm lg:text-base text-[hsl(250,30%,50%)] dark:text-[hsl(270,80%,85%)] mb-3 sm:mb-4 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 bg-[hsl(250,100%,98%)] dark:bg-[hsl(250,45%,20%)]/50 border border-[hsl(270,80%,65%)]/30 dark:border-[hsl(270,80%,65%)]/50 rounded-full text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)] text-xs sm:text-sm md:text-xs lg:text-sm font-semibold group-hover:bg-gradient-to-r group-hover:from-[hsl(270,80%,65%)] group-hover:to-[hsl(220,90%,60%)] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1.5 sm:mr-2 md:mr-1.5 lg:mr-2" />
                    <span className="leading-none">{service.benefit}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-[hsl(270,80%,65%)]/0 group-hover:border-[hsl(270,80%,65%)]/50 rounded-tr-xl sm:rounded-tr-2xl transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-[hsl(270,80%,65%)]/0 group-hover:border-[hsl(270,80%,65%)]/50 rounded-bl-xl sm:rounded-bl-2xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};