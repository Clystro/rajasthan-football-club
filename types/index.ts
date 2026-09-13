export type LeadStatus = "new" | "contacted" | "converted" | "closed";

export type InterestCategory =
  | "Membership"
  | "Academy"
  | "VIP Hospitality"
  | "Trial Session"
  | "General";

export interface WebsiteLead {
  id?: string;
  websiteId: string;
  websiteName: string;
  domain: string;
  name: string;
  phone: string;
  email: string;
  plan: string;
  interestCategory: InterestCategory;
  timeSlot: string;
  message: string;
  status: LeadStatus;
  source: string;
  submittedAt: string;
  createdAt?: unknown;
  userAgent: string;
  adminNotes: string[];
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  plan: string;
  interestCategory: InterestCategory;
  timeSlot?: string;
  message?: string;
}

export interface SubmitLeadResponse {
  success: boolean;
  id?: string;
  isDemo?: boolean;
  message?: string;
  error?: string;
}

export type PlayerPosition =
  | "Goalkeepers"
  | "Defenders"
  | "Midfielders"
  | "Forwards"
  | "Coaches";

export interface PlayerStats {
  appearances: number;
  goals?: number;
  assists?: number;
  cleanSheets?: number;
  saves?: number;
  tackles?: number;
  passAccuracy?: string;
}

export interface Player {
  id: string;
  name: string;
  number?: number;
  position: PlayerPosition;
  nationality: string;
  image: string;
  bio: string;
  role?: string;
  stats?: PlayerStats;
  isCaptain?: boolean;
}

export interface Fixture {
  id: string;
  opponent: string;
  opponentBadge: string;
  opponentCity: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
  isHome: boolean;
  status: "upcoming" | "completed";
  score?: {
    home: number;
    away: number;
  };
  scorers?: string[];
  matchReportUrl?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tier: "supporter" | "royal" | "maharaja";
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  interestCategory: InterestCategory;
  ctaText: string;
}

export interface AcademyProgram {
  id: string;
  name: string;
  ageGroup: string;
  badge: string;
  description: string;
  schedule: string;
  venue: string;
  features: string[];
  focusAreas: string[];
  coach: string;
}

export type NewsCategory =
  | "Match Report"
  | "Transfers"
  | "Club News"
  | "Academy"
  | "Community";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  readTime: string;
  image: string;
  author: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Matchday" | "Training" | "Celebrations" | "Academy";
  image: string;
  caption: string;
  tag: string;
}
