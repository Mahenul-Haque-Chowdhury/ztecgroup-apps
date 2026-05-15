"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ClipboardList, Layers3, Send, Sparkles, Workflow } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionContainer } from "../components/SectionContainer";

const projectTypeOptions = [
  "Business Website",
  "E-commerce Platform",
  "Customer Portal",
  "Mobile App",
  "ERP / CRM / HRMS",
  "Internal Operations System",
  "Automation & Integrations",
  "Custom SaaS Product",
] as const;

const serviceOptions = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Mobile App Development",
  "E-commerce Development",
  "Business System Development",
  "Automation Workflows",
  "Reporting & Dashboards",
  "Cloud Deployment",
  "Maintenance & Support",
] as const;

const platformOptions = [
  "Web App",
  "iOS",
  "Android",
  "Admin Panel",
  "API Only",
  "Desktop App",
] as const;

const featureOptions = [
  "Authentication & Roles",
  "Payments / Checkout",
  "Booking / Scheduling",
  "Inventory / Orders",
  "CRM / Lead Tracking",
  "HR / Staff Management",
  "Analytics Dashboard",
  "Notifications",
  "Document Management",
  "Third-party Integrations",
] as const;

const integrationOptions = [
  "Stripe",
  "Xero",
  "QuickBooks",
  "Shopify",
  "Meta / Google Ads",
  "Twilio / SMS",
  "WhatsApp",
  "HubSpot",
  "Salesforce",
  "Custom API",
] as const;

const timelineOptions = [
  "ASAP",
  "2-4 Weeks",
  "1-2 Months",
  "2-3 Months",
  "3+ Months",
  "Just Exploring",
] as const;

const budgetOptions = [
  "Under $5k",
  "$5k-$15k",
  "$15k-$30k",
  "$30k-$60k",
  "$60k+",
  "Need Guidance",
] as const;

const existingSystemOptions = [
  "New Project",
  "Existing Website to Improve",
  "Legacy System Replacement",
  "Partially Built Product",
  "Need Audit First",
] as const;

type QuoteFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  projectSummary: string;
  timeline: string;
  budget: string;
  existingSystem: string;
  requestedServices: string[];
  platformTargets: string[];
  featureNeeds: string[];
  integrations: string[];
  designSupport: string;
  maintenanceSupport: string;
  launchPriority: string;
  additionalNotes: string;
};

const initialFormData: QuoteFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  projectSummary: "",
  timeline: "",
  budget: "",
  existingSystem: "",
  requestedServices: [],
  platformTargets: [],
  featureNeeds: [],
  integrations: [],
  designSupport: "Need both design and development",
  maintenanceSupport: "Yes, ongoing support",
  launchPriority: "Fastest route to usable release",
  additionalNotes: "",
};

const chipBaseClass =
  "rounded-xl border px-3 py-2 text-sm transition-colors duration-200";

export function QuotationRequirements() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const selectedCount = useMemo(
    () => formData.requestedServices.length + formData.platformTargets.length + formData.featureNeeds.length + formData.integrations.length,
    [formData]
  );

  const toggleListValue = (field: keyof Pick<QuoteFormData, "requestedServices" | "platformTargets" | "featureNeeds" | "integrations">, value: string) => {
    setFormData((current) => {
      const values = current[field];
      const nextValues = values.includes(value)
        ? values.filter((entry) => entry !== value)
        : [...values, value];

      return {
        ...current,
        [field]: nextValues,
      };
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("success");
    window.setTimeout(() => {
      setFormData(initialFormData);
      setFormState("idle");
    }, 4000);
  };

  const renderChipGroup = (
    field: keyof Pick<QuoteFormData, "requestedServices" | "platformTargets" | "featureNeeds" | "integrations">,
    options: readonly string[]
  ) => (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = formData[field].includes(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => toggleListValue(field, option)}
            className={`${chipBaseClass} ${
              isSelected
                ? "border-primary/50 bg-primary/15 text-white"
                : "border-white/10 bg-white/5 text-white/68 hover:border-white/20 hover:text-white"
            }`}
            aria-pressed={isSelected}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="relative pt-24">
      <SectionContainer>
        <div className="relative min-h-[100svh] py-8">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
            <div className="absolute top-[18%] left-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-[12%] right-[8%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="cinematic-kicker mb-7">Software Quotation</div>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Tell us what you need.
                <br />
                We will shape the right build.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg">
                This quotation form is built for websites, mobile apps, e-commerce, ERP, CRM, HRMS, automation, and custom software systems. Fill what you know, skip what you do not, and we will use it to scope the right solution.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: ClipboardList,
                    title: "Structured requirement capture",
                    copy: "Choose service types, platforms, features, timelines, and integrations without writing everything manually.",
                  },
                  {
                    icon: Workflow,
                    title: "Better project scoping",
                    copy: "We use this information to identify the cleanest delivery approach, team shape, and release scope.",
                  },
                  {
                    icon: Layers3,
                    title: "Built for different project sizes",
                    copy: "Use the same form for a simple marketing site, a customer portal, or a multi-module internal operations system.",
                  },
                ].map((item) => (
                  <div key={item.title} className="cinematic-panel rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/82">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white/92">{item.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/62">{item.copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cinematic-panel mt-8 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Sparkles size={18} className="text-primary" />
                  <p className="text-sm uppercase tracking-[0.14em] text-white/58">Quick notes</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/68">
                  <li>Choose as many service types and features as you need.</li>
                  <li>If you are replacing an old system, mention the current tools in the notes.</li>
                  <li>If budget or timeline is unclear, select the guidance option and we will help scope it.</li>
                </ul>
                <div className="mt-5 rounded-xl border border-primary/18 bg-primary/10 px-4 py-3 text-sm text-white/76">
                  {selectedCount > 0
                    ? `${selectedCount} requirement selections added so far.`
                    : "Start selecting options to shape your quotation request."}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              <div className="cinematic-panel rounded-3xl p-6 sm:p-8 lg:p-10">
                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-500/15 text-emerald-300">
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quotation Request Received</h3>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/62">
                      Your software requirements have been captured. We will review the scope and respond with the next steps and quotation direction.
                    </p>
                    <Link href="/services/software" className="mt-8 inline-block">
                      <span className="inline-flex rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/74 transition-colors hover:bg-white/8 hover:text-white">
                        Back to Software Services
                      </span>
                    </Link>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="mb-2 block text-sm text-white/60">Full Name *</label>
                        <input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors focus:border-primary/70 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm text-white/60">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors focus:border-primary/70 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm text-white/60">Phone / WhatsApp</label>
                        <input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+61..."
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors focus:border-primary/70 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm text-white/60">Company / Brand</label>
                        <input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your business name"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors focus:border-primary/70 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectType" className="mb-2 block text-sm text-white/60">Project Type *</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="" className="bg-[#070a12]">Select project type</option>
                          {projectTypeOptions.map((option) => (
                            <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="existingSystem" className="mb-2 block text-sm text-white/60">Current Situation</label>
                        <select
                          id="existingSystem"
                          name="existingSystem"
                          value={formData.existingSystem}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="" className="bg-[#070a12]">Select current status</option>
                          {existingSystemOptions.map((option) => (
                            <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectSummary" className="mb-2 block text-sm text-white/60">Project Summary *</label>
                      <textarea
                        id="projectSummary"
                        name="projectSummary"
                        value={formData.projectSummary}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe what you want to build, who it is for, and what problem it should solve."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors focus:border-primary/70 focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="timeline" className="mb-2 block text-sm text-white/60">Preferred Timeline *</label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="" className="bg-[#070a12]">Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-2 block text-sm text-white/60">Estimated Budget *</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="" className="bg-[#070a12]">Select budget range</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-sm text-white/60">Requested Services</p>
                      {renderChipGroup("requestedServices", serviceOptions)}
                    </div>

                    <div>
                      <p className="mb-3 text-sm text-white/60">Platform Targets</p>
                      {renderChipGroup("platformTargets", platformOptions)}
                    </div>

                    <div>
                      <p className="mb-3 text-sm text-white/60">Feature Needs</p>
                      {renderChipGroup("featureNeeds", featureOptions)}
                    </div>

                    <div>
                      <p className="mb-3 text-sm text-white/60">Expected Integrations</p>
                      {renderChipGroup("integrations", integrationOptions)}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3">
                      <div>
                        <label htmlFor="designSupport" className="mb-2 block text-sm text-white/60">Design / UI Need</label>
                        <select
                          id="designSupport"
                          name="designSupport"
                          value={formData.designSupport}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="Need both design and development" className="bg-[#070a12]">Need both design and development</option>
                          <option value="Development only" className="bg-[#070a12]">Development only</option>
                          <option value="Need design audit first" className="bg-[#070a12]">Need design audit first</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="maintenanceSupport" className="mb-2 block text-sm text-white/60">Post-launch Support</label>
                        <select
                          id="maintenanceSupport"
                          name="maintenanceSupport"
                          value={formData.maintenanceSupport}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="Yes, ongoing support" className="bg-[#070a12]">Yes, ongoing support</option>
                          <option value="Yes, limited warranty period" className="bg-[#070a12]">Yes, limited warranty period</option>
                          <option value="No, project only" className="bg-[#070a12]">No, project only</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="launchPriority" className="mb-2 block text-sm text-white/60">Launch Priority</label>
                        <select
                          id="launchPriority"
                          name="launchPriority"
                          value={formData.launchPriority}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-primary/70 focus:outline-none"
                        >
                          <option value="Fastest route to usable release" className="bg-[#070a12]">Fastest route to usable release</option>
                          <option value="Balanced speed and scope" className="bg-[#070a12]">Balanced speed and scope</option>
                          <option value="Highest polish first" className="bg-[#070a12]">Highest polish first</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="mb-2 block text-sm text-white/60">Additional Notes</label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Anything else we should know about stakeholders, compliance, internal workflows, or rollout plans?"
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors focus:border-primary/70 focus:outline-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/60 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:brightness-110"
                    >
                      <span>Submit Requirements</span>
                      <Send size={18} />
                    </motion.button>

                    <p className="text-center text-xs text-white/40">
                      By submitting this form, you agree to our {" "}
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
      </SectionContainer>
    </div>
  );
}