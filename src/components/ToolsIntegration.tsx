import { motion } from "framer-motion";

const tools = [
  { name: "Figma", category: "UI/UX" },
  { name: "FigJam", category: "UI/UX" },
  { name: "Adobe Illustrator", category: "Branding" },
  { name: "Adobe Photoshop", category: "Branding" },
  { name: "Adobe InDesign", category: "Branding" },
  { name: "After Effects", category: "Motion" },
  { name: "Premiere Pro", category: "Motion" },
  { name: "Blender", category: "3D" },
  { name: "Lottie", category: "Motion" },
  { name: "Spline", category: "3D" },
  { name: "Webflow", category: "Web" },
  { name: "Framer", category: "Web" },
  { name: "Zeplin", category: "Handoff" },
  { name: "Avocode", category: "Handoff" },
  { name: "Dropbox", category: "Assets" },
  { name: "Google Drive", category: "Assets" },
  { name: "Notion", category: "Ops" },
  { name: "Slack", category: "Ops" }
];

const categories = ["UI/UX", "Branding", "Motion", "3D", "Web", "Handoff", "Assets", "Ops"];

export const ToolsIntegration = () => {
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
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
            Seamless <span className="bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(220,90%,60%)] bg-clip-text text-transparent">Design Integrations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            We work in your design stack—Figma, Adobe CC, motion/3D, and modern web tools—with clean handoff specs for your dev team.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 rounded-lg p-3 sm:p-4 text-center hover:border-[hsl(270,80%,65%)] dark:hover:border-[hsl(270,80%,65%)] hover:shadow-[0_10px_30px_-10px_rgba(167,139,250,0.25)] dark:hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-[hsl(250,50%,20%)] dark:text-white transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)] mt-1">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-[hsl(250,50%,20%)] dark:text-white mb-3 sm:mb-4">
              <span className="font-bold text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)]">Using a different system?</span> We adapt. 
            </p>
            <p className="text-sm sm:text-base text-[hsl(250,30%,50%)] dark:text-[hsl(270,80%,85%)]">
              Share your format or API—CSV, Sheets, CRM, or DB. We'll match your workflow end‑to‑end.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};