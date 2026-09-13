import { AcademyProgram } from "@/types";

export const ACADEMY_PROGRAMS: AcademyProgram[] = [
  {
    id: "u-13",
    name: "Junior Royals Foundation",
    ageGroup: "Under-13 (Ages 9–12)",
    badge: "Grassroots Foundation",
    description: "Developing fundamental ball mastery, agility, cognitive decision-making, and intrinsic love for football under joyful guidance.",
    schedule: "3 Days / Week (Tue, Thu, Sat mornings)",
    venue: "RFC Royal Arena Grass Pitch 2, Mansarovar",
    coach: "Bhupendra Singh (AIFF 'B' License)",
    features: [
      "1v1 duels, dribbling finesse & spatial awareness",
      "Coordination, motor skills & speed development",
      "Age-adapted small-sided games (5v5 & 7v7)",
      "Termly skill assessment report cards & parent reviews",
    ],
    focusAreas: ["Ball Control", "Coordination", "Fair Play", "Fun Dynamics"],
  },
  {
    id: "u-15",
    name: "Elite Colts Development",
    ageGroup: "Under-15 (Ages 13–15)",
    badge: "Competitive Youth League",
    description: "Tactical positioning, positional discipline, high-intensity transition play, and state/national junior championship readiness.",
    schedule: "5 Days / Week (Mon–Fri 4:30 PM – 6:30 PM)",
    venue: "Sawai Mansingh Stadium Practice Pitch",
    coach: "Carlos Hernandez (UEFA 'A' License)",
    features: [
      "Tactical 11v11 periodization & game scenarios",
      "GPS tracker performance monitoring & heart-rate data",
      "Strength, injury prevention & nutritional guidance",
      "Direct pathway into the RFC Reserve Team squad",
    ],
    focusAreas: ["Positional Rigor", "Game Intelligence", "Athleticism", "Set Pieces"],
  },
  {
    id: "u-18",
    name: "Desert Warriors Pro Pathway",
    ageGroup: "Under-18 (Ages 16–18)",
    badge: "Pre-Professional Academy",
    description: "Intensive semi-professional environment preparing elite players for the First Team, national leagues, and international trials.",
    schedule: "6 Days / Week (Morning & Evening Sessions)",
    venue: "RFC High Performance Arena & Gym",
    coach: "Carlos Montero (Head Coach Supervision)",
    features: [
      "Full integration with First Team training sessions",
      "Video analysis software breakdown with coaches",
      "High Performance gym access with certified physios",
      "Participation in National Youth Leagues & Durand Cup trials",
    ],
    focusAreas: ["High Tempo", "Pro Mentality", "Tactical Flexibility", "Scout Showcases"],
  },
];

export const ACADEMY_HIGHLIGHTS = [
  {
    title: "AIFF Elite 3-Star Accreditation",
    desc: "Recognized as Rajasthan's premier youth academy adhering to Asian Football Confederation (AFC) benchmarks.",
  },
  {
    title: "Dedicated High Performance Centre",
    desc: "State-of-the-art sports science lab, recovery ice baths, hydrotherapy, and full FIFA-standard floodlit turf.",
  },
  {
    title: "Holistic Schooling & Boarding Tie-ups",
    desc: "Collaborations with top CBSE/IB schools in Jaipur ensuring academic brilliance alongside athletic pursuits.",
  },
  {
    title: "Proven First-Team Trajectory",
    desc: "Over 14 academy graduates signed professional senior contracts with Rajasthan FC and national squads.",
  },
];
