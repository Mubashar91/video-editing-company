import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma Rodriguez",
    company: "Luxe Beauty Co.",
    role: "Founder",
    content: "Our rebrand feels premium and consistent across web, packaging, and socials. The guidelines make every new asset easy to produce.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Peak Performance Coaching",
    role: "CEO",
    content: "The UI/UX refresh boosted conversions and made mobile actually delightful. We’re getting more qualified inquiries every week.",
    rating: 5
  },
  {
    name: "Sophie Martens",
    company: "Urban Eats",
    role: "Marketing Lead",
    content: "Motion templates and a social kit 3×'d our output. Everything looks on‑brand—and it performs.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <motion.section 
      id="testimonials"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-[hsl(250,50%,20%)] dark:text-foreground">
            Trusted by <span className="bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(220,90%,60%)] bg-clip-text text-transparent">Brands That Create</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            Real design outcomes—premium branding, conversion‑focused UI/UX, and scroll‑stopping content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:border-[hsl(270,80%,65%)] dark:hover:border-[hsl(270,80%,65%)] hover:shadow-[0_20px_60px_-15px_rgba(167,139,250,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-card-foreground dark:text-[hsl(270,80%,85%)] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-[hsl(250,50%,20%)] dark:text-white">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)]">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-[hsl(220,90%,60%)] dark:text-[hsl(270,80%,85%)]">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-[hsl(270,80%,65%)] dark:hover:border-[hsl(270,80%,65%)] hover:shadow-[0_20px_60px_-15px_rgba(167,139,250,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-left">
            <span className="inline-block px-3 py-1 bg-[hsl(250,100%,98%)] dark:bg-[hsl(250,45%,20%)]/50 text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Success Story
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[hsl(250,50%,20%)] dark:text-white">
              Case Study: <span className="bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(220,90%,60%)] bg-clip-text text-transparent">450% Organic Traffic Growth in 6 Months</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[hsl(250,30%,50%)] dark:text-[hsl(270,80%,85%)] mb-5 sm:mb-6 leading-relaxed max-w-3xl">
              See how an e-commerce store went from 2K to 11K monthly organic visitors and turned SEO into their #1 revenue channel.
            </p>
            <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(220,90%,60%)] text-white hover:from-[hsl(270,85%,70%)] hover:to-[hsl(220,95%,65%)] transition-all duration-300 hover:scale-105 font-semibold border-0">
              View Full Case Study
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};