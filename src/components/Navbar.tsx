import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for nav highlighting
  useEffect(() => {
    const items = [
      { id: "services" },
      { id: "how-it-works" },
      { id: "pricing" },
      { id: "testimonials" },
      { id: "faq" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // focus mid viewport
        threshold: 0.1,
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  const getThemeIcon = () => {
    // Default to light if theme is system or undefined
    const currentTheme = theme === "system" || !theme ? "light" : theme;
    return (
      <motion.div
        key={currentTheme}
        initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {currentTheme === "light" ? (
          <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
        ) : (
          <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
        )}
      </motion.div>
    );
  };

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 hero-section-bg ${
        scrolled
          ? "backdrop-blur-2xl border-b border-border/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(147,51,234,0.15)]"
          : "backdrop-blur-xl"
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-[72px] lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <motion.div 
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 10px 25px -5px rgba(0, 123, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-base sm:text-lg md:text-lg lg:text-xl">V</span>
            </motion.div>
            <motion.span 
              className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              VideoPro Studio
            </motion.span>
          </motion.div>

          {/* Desktop Navigation - Show on medium screens and up */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative text-foreground transition-all duration-200 font-semibold text-sm md:text-sm lg:text-base px-2 md:px-2.5 lg:px-3 py-2 rounded-lg hover:bg-foreground/5 dark:hover:bg-white/10 group whitespace-nowrap ${activeSection === item.href.replace('#','') ? 'text-[hsl(var(--brand-blue))]' : ''}`}
                aria-current={activeSection === item.href.replace('#','') ? 'page' : undefined}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-blue))] via-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue))] transition-all duration-300 ${activeSection === item.href.replace('#','') ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`} />
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions - Show on medium screens and up */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-2.5 lg:space-x-3 xl:space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative hover:bg-gold/10 hover:text-gold w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-all duration-300 hover:scale-110 overflow-hidden"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {getThemeIcon()}
                </AnimatePresence>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                variant="gold"
                size="sm"
                onClick={() => window.location.href = '/book-meeting'}
                className="text-sm md:text-sm lg:text-base px-4 md:px-4 lg:px-7 py-2 md:py-2 lg:py-2.5 cursor-pointer bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 dark:from-purple-500 dark:via-pink-400 dark:to-orange-400 dark:hover:from-purple-600 dark:hover:via-pink-500 dark:hover:to-orange-500 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-900/50 transition-all duration-300 hover:scale-105 font-semibold whitespace-nowrap"
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>

          {/* Mobile/Tablet Menu Button - Show on small/medium screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden flex items-center space-x-2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gold/10 hover:text-gold w-9 h-9 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {getThemeIcon()}
              </AnimatePresence>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gold/10 hover:text-gold w-9 h-9 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden hero-section-bg backdrop-blur-xl border-t border-border/50 shadow-lg"
            >
              <div className="py-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`block text-foreground hover:text-[hsl(var(--brand-blue))] hover:bg-[hsl(var(--brand-blue))]/10 active:bg-[hsl(var(--brand-blue))]/20 transition-all duration-200 font-medium py-3 px-4 rounded-lg mx-2 ${activeSection === item.href.replace('#','') ? 'text-[hsl(var(--brand-blue))]' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="pt-3 px-3 border-t border-border/50"
                >
                  <Button
                    variant="gold"
                    onClick={() => window.location.href = '/book-meeting'}
                    className="w-full text-base py-3 cursor-pointer font-semibold bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] hover:opacity-95 text-white border-0 hover:shadow-lg transition-all duration-300"
                  >
                    Book a Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
