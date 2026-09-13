import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "./firebase";
import { LeadFormData, WebsiteLead, SubmitLeadResponse } from "@/types";

export const RFC_WEBSITE_METADATA = {
  websiteId: "rajasthan_football_club",
  websiteName: "Rajasthan Football Club",
  domain: "rajasthanfootballclub.com",
};

/**
 * Standardized lead submission function for Rajasthan Football Club,
 * streaming directly into the centralized Clystro Multi-Tenant 'websiteLeads' Firestore collection.
 *
 * Includes graceful offline/demo fallback to localStorage when keys are unconfigured.
 */
export async function submitLead(
  formData: LeadFormData,
  source: string = "website_contact_form"
): Promise<SubmitLeadResponse> {
  const leadPayload: Omit<WebsiteLead, "id" | "createdAt"> = {
    websiteId: RFC_WEBSITE_METADATA.websiteId,
    websiteName: RFC_WEBSITE_METADATA.websiteName,
    domain: RFC_WEBSITE_METADATA.domain,
    name: formData.name.trim(),
    phone: formData.phone.trim(),
    email: formData.email.trim().toLowerCase(),
    plan: formData.plan,
    interestCategory: formData.interestCategory || "General",
    timeSlot: formData.timeSlot?.trim() || "Flexible / Anytime",
    message: formData.message?.trim() || "",
    status: "new",
    source,
    submittedAt: new Date().toISOString(),
    userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "SSR",
    adminNotes: [],
  };

  // If Firebase is not configured or in local development without keys:
  if (!isFirebaseConfigured() || !db) {
    console.info(
      "%c[Clystro Website Leads - Demo Mode]",
      "color: #F2A93B; font-weight: bold; background: #0B1E3C; padding: 6px 12px; border-radius: 4px; border: 1px solid #F2A93B;",
      leadPayload
    );

    // Persist to localStorage for demo inspection & offline resilience
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("websiteLeads_demo");
        const list = stored ? JSON.parse(stored) : [];
        const demoId = `demo-${Date.now()}`;
        list.unshift({ ...leadPayload, id: demoId, submittedAt: new Date().toISOString() });
        localStorage.setItem("websiteLeads_demo", JSON.stringify(list));
      } catch (e) {
        console.warn("Could not write demo lead to localStorage", e);
      }
    }

    return {
      success: true,
      id: `demo-${Date.now()}`,
      isDemo: true,
      message: "Lead recorded in demo mode. Configure .env.local to stream to Firestore.",
    };
  }

  // Live Firestore submission into 'websiteLeads' collection in clystro-essentials
  try {
    const leadsCollection = collection(db, "websiteLeads");
    const docRef = await addDoc(leadsCollection, {
      ...leadPayload,
      createdAt: serverTimestamp(),
    });

    return {
      success: true,
      id: docRef.id,
      isDemo: false,
      message: "Your inquiry has been submitted! Welcome to the Desert Royals.",
    };
  } catch (error: unknown) {
    console.error("Error submitting lead to Firestore 'websiteLeads':", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to record inquiry in Firestore.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
