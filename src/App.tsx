/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Shield, Activity, Users, Zap, LayoutGrid, Scale, FileX, ShieldX, Baby, Clock, TrendingDown } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-navy font-sans selection:bg-accent/20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-navy/95 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-display font-bold text-xl tracking-tight">NYAYA SETU</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#crisis" className="hover:text-white transition-colors">The Crisis</a>
            <a href="#framework" className="hover:text-white transition-colors">Architecture</a>
            <a href="#impact" className="hover:text-white transition-colors">Impact</a>
          </div>
          <button className="bg-accent hover:bg-sky-400 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-mono uppercase tracking-wider mb-6">
              <Activity className="w-4 h-4" />
              <span>The Infrastructure of Access</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Dismantling systemic invisibilization for India's marginalized workers.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl leading-relaxed font-light">
              We build the scalable, secure technological infrastructure that connects marginalized populations to the rights guaranteed to them under Article 21 of the Indian Constitution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-sky-400 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
                Explore The Architecture <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all">
                Read the Strategy
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Demographic Reality (Quote/Vision) */}
      <section id="vision" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight text-navy">
              "We cannot change societal prejudice overnight. <br className="hidden md:block"/> But we can build technological infrastructure that bypasses it immediately."
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left mt-16 pt-16 border-t border-slate-200">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">The Demographic Reality</h3>
              <p className="text-slate-600 leading-relaxed">
                India possesses one of the world's largest informal economies. Within its deepest shadows exist populations systematically denied their right to exist—including an estimated 3 million sex workers, human trafficking survivors, and coerced manual laborers.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">The Paradox</h3>
              <p className="text-slate-600 leading-relaxed">
                These individuals are trapped: highly visible to exploiters, law enforcement, and abusers, yet completely invisible to the healthcare, legal, and financial systems designed to protect citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis (4 Problems) */}
      <section id="crisis" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">The Crisis of Invisibilization</h2>
            <p className="text-lg text-slate-600 max-w-2xl">The tragedy is not an absence of aid. Grassroots initiatives exist. The true crisis is fragmentation, stigma, and systemic entrapment.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <FileX className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">1. The Identity Paradox</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                In modern India, identity (Aadhaar, PAN) is mandatory for existence. But for marginalized workers, identity is weaponized against them. Registering at a hospital reveals their address and occupation, resulting in denial of care or police reports.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">2. Operational Silos</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Systems are reactive and heavily isolated, creating an immense <strong>"Friction Tax."</strong> A victim must visit 4 different hostile government offices to receive post-assault care, legal counsel, and financial aid. The system is designed to fail.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldX className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">3. Unreported Violence</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Because of deeply adversarial relationships with law enforcement (weaponization of ITPA), victims cannot safely dial 100 or file an FIR. This blackout of crime reporting creates absolute zones of impunity for predators.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">4. Generational Trauma</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Stigma forcefully entraps the next generation. Children born in red-light districts face insurmountable hurdles in school admissions because schools routinely demand identification that mothers cannot safely provide, guaranteeing the cycle continues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Layer Framework */}
      <section id="framework" className="py-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The NyayaSetu Framework</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A proprietary, vertically integrated 4-Layer System. Charity provides temporary relief; infrastructure provides permanent access. We are building the rails for independence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "1. Identity",
                title: "Shadow Identity System (SIS™)",
                desc: "An anonymous, portable ID (decentralized numeric identifier) that decouples essential access from dangerous occupational disclosure. Zero-surveillance access.",
                icon: Shield
              },
              {
                step: "2. Intelligence",
                title: "Live Risk Grid (LRG™)",
                desc: "A real-time, predictive safety layer mapping high-risk zones using anonymized distress signals to prevent violence before it happens.",
                icon: Activity
              },
              {
                step: "3. Intervention",
                title: "Response Chain Protocol (RCP™)",
                desc: "A discrete panic routing system connecting victims to vetted, pro-bono responders, bypassing hostile police forces entirely.",
                icon: Zap
              },
              {
                step: "4. Independence",
                title: "Economic Stability Base",
                desc: "Micro-insurance and anonymous financial off-ramps designed specifically to break dependency cycles on traffickers and brothel owners.",
                icon: Scale
              }
            ].map((layer, idx) => (
              <div key={idx} className="bg-navy-light border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-16 text-accent group-hover:scale-110 transition-transform">
                  <layer.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-accent mb-2 uppercase tracking-wider">{layer.step}</div>
                <h3 className="font-display text-xl font-bold mb-3">{layer.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16 border-b border-slate-200 pb-12">
            <div className="flex-1">
              <h2 className="font-display text-4xl font-bold mb-4">Strategic Impact</h2>
              <p className="text-lg text-slate-600">NyayaSetu relies on strict, verifiable data to prove systemic change, moving away from "feel-good" metrics to rigorous structural KPIs.</p>
            </div>
            <div className="flex bg-slate-50 p-2 rounded-2xl border border-slate-200">
              <div className="px-6 py-3 text-sm font-medium">Projected Timeline: 2026</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="font-display text-5xl md:text-6xl font-light text-navy mb-2 tracking-tighter">60<span className="text-accent">%</span></div>
              <h4 className="font-bold text-sm uppercase tracking-wide text-slate-500 mb-2">Friction Reduction</h4>
              <p className="text-sm text-slate-600">Increase in clinic registrations for STI/HIV testing using anonymous SIS IDs.</p>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl font-light text-navy mb-2 tracking-tighter">&lt;45<span className="text-accent text-3xl ml-1">min</span></div>
              <h4 className="font-bold text-sm uppercase tracking-wide text-slate-500 mb-2">Legal Access Speed</h4>
              <p className="text-sm text-slate-600">Time to securely connect with a pro-bono lawyer (down from 3 weeks).</p>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl font-light text-navy mb-2 tracking-tighter">30<span className="text-accent">%</span></div>
              <h4 className="font-bold text-sm uppercase tracking-wide text-slate-500 mb-2">Violence De-escalation</h4>
              <p className="text-sm text-slate-600">Drop in severe physical trauma incidents utilizing Live Risk Grid heatmaps.</p>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl font-light text-navy mb-2 tracking-tighter">40<span className="text-accent">%</span></div>
              <h4 className="font-bold text-sm uppercase tracking-wide text-slate-500 mb-2">Economic Independence</h4>
              <p className="text-sm text-slate-600">Reduction of predatory loan dependency among users in micro-insurance buffers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Ecosystem Integration */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-display text-4xl font-bold mb-4">Ecosystem Alignment</h2>
            <p className="text-lg text-slate-600">We do not seek to replace grassroots organizations. We are the technological bridge that unifies them.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
            <div className="bg-white p-8 border border-slate-200 rounded-tl-3xl">
              <h3 className="text-xl font-bold font-display mb-2">Grassroots NGOs</h3>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">The Boots on the Ground</p>
              <p className="text-slate-600">They utilize our infrastructure to route resources efficiently, reducing overhead and increasing intervention success.</p>
            </div>
            <div className="bg-white p-8 border border-slate-200 rounded-tr-3xl">
              <h3 className="text-xl font-bold font-display mb-2">Legal Aid Networks</h3>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">The Defenders</p>
              <p className="text-slate-600">Paralegals receive streamlined, anonymized data, allowing them to file petitions without exposing the victim's identity.</p>
            </div>
            <div className="bg-white p-8 border border-slate-200 rounded-bl-3xl">
              <h3 className="text-xl font-bold font-display mb-2">Government & NACO</h3>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">The Institutional Backing</p>
              <p className="text-slate-600">We align with state health schemes to provide the "last-mile" reach that government bodies struggle to achieve.</p>
            </div>
            <div className="bg-white p-8 border border-slate-200 rounded-br-3xl">
              <h3 className="text-xl font-bold font-display mb-2">CSR & Philanthropy</h3>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">The Financial Engine</p>
              <p className="text-slate-600">Corporations fund the infrastructure and receive rigorous, data-driven reports on systemic impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-navy pt-24 pb-12 text-center text-white">
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-display font-medium text-4xl mb-6">
            "We don't measure success by how many people we help... but by how many people no longer need to struggle for access."
          </h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest uppercase mt-8">— Nyaya Setu | 2026</p>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 text-sm text-slate-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="w-5 h-5 text-accent" />
            <span className="font-display font-bold tracking-tight text-white">NYAYA SETU</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
