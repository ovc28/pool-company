import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Droplets, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';

const reviews = [
  { name: "James Wilson", text: "Best pool service in Sydney. Crystal clear water every time.", rating: 5 },
  { name: "Sarah Thompson", text: "Reliable, professional, and worth every penny.", rating: 5 },
  { name: "Michael Chen", text: "Transformed our green pool into a luxury oasis in 2 days.", rating: 5 },
  { name: "Emma Davis", text: "The team is incredible. Highly recommend their weekly maintenance.", rating: 5 },
  { name: "David Miller", text: "Transparent pricing and excellent communication.", rating: 5 },
];

const trustBadges = [
  "SPASA Member",
  "Fully Insured",
  "Certified Technicians",
  "Eco-Friendly Chemicals",
  "Google Guaranteed"
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Droplets className="text-white size-6" />
            </div>
            <span className="text-xl font-medium tracking-tight">Crystal Clear</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Reviews</a>
            <button className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all active:scale-95">
              Book Now
            </button>
          </div>

          <button className="md:hidden text-white">
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0D0D0D] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Pool" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium mb-6 tracking-widest uppercase">
              Premium Pool Care
            </span>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[1.05] mb-8">
              Sydney's Most Trusted <br /> <span className="italic font-serif">Pool Care</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the luxury of a crystal-clear pool without the effort. 
              Professional maintenance for Sydney's finest residences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-white/90 transition-all active:scale-95 shadow-2xl shadow-white/10">
                Book a Clean Instantly
              </button>
              <button className="w-full sm:w-auto px-10 py-5 glass rounded-full text-lg font-semibold hover:bg-white/20 transition-all active:scale-95">
                View Services
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Trust Banner (Marquee) */}
      <div className="relative z-30 -mt-12 py-12 bg-white text-black overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="flex items-center gap-4 whitespace-nowrap px-8 border-r border-black/5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-medium text-sm">"{review.text}"</span>
                <span className="text-xs text-black/40">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16 px-6 opacity-50 grayscale">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <ShieldCheck className="size-5" />
              <span className="text-xs font-bold uppercase tracking-widest">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              Complete care for your <br /> backyard oasis.
            </h2>
            <p className="text-white/50 text-lg font-light">
              From routine cleaning to complex equipment repairs, we handle everything 
              so you can just jump in and enjoy.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
            View all services <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Regular Maintenance",
              desc: "Weekly or fortnightly visits to keep your pool pristine year-round.",
              icon: Clock,
              img: "https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Green Pool Recovery",
              desc: "Professional chemical balancing to restore clarity to neglected pools.",
              icon: Droplets,
              img: "https://images.unsplash.com/photo-1554110397-9bac083977c6?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Equipment Repair",
              desc: "Expert diagnosis and repair of pumps, filters, and chlorinators.",
              icon: ShieldCheck,
              img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6">
                  <service.icon className="text-white size-6" />
                </div>
                <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group/btn">
                  Learn More <ChevronRight className="size-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 md:px-12 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Pricing Plans</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              Invest in your <span className="italic font-serif">peace of mind.</span>
            </h2>
            <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
              Simple, transparent pricing for every type of pool and lifestyle. 
              No long-term contracts, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "79",
                period: "month",
                desc: "Essential care for well-maintained pools.",
                features: ["Monthly service visit", "Chemical balancing", "Filter cleaning", "Water health report"],
                accent: false
              },
              {
                name: "Premium",
                price: "149",
                period: "month",
                desc: "Our most popular plan for busy families.",
                features: ["Fortnightly service visits", "Full robotic vacuum", "Tile & wall scrubbing", "Equipment health check", "Surface skimming"],
                accent: true
              },
              {
                name: "Luxury",
                price: "249",
                period: "month",
                desc: "The ultimate hands-off pool experience.",
                features: ["Weekly service visits", "All chemicals included", "Priority support", "24/7 Emergency callouts", "System automation check"],
                accent: false
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={cn(
                  "p-10 rounded-[40px] flex flex-col h-full transition-all duration-500",
                  plan.accent ? "bg-white text-black scale-105 shadow-2xl shadow-white/10" : "glass text-white"
                )}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                  <p className={cn("text-sm font-light", plan.accent ? "text-black/60" : "text-white/60")}>{plan.desc}</p>
                </div>
                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-light">${plan.price}</span>
                    <span className={cn("text-sm font-light", plan.accent ? "text-black/40" : "text-white/40")}>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-light">
                      <CheckCircle2 className={cn("size-4", plan.accent ? "text-accent" : "text-accent")} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all active:scale-95",
                  plan.accent ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90"
                )}>
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000" 
                  alt="Pool Professional" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass bg-accent/90 p-10 rounded-[32px] text-white hidden md:block">
                <div className="text-5xl font-light mb-2">15+</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-80">Years of Experience</div>
              </div>
            </div>
            
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-10">
                The standard for <br /> excellence in pool care.
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Expert Technicians", desc: "Our team is highly trained and certified to handle all pool types." },
                  { title: "Transparent Pricing", desc: "No hidden fees. You'll know exactly what you're paying for." },
                  { title: "Guaranteed Results", desc: "If you're not happy with the clean, we'll come back for free." },
                  { title: "Smart Scheduling", desc: "Real-time updates and easy booking through our platform." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-accent size-4" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                      <p className="text-black/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent/5 -z-10" />
          <h2 className="text-4xl md:text-7xl font-light tracking-tight mb-8">
            Ready for a <br /> <span className="italic font-serif">perfect swim?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Join hundreds of Sydney homeowners who trust us with their pools. 
            Book your first clean today and see the difference.
          </p>
          <button className="px-12 py-6 bg-white text-black rounded-full text-xl font-semibold hover:bg-white/90 transition-all active:scale-95">
            Book Your Clean Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Droplets className="text-white size-4" />
                </div>
                <span className="text-lg font-medium tracking-tight">Crystal Clear</span>
              </div>
              <p className="text-white/40 max-w-sm font-light leading-relaxed">
                Sydney's premier pool maintenance and repair service. 
                Dedicated to keeping your luxury pool pristine and healthy.
              </p>
            </div>
            
            <div>
              <h5 className="text-sm font-bold uppercase tracking-widest mb-8">Contact</h5>
              <ul className="space-y-4 text-white/50 font-light text-sm">
                <li className="flex items-center gap-3"><Phone className="size-4" /> 1300 POOL CARE</li>
                <li className="flex items-center gap-3"><MapPin className="size-4" /> Sydney, NSW</li>
                <li>hello@crystalclear.com.au</li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold uppercase tracking-widest mb-8">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram className="size-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Facebook className="size-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Twitter className="size-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <span className="text-white/20 text-xs tracking-widest uppercase">© 2024 Crystal Clear Pools. All rights reserved.</span>
            <div className="flex gap-8 text-white/20 text-xs tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
