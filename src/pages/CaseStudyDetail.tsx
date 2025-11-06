import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { caseStudies } from "@/components/CaseStudies";

const CaseStudyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const caseStudy = caseStudies.find(cs => cs.id === Number(id));

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-section-bg text-foreground">
      <Navbar />
      
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/60 hover:bg-card/80 transition-colors font-medium group px-3 py-2 rounded-md text-foreground"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-10">
              {/* Industry badge */}
              <span className="inline-block px-3 py-1 bg-foreground/5 text-foreground text-xs font-semibold rounded-full mb-4 border border-border">
                {caseStudy.industry}
              </span>
              
              <h1 className="section-heading mb-4">
                {caseStudy.title}
              </h1>

              <div className="flex items-center gap-3 text-base text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{caseStudy.company}</span>
                <span>•</span>
                <span>{caseStudy.industry}</span>
              </div>

              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8 border border-border">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              {/* Key Stats (aligned with component stats fields) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-card border border-border rounded-lg p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{caseStudy.stats.mainResult}</div>
                  <div className="text-xs text-muted-foreground">Main Result</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{caseStudy.stats.timeframe}</div>
                  <div className="text-xs text-muted-foreground">Timeframe</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{caseStudy.stats.seoFocus}</div>
                  <div className="text-xs text-muted-foreground">Focus</div>
                </div>
              </div>
            </div>

            {/* Challenge Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                The Challenge
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                The Solution
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                The Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-5"
                  >
                    <div className="text-3xl font-bold text-gold mb-2">{result.value}</div>
                    <div className="text-base font-semibold text-foreground mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mb-10">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-muted-foreground/30" />
                <p className="text-base sm:text-lg text-foreground mb-5 leading-relaxed italic">
                  "{caseStudy.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold">
                    {caseStudy.testimonialAuthor.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{caseStudy.testimonialAuthor}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.testimonialRole}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-card/70 border border-border rounded-2xl p-8 sm:p-10 md:p-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-border rounded-full mb-4">
                  <CheckCircle2 className="w-4 h-4 text-foreground" />
                  <span className="text-xs font-bold text-foreground">Success Awaits</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Ready to Achieve <span className="gradient-heading">Similar Results?</span>
                </h3>
                
                <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  Book a free 15-minute editing consultation and see how we boost retention, pace, and polish across your videos.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <button
                    onClick={() => navigate('/book-meeting')}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 hover:opacity-95 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </button>
                  
                  <button
                    onClick={() => navigate('/')}
                    className="w-full sm:w-auto px-8 py-4 bg-foreground/10 text-foreground border border-border hover:bg-foreground/20 font-semibold rounded-xl transition-all duration-300"
                  >
                    View All Case Studies
                  </button>
                </div>
                
                <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                    <span>No Commitment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                    <span>15 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                    <span>100% Free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="mt-12 pt-10 border-t border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">More Success Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {caseStudies.filter(cs => cs.id !== caseStudy.id).slice(0, 2).map((relatedStudy) => (
                  <div
                    key={relatedStudy.id}
                    onClick={() => navigate(`/case-study/${relatedStudy.id}`)}
                    className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-foreground/50 hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={relatedStudy.image}
                      alt={relatedStudy.company}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <span className="text-xs text-muted-foreground font-semibold">{relatedStudy.industry}</span>
                      <h4 className="text-base font-bold mt-2 mb-1 text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                        {relatedStudy.company}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedStudy.challenge}</p>
                      <div className="mt-2 text-sm text-foreground font-semibold flex items-center gap-1">
                        View Case Study
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
