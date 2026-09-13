# Rajasthan Football Club (RFC) — "The Desert Royals of Football"

> **Target Domain:** `rajasthanfootballclub.com`  
> **Brand Identity:** Rajasthan Football Club (RFC) — "The Desert Royals of Football"  
> **Primary Goal:** High-conversion sports marketing & membership/academy lead generation site  
> **Backend Integration:** Clystro Multi-Website Lead Engine (`clystro-essentials` Firebase Firestore)

---

## 1. Overview & Philosophy

The official portal for **Rajasthan Football Club**, Jaipur's flagship professional football club competing in national competitions and operating an AIFF 3-Star accredited residential youth academy.

This website is designed strictly as a **high-converting lead generation and brand authority engine**. Every call-to-action (membership passes, youth academy trials, VIP hospitality skyboxes, corporate sponsorships) funnels into a unified, accessible lead submission mechanism feeding the centralized **`websiteLeads`** collection in the **`clystro-essentials`** Firebase project.

---

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript (Strict, zero `any`)
- **Styling:** Tailwind CSS with custom royal design tokens (colors, gradients, keyframes, clip-paths)
- **Typography:** `Oswald`, `Bebas Neue` (display/headings) & `Inter` (body/UI) via `next/font/google`
- **Animations & Interactivity:** Framer Motion, Lucide React icons, Canvas Confetti
- **Backend & Database:** Firebase JS SDK v10+ (Firestore client-side with resilient offline/demo fallback)
- **Deployment Target:** Vercel (Edge-optimized, zero-config deployment)

---

## 3. Brand Identity & Design System

- **Royal Base Colors:** Deep Navy (`#0B1E3C`), Midnight Pitch (`#061020`), Dark Slate (`#122A54`)
- **Royal Accent Colors:** Regal Gold / Amber (`#F2A93B` & `#FFB627`)
- **Secondary Accent:** Deep Rajasthani Maroon (`#7A1F2B`)
- **Custom Vector Crest:** Handcrafted SVG Club Crest with royal shield, football, and crown motif
- **Visual Treatments:** Angular dynamic dividers, stadium floodlight radial overlays, gold metallic border highlights

---

## 4. Clystro Multi-Tenant Lead Engine Integration

All submissions write directly to the centralized multi-tenant Firestore collection:

- **Target Collection:** `websiteLeads`
- **Firebase Project:** `clystro-essentials`
- **Schema Mapping:**

| Field | Type | Description | Value for RFC |
|---|---|---|---|
| `websiteId` | `string` | Unique identifier for client site | `"rajasthan_football_club"` |
| `websiteName` | `string` | Display name of the website | `"Rajasthan Football Club"` |
| `domain` | `string` | Canonical domain | `"rajasthanfootballclub.com"` |
| `name` | `string` | Full name of applicant | e.g. `"Vikram Singh Rathore"` |
| `phone` | `string` | WhatsApp / Mobile contact | e.g. `"+91 98290 12345"` |
| `email` | `string` | Email address (lowercased) | e.g. `"vikram@example.com"` |
| `plan` | `string` | Membership tier or program | e.g. `"Royal Season Pass (₹4,999/Season)"` |
| `interestCategory` | `string` | Category segmentation | `"Membership"`, `"Academy"`, `"VIP Hospitality"`, `"Trial Session"`, `"General"` |
| `timeSlot` | `string` | Preferred contact or training time | e.g. `"Evening (05:00 PM – 08:00 PM)"` |
| `message` | `string` | Optional note or requirements | e.g. `"Inquiring for 2 season passes"` |
| `status` | `string` | Default status for Clystro CRM | `"new"` |
| `source` | `string` | Button or section origin | e.g. `"website_unified_contact_section"`, `"academy_trial_modal"` |
| `submittedAt` | `string` | ISO 8601 client timestamp | ISO string |
| `createdAt` | `FieldValue` | Server timestamp for sorting | `serverTimestamp()` |
| `userAgent` | `string` | Browser signature for audit | `navigator.userAgent` |
| `adminNotes` | `array` | CRM notes array | `[]` |

### Graceful Demo Fallback Mode
When `NEXT_PUBLIC_FIREBASE_PROJECT_ID` is unset or running in offline development:
- Logs inquiry details with styled console badge `[Clystro Website Leads - Demo Mode]`.
- Persists lead into browser `localStorage` (`websiteLeads_demo`) for instant inspection.
- Returns `{ success: true, id: "demo-...", isDemo: true }` so forms seamlessly display the celebratory confirmation state.

---

## 5. Getting Started & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Clystro Firebase API keys to `.env.local`.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Verification
```bash
npm run build
```
Verify zero TypeScript warnings or errors.
