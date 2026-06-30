"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { Reveal } from "../components/motion/Reveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const FIELD_CLASS =
  "w-full rounded-xl border border-white/14 bg-black/25 px-4 py-3 transition-colors focus:border-primary/70 focus:bg-black/35 focus:outline-none focus:ring-2 focus:ring-primary/25";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@ztecgroup.au", href: "mailto:info@ztecgroup.au" },
  { icon: Phone, label: "Phone", value: "+61451994192", href: "tel:+61451994192" },
  { icon: MapPin, label: "Address", value: "1 Silas Street, East Fremantle, Perth WA 6158." },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormState("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setFormState("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative pt-24">
      {/* Hero Section */}
      <SectionContainer>
        <div className="relative flex min-h-[100svh] items-center py-8">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
            <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-sky-500/12 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-amber-400/12 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column - Info */}
              <div>
                <Reveal>
                  <span className="eyebrow mb-8">Get in Touch</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h1 className="display-2xl mb-7 text-white md:mb-8">
                    Let&apos;s build <span className="text-gradient">something great</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="measure mb-10 text-base leading-8 text-white/60 sm:text-lg md:mb-12">
                    Ready to transform your digital infrastructure? Our team is standing by to discuss your project and how ZTEC Group can deliver results.
                  </p>
                </Reveal>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Reveal
                        key={item.label}
                        delay={0.22 + i * 0.07}
                        y={18}
                        className="group flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-colors hover:border-white/8 hover:bg-white/[0.02]"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10 sm:h-12 sm:w-12">
                          <Icon size={20} className="transition-colors group-hover:text-primary" />
                        </div>
                        <div>
                          <div className="mb-1 text-sm text-white/40">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-lg transition-colors hover:text-white/80">
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-lg">{item.value}</div>
                          )}
                        </div>
                      </Reveal>
                    );
                  })}
                </div>

                {/* Response Time */}
                <Reveal delay={0.46} className="cinematic-panel mt-10 rounded-2xl p-5 sm:p-6 md:mt-12">
                  <div className="mb-2 text-sm uppercase tracking-wider text-white/40">Response Time</div>
                  <div className="text-xl font-semibold sm:text-2xl">Within 24 Hours</div>
                  <div className="mt-2 text-white/60">Our team reviews all inquiries and responds promptly.</div>
                </Reveal>
              </div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cinematic-panel relative rounded-3xl p-6 sm:p-8 lg:p-12">
                  {formState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center"
                    >
                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/20">
                        <Send size={28} className="text-green-400" />
                      </div>
                      <h3 className="mb-4 text-3xl font-bold">Message Sent!</h3>
                      <p className="text-white/60">
                        Thank you for reaching out. We'll be in touch within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      <div className="border-b border-white/10 pb-5">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Project Intake</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Tell us what you need</h2>
                      </div>
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={FIELD_CLASS}
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={FIELD_CLASS}
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm text-white/60">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={FIELD_CLASS}
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="mb-2 block text-sm text-white/60">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`${FIELD_CLASS} text-white`}
                        >
                          <option value="" className="bg-[#070a12]">Select a service</option>
                          <option value="communication" className="bg-[#070a12]">Anonymous Communication Gateway</option>
                          <option value="content" className="bg-[#070a12]">Video & Motion Content Studio</option>
                          <option value="software" className="bg-[#070a12]">Software & Business Systems</option>
                          <option value="revenue" className="bg-[#070a12]">STRA Management Consultation</option>
                          <option value="multiple" className="bg-[#070a12]">Multiple Services</option>
                          <option value="other" className="bg-[#070a12]">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={`${FIELD_CLASS} resize-none`}
                          placeholder="Tell us about your project, timeline, and goals..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/60 bg-primary px-6 py-4 text-primary-foreground shadow-[0_18px_42px_rgba(240,180,79,0.24)] transition-colors hover:brightness-110"
                      >
                        <span>Send Message</span>
                        <Send size={18} />
                      </motion.button>

                      <p className="text-center text-xs text-white/40">
                        By submitting this form, you agree to our{" "}
                        <Link href="/privacy-policy" className="text-white/65 underline decoration-white/35 underline-offset-2 transition-colors hover:text-white">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
