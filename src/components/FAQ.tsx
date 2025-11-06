import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Shield, Zap } from "lucide-react";

const faqs = [
  {
    question: "What video formats do you support?",
    answer: "We work with all major formats: MP4, MOV, AVI, MKV, ProRes, and RAW footage from any camera. We deliver in your preferred format optimized for each platform (YouTube, TikTok, Instagram, etc.)."
  },
  {
    question: "What's the difference between shortform and longform editing?",
    answer: "Shortform (under 60 seconds) focuses on fast-paced cuts, trending effects, and viral content for TikTok/Reels/Shorts. Longform (10-60 minutes) emphasizes storytelling, pacing, and comprehensive post-production for YouTube and documentaries."
  },
  {
    question: "How do you ensure my footage is secure?",
    answer: "We use enterprise-grade encrypted cloud storage, secure file transfer protocols, NDAs for all projects, and automatic deletion after delivery. Your content remains completely confidential."
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Shortform videos: 24 hours. Longform videos: 48-72 hours. Rush delivery available for urgent projects. Complex projects with heavy VFX may require additional time."
  },
  {
    question: "Do you provide unlimited revisions?",
    answer: "Yes! All plans include unlimited revisions until you're 100% satisfied. We work closely with you to ensure the final video matches your vision perfectly."
  },
  {
    question: "What software do you use for editing?",
    answer: "We use industry-standard tools: Adobe Premiere Pro, After Effects, DaVinci Resolve for color grading, and Audition for audio. We can also work with Final Cut Pro if preferred."
  },
  {
    question: "Can you add music and sound effects?",
    answer: "Absolutely! We have access to premium royalty-free music libraries and sound effects. We can also work with your provided music or create custom audio mixing and sound design."
  }
];

export const FAQ = () => {
  return (
    <motion.section 
      id="faq"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 hero-section-bg z-80 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge - Centered */}
            <motion.div 
              className="flex justify-center mb-5 sm:mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <div className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 backdrop-blur-sm rounded-full text-sm font-semibold text-white flex items-center gap-2 border border-white/30 shadow-lg shadow-purple-500/50 animate-pulse">
                <HelpCircle className="w-4 h-4" />
                <span>Video Editing FAQs</span>
              </div>
            </motion.div>

            {/* Heading - Centered */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-foreground dark:text-white px-2" style={{ textAlign: 'center' }}>
              Frequently Asked <span className="gradient-heading">Questions</span>
            </h2>
            {/* Description - Centered */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-card-foreground/80 max-w-2xl leading-relaxed px-2 text-center mx-auto">
              Everything you need to know about our Video Editing services—formats, turnaround times, revisions, security, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="group bg-card border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold text-cyan-700 dark:text-cyan-400 py-5 sm:py-6 hover:no-underline group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      <span className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold mt-0.5 shadow-lg shadow-cyan-500/50">
                          {index + 1}
                        </span>
                        <span className="flex-1">{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-card-foreground dark:text-card-foreground/85 leading-relaxed pt-2 pb-5 sm:pb-6 pl-9 sm:pl-10">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div 
            className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="p-5 sm:p-6 bg-card border border-border rounded-xl sm:rounded-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-card rounded-xl transition-colors">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground dark:text-white mb-1.5">
                    Security & Privacy
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-card-foreground/80 leading-relaxed">
                    Encrypted cloud storage, secure file transfers, NDAs for all projects, and automatic content deletion after delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-card border border-border rounded-xl sm:rounded-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-card rounded-xl transition-colors">
                  <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground dark:text-white mb-1.5">
                    Complete Video Production
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-card-foreground/80 leading-relaxed">
                    Cutting & Editing • Color Grading • Motion Graphics • Audio Mixing • VFX • Platform Optimization
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div 
            className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-card border border-border rounded-xl sm:rounded-2xl text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground dark:text-white mb-2">
              Still have questions?
            </p>
            <p className="text-sm sm:text-base text-muted-foreground dark:text-card-foreground/80 mb-4 sm:mb-5">
              Our editing team is here to help. Get in touch and we'll respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 border-0 shadow-lg shadow-cyan-500/50"
              >
                Contact Support
              </a>
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};