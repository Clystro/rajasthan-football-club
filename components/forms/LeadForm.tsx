"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/submitLead";
import { buildWhatsAppUrl } from "@/lib/utils";
import { CLUB_INFO } from "@/constants/clubInfo";
import { validateName, validatePhone, validateEmail } from "@/lib/validators";
import { InterestCategory, LeadFormData } from "@/types";

interface LeadFormProps {
  initialPlan?: string;
  initialInterestCategory?: InterestCategory;
  source?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

const PLAN_OPTIONS = [
  { value: "Supporter Pass (₹1,499/Season)", label: "Supporter Pass (₹1,499/Season)", category: "Membership" as InterestCategory },
  { value: "Royal Season Pass (₹4,999/Season)", label: "Royal Season Pass — West Stand (₹4,999/Season)", category: "Membership" as InterestCategory },
  { value: "Maharaja VIP Box (₹24,999/Seat)", label: "Maharaja VIP Hospitality Suite (₹24,999/Seat)", category: "VIP Hospitality" as InterestCategory },
  { value: "U-13 Junior Royals Foundation", label: "Youth Academy: U-13 Junior Royals Foundation", category: "Academy" as InterestCategory },
  { value: "U-15 Elite Colts Development", label: "Youth Academy: U-15 Elite Colts Development", category: "Academy" as InterestCategory },
  { value: "U-18 Desert Warriors Pro Pathway", label: "Youth Academy: U-18 Desert Warriors Pro Pathway", category: "Academy" as InterestCategory },
  { value: "Grassroots Open Trial Session", label: "Book Free Grassroots Trial Session", category: "Trial Session" as InterestCategory },
  { value: "Corporate & Brand Sponsorship", label: "Corporate Sponsorship & Matchday Branding", category: "General" as InterestCategory },
  { value: "General Club Inquiry", label: "General Club Inquiry / Fan Relations", category: "General" as InterestCategory },
];

const TIME_SLOTS = [
  "Flexible / Anytime",
  "Morning (08:00 AM – 11:30 AM)",
  "Afternoon (12:00 PM – 04:00 PM)",
  "Evening (05:00 PM – 08:00 PM)",
];

export const LeadForm: React.FC<LeadFormProps> = ({
  initialPlan = "Royal Season Pass (₹4,999/Season)",
  initialInterestCategory = "Membership",
  source = "website_contact_section",
  onSuccess,
  compact = false,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    phone: "",
    email: "",
    plan: initialPlan,
    interestCategory: initialInterestCategory,
    timeSlot: "Flexible / Anytime",
    message: "",
  });

  const [errors, setErrors] = useState<{ [K in keyof LeadFormData]?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Sync state when initialPlan or initialInterestCategory changes from outside props (e.g. pre-selection)
  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: initialPlan,
        interestCategory: initialInterestCategory || prev.interestCategory,
      }));
    }
  }, [initialPlan, initialInterestCategory]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // Automatically sync interestCategory when plan changes
      if (name === "plan") {
        const found = PLAN_OPTIONS.find((p) => p.value === value);
        if (found) {
          updated.interestCategory = found.category;
        }
      }

      return updated;
    });

    // Clear field error on change
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [K in keyof LeadFormData]?: string } = {};

    const nameVal = validateName(formData.name);
    if (!nameVal.isValid) newErrors.name = nameVal.error;

    const phoneVal = validatePhone(formData.phone);
    if (!phoneVal.isValid) newErrors.phone = phoneVal.error;

    const emailVal = validateEmail(formData.email);
    if (!emailVal.isValid) newErrors.email = emailVal.error;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const res = await submitLead(formData, source);

      if (res.success) {
        setIsSuccess(true);
        setSubmissionId(res.id || null);
        setIsDemoMode(Boolean(res.isDemo));

        // Fire celebratory royal confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#F2A93B", "#FFB627", "#7A1F2B", "#FFFFFF"],
          });
        } catch {
          // Ignore confetti errors
        }

        if (onSuccess) onSuccess();
      } else {
        setApiError(res.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      setApiError("Network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmissionId(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      plan: initialPlan,
      interestCategory: initialInterestCategory,
      timeSlot: "Flexible / Anytime",
      message: "",
    });
    setErrors({});
  };

  // Pre-filled WhatsApp bridge URL
  const whatsAppText = `Hi Rajasthan FC! My name is ${formData.name || "a royal fan"}. I am interested in "${formData.plan || "Club Memberships"}". Please share more details.`;
  const whatsAppUrl = buildWhatsAppUrl(CLUB_INFO.contact.whatsapp, whatsAppText);

  if (isSuccess) {
    return (
      <div className="text-center p-6 sm:p-8 bg-navy-pitch/90 border border-gold/40 rounded-none animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/15 flex items-center justify-center border border-gold/40 text-gold">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
          Royal Welcome, {formData.name.split(" ")[0]}!
        </h3>

        <p className="text-royal-slate text-sm sm:text-base font-sans max-w-md mx-auto mb-4">
          Your inquiry for <strong className="text-gold">{formData.plan}</strong> has been received by the RFC front office.
        </p>

        {submissionId && (
          <div className="inline-block bg-navy-card px-4 py-2 border border-navy-border text-xs text-royal-slate font-mono mb-6">
            Reference ID: <span className="text-gold">{submissionId}</span>
            {isDemoMode && (
              <span className="ml-2 text-amber-300 font-sans font-bold">(Local Demo Mode)</span>
            )}
          </div>
        )}

        <div className="space-y-3 max-w-sm mx-auto">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-display uppercase tracking-wider text-sm font-bold px-6 py-3.5 hover:brightness-110 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            Instant WhatsApp Confirmation
          </a>

          <Button
            variant="outline-gold"
            size="sm"
            onClick={handleReset}
            className="w-full text-xs"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
      {apiError && (
        <div className="p-3 bg-red-950/70 border border-red-500/60 text-red-200 text-xs sm:text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{apiError}</span>
        </div>
      )}

      {/* Name Input */}
      <div>
        <label
          htmlFor={`lead-name-${source}`}
          className="block text-xs font-display uppercase tracking-wider text-royal-slate mb-1.5"
        >
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          id={`lead-name-${source}`}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g. Vikram Singh Rathore"
          className={`w-full bg-navy-pitch/90 border ${
            errors.name ? "border-red-500" : "border-navy-border focus:border-gold"
          } px-4 py-3 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400 font-sans">{errors.name}</p>}
      </div>

      {/* Contact Grid: Phone & Email */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label
            htmlFor={`lead-phone-${source}`}
            className="block text-xs font-display uppercase tracking-wider text-royal-slate mb-1.5"
          >
            WhatsApp / Mobile <span className="text-gold">*</span>
          </label>
          <input
            id={`lead-phone-${source}`}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98290 12345"
            className={`w-full bg-navy-pitch/90 border ${
              errors.phone ? "border-red-500" : "border-navy-border focus:border-gold"
            } px-4 py-3 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400 font-sans">{errors.phone}</p>}
        </div>

        <div>
          <label
            htmlFor={`lead-email-${source}`}
            className="block text-xs font-display uppercase tracking-wider text-royal-slate mb-1.5"
          >
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id={`lead-email-${source}`}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="vikram@example.com"
            className={`w-full bg-navy-pitch/90 border ${
              errors.email ? "border-red-500" : "border-navy-border focus:border-gold"
            } px-4 py-3 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400 font-sans">{errors.email}</p>}
        </div>
      </div>

      {/* Plan Selection Dropdown */}
      <div>
        <label
          htmlFor={`lead-plan-${source}`}
          className="block text-xs font-display uppercase tracking-wider text-royal-slate mb-1.5"
        >
          Selected Tier / Program <span className="text-gold">*</span>
        </label>
        <select
          id={`lead-plan-${source}`}
          name="plan"
          value={formData.plan}
          onChange={handleInputChange}
          className="w-full bg-navy-pitch/90 border border-navy-border focus:border-gold px-4 py-3 text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold transition-colors cursor-pointer"
        >
          {PLAN_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-navy-pitch text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Preferred Contact / Training Time Slot */}
      <div>
        <label
          htmlFor={`lead-timeslot-${source}`}
          className="block text-xs font-display uppercase tracking-wider text-royal-slate mb-1.5"
        >
          Preferred Contact / Session Time
        </label>
        <select
          id={`lead-timeslot-${source}`}
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleInputChange}
          className="w-full bg-navy-pitch/90 border border-navy-border focus:border-gold px-4 py-3 text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold transition-colors cursor-pointer"
        >
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot} className="bg-navy-pitch text-white">
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Message Note */}
      <div>
        <label
          htmlFor={`lead-msg-${source}`}
          className="block text-xs font-display uppercase tracking-wider text-royal-slate mb-1.5"
        >
          Additional Notes / Specific Requirements (Optional)
        </label>
        <textarea
          id={`lead-msg-${source}`}
          name="message"
          rows={compact ? 2 : 3}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="e.g. Inquiring for 2 season passes in West Stand or youth trial dates..."
          className="w-full bg-navy-pitch/90 border border-navy-border focus:border-gold px-4 py-3 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
        />
      </div>

      {/* Submit Button & Direct WhatsApp Conversion Bridge */}
      <div className="pt-2 space-y-3">
        <Button
          type="submit"
          variant="gold"
          size={compact ? "md" : "lg"}
          isLoading={isLoading}
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full shadow-gold-glow"
        >
          Submit Royal Application
        </Button>

        <div className="flex items-center justify-between gap-3 text-xs text-royal-slate pt-1">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Direct Clystro CRM integration
          </span>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-white inline-flex items-center gap-1 font-display tracking-wider uppercase transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            Fast-track on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </form>
  );
};
