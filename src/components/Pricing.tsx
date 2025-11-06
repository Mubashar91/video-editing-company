import { Button } from "@/components/ui/button";
import { Check, Star, Gift, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Constants
const MAX_VA_COUNT = 10;
const BULK_DISCOUNT_THRESHOLD = 3;
const BULK_DISCOUNT_RATE = 0.03;

// TypeScript Interface
interface PricingPlan {
  name: string;
  hours: string;
  price: number;
  setupFee: number;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Shortform",
    hours: "4-8 videos/month",
    price: 399,
    setupFee: 0,
    features: [
      "TikTok, Reels, Shorts editing",
      "Fast-paced cuts & transitions",
      "Trending effects & filters",
      "Captions & text overlays",
      "24-hour turnaround"
    ],
    highlighted: false
  },
  {
    name: "Creator",
    hours: "8-12 videos/month",
    price: 799,
    setupFee: 0,
    badge: "Most Popular",
    features: [
      "Everything in Shortform",
      "YouTube longform videos (10-20 min)",
      "Color grading & correction",
      "Motion graphics & titles",
      "Audio mixing & enhancement",
      "48-hour turnaround"
    ],
    highlighted: true
  },
  {
    name: "Professional",
    hours: "Unlimited videos",
    price: 1499,
    setupFee: 0,
    badge: "Best Value",
    features: [
      "Everything in Creator",
      "Dedicated video editor",
      "Advanced VFX & animations",
      "Custom brand templates",
      "Priority 24-hour delivery",
      "Unlimited revisions"
    ],
    highlighted: false
  }
];

export const Pricing = () => {
  const [vaCount, setVaCount] = useState(1);
  
  const calculateDiscount = (count: number) => {
    return count >= BULK_DISCOUNT_THRESHOLD ? BULK_DISCOUNT_RATE : 0;
  };
  
  const discount = calculateDiscount(vaCount);
  const totalPrice = plans.reduce((sum, plan) => sum + plan.price, 0) * vaCount;
  const savings = discount > 0 ? Math.round(totalPrice * discount) : 0;
  
  // Calculate average price per VA per hour
  const avgHoursPerWeek = 20; // Professional plan baseline
  const avgPricePerVA = plans[1].price; // Professional plan price

  return (
    <motion.section 
      id="pricing"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 text-foreground z-10 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 shadow-[0_8px_24px_-6px_rgba(168,85,247,0.6)] border border-white/30 backdrop-blur-sm relative overflow-hidden animate-pulse"
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50"></span>
            <span className="relative z-10">Transparent Pricing</span>
          </motion.span>
          <h2 className="section-heading">
            Video Editing <span className="gradient-heading">Packages</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Choose a plan that fits your content needs. Professional editing with transparent pricing. No hidden fees.
          </p>
        </motion.div>

        {/* 15-Minute Free Call Banner */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="relative overflow-hidden rounded-3xl p-[3px] shadow-[0_20px_50px_-12px_rgba(168,85,247,0.2)] hover:shadow-[0_25px_60px_-12px_rgba(168,85,247,0.3)] transition-all duration-300 border border-border">
            <div className="relative rounded-3xl p-8 sm:p-10 bg-card backdrop-blur-xl border border-border">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[hsl(221,54%,53%)]/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[hsl(217,89%,61%)]/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4 text-center sm:text-left flex-1">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground dark:text-white">
                      Free 15‑Minute Consultation
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground dark:text-white/80 leading-relaxed">
                      Get expert advice on video editing, content strategy, and production workflow before choosing a plan.
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="flex-shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 font-bold shadow-lg px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg border-0 rounded-xl"
                  onClick={() => window.location.href = '/book-meeting'}
                >
                  Book Free Call →
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Free Trial Banner */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-3xl p-[3px] shadow-[0_20px_50px_-12px_rgba(16,185,129,0.2)] hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.3)] transition-all duration-300 border border-border">
            <div className="relative bg-card backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-border">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(199,89%,48%)]/5 via-transparent to-[hsl(217,89%,61%)]/5 rounded-3xl" />
              <motion.div 
                className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[hsl(199,89%,48%)]/20 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-5 text-center sm:text-left flex-1">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/50 relative"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Gift className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-[hsl(43,92%,50%)] rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground dark:text-white">
                      First Video 50% Off
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-white/80 leading-relaxed">
                      New customers get <span className="font-bold text-[hsl(199,89%,48%)] dark:text-[hsl(199,89%,60%)] px-2 py-0.5 bg-[hsl(199,89%,48%)]/10 dark:bg-[hsl(199,89%,48%)]/20 rounded-md">50% off</span> their first video edit. Experience our quality risk-free.
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="flex-shrink-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 font-bold shadow-xl px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg border-0 rounded-xl"
                  onClick={() => window.location.href = '/book-meeting'}
                >
                  Claim 50% Off →
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                rotateY: 3,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25
                }
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              {/* Animated gradient border for highlighted plan */}
              {plan.highlighted && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-brand via-brand to-brand rounded-2xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              )}
              
              <div className={`relative rounded-3xl p-8 sm:p-10 md:p-12 transition-all duration-500 group h-full bg-card/80 backdrop-blur-xl text-foreground dark:text-white border border-border hover:border-[hsl(var(--brand-blue))]/40 dark:hover:border-[hsl(var(--brand-blue))]/40 hover:shadow-[0_30px_80px_-15px_hsl(217_91%_60%/0.2)] dark:hover:shadow-[0_30px_80px_-15px_rgba(59,130,246,0.25)] overflow-hidden`}>
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, hsl(221,54%,53%,0.08) 0%, transparent 60%)'
                  }}
                />
                
                {/* Top accent line with animation */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl ${
                    plan.highlighted ? 'bg-gradient-to-r from-[hsl(221,54%,53%)] via-[hsl(217,89%,61%)] to-[hsl(221,54%,53%)]' : 'bg-gradient-to-r from-transparent via-[hsl(221,54%,53%)] to-transparent'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  animate={plan.highlighted ? {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  } : {}}
                  style={plan.highlighted ? { backgroundSize: '200% 100%' } : {}}
                />
              
                {plan.badge && (
                  <motion.div 
                    className="absolute -top-5 right-6 px-5 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 bg-gradient-to-r from-[hsl(221,54%,53%)] to-[hsl(217,89%,61%)] text-white border-2 border-white/20 relative overflow-hidden"
                    initial={{ y: -15, opacity: 0, scale: 0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-4 h-4 fill-current drop-shadow-lg" />
                    </motion.div>
                    <span className="drop-shadow-sm">{plan.badge}</span>
                  </motion.div>
                )}
              
                {/* Header */}
                <div className="mb-8 relative z-10">
                  <motion.h3 
                    className="text-3xl sm:text-4xl font-bold mb-3 text-foreground dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 400 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-[hsl(221,54%,53%)] dark:text-[hsl(217,89%,61%)]">
                      {plan.hours}
                    </p>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[hsl(221,54%,53%)]/10 to-[hsl(217,89%,61%)]/10 dark:from-[hsl(221,54%,53%)]/20 dark:to-[hsl(217,89%,61%)]/20 text-[hsl(221,54%,53%)] dark:text-[hsl(217,89%,61%)] border border-[hsl(221,54%,53%)]/20">
                      Video Editing
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b-2 border-[hsl(221,54%,53%)]/10 dark:border-[hsl(221,54%,53%)]/20 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-medium text-muted-foreground">
                      $
                    </span>
                    <motion.span 
                      className="text-6xl sm:text-7xl font-black tracking-tighter bg-gradient-to-br from-[hsl(221,54%,53%)] to-[hsl(217,89%,61%)] bg-clip-text text-transparent"
                      initial={{ scale: 0.5, opacity: 0, y: 20 }}
                      whileInView={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-lg font-medium text-muted-foreground">
                      /month
                    </span>
                  </div>
                  {plan.setupFee > 0 ? (
                    <p className="text-sm mt-3 text-muted-foreground">
                      + ${plan.setupFee} setup fee
                    </p>
                  ) : (
                    <motion.p 
                      className="text-sm mt-3 font-semibold flex items-center gap-2 text-green-600 dark:text-green-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Check className="w-4 h-4" />
                      No setup fee required
                    </motion.p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 relative z-10">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + fIndex * 0.1 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-gradient-to-br from-[hsl(221,54%,53%)] to-[hsl(217,89%,61%)] shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Check className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                      <span className="text-base leading-relaxed text-card-foreground dark:text-white font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = '/book-meeting'}
                    className={`w-full relative z-10 font-bold text-lg py-7 sm:py-8 rounded-2xl transition-all duration-300 group/btn overflow-hidden min-h-[56px] ${plan.highlighted ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)]' : 'bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500'} text-white hover:shadow-[0_15px_50px_-10px_rgba(168,85,247,0.8)] border-0`}
                    aria-label={`Get started with ${plan.name} plan - ${plan.hours} at ${Math.round(plan.price * (1 - discount) * vaCount)} per month`}
                  >
                    {/* Animated background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
    className="text-center text-muted-foreground mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    All plans are billed monthly with no long-term contracts. Upgrade or downgrade anytime. Typical turnaround 24–48h depending on complexity.
        </motion.p>
      </div>
    </motion.section>
  );
};