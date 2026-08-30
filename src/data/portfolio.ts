import still1 from "@/assets/still-1.jpg";
import still2 from "@/assets/still-2.jpg";
import still3 from "@/assets/still-3.jpg";
import street1 from "@/assets/street-1.jpg";
import street2 from "@/assets/street-2.jpg";
import event1 from "@/assets/event-1.jpg";
import theatre from "@/assets/theatre.jpg";
import cagePoster from "@/assets/cage.png.asset.json";
import lettersOfElsewherePoster from "@/assets/letters-of-elsewhere.png.asset.json";
import weddingPoster from "@/assets/Wedding.png.asset.json";
import meraDostPoster from "@/assets/MeraDost.jpg.asset.json";
import mixtapeEvent from "@/assets/mixtape-event.jpg.asset.json";
import swastikLive from "@/assets/swastik-live.jpg.asset.json";
import streetNew from "@/assets/streetnew1.jpg"; 

export const images = { still1, still2, still3, street1, street2, streetNew, event1, theatre, cagePoster, lettersOfElsewherePoster, weddingPoster, meraDostPoster };

export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  role: string;
  credits: string;
  description: string;
  contributions: string[];
  image: string;
  size: "wide" | "tall" | "regular";
};

export const projects: Project[] = [
  {
    slug: "sab-se-khatarnak",
    title: "Sab Se Khatarnak",
    type: "Feature Film",
    year: "2024–2025",
    role: "First Assistant Director",
    credits:
      "Directed by Dakxin Chhara · Cinematography by Gargey Trivedi · Nomad Movies Pvt Ltd · Producer Alice Tilche",
    description:
      "A feature film carried from paper to set. Satyam built the shooting schedule, broke down the script, and held the floor together through the shoot.",
    contributions: [
      "Pre-production planning",
      "Complete shooting schedule",
      "Production breakdown",
      "Script supervision",
      "Crew coordination",
      "On-set management",
    ],
    image: still1,
    size: "wide",
  },
  {
    slug: "kayantar",
    title: "Kayantar",
    type: "Feature Film",
    year: "2025",
    role: "First Assistant Director",
    credits:
      "Directed by Dakxin Chhara · Nomad Movies Pvt Ltd · Rajasthani / Haryanvi language · Stage OTT",
    description:
      "A regional-language feature for the Stage platform, shot across demanding locations with a fast-moving unit.",
    contributions: [
      "Casting management",
      "Scheduling",
      "Production breakdown",
      "Crew coordination",
      "On-set management",
    ],
    image: still2,
    size: "regular",
  },
  {
    slug: "they-call-her-mafia",
    title: "They Call Her Mafia, I Call Her Mom",
    type: "Feature Documentary",
    year: "2025–Present",
    role: "1st AD · Assistant Editor · Additional Camera",
    credits: "Directed by Kushal Batunge · Currently in post-production",
    description:
      "A documentary about a woman seen two ways at once. Satyam worked across production and post — shooting additional camera, assisting the edit, and shaping how the story lands.",
    contributions: [
      "Additional camera",
      "Assistant editing",
      "Narrative shaping in post",
      "On-set coordination",
    ],
    image: street2,
    size: "tall",
  },
  {
    slug: "letters-of-elsewhere",
    title: "Letters of Elsewhere",
    type: "Feature Documentary",
    year: "2025–Present",
    role: "Assistant Cameraman",
    credits: "Directed by Abhishek Indrekar · Produced by Dakshin Bajrange",
    description:
      "Continued work in documentary cinematography — light, lenses, and the patience that long-form observational shooting asks for.",
    contributions: ["Camera assistance", "Lens and light support", "Field production"],
    image: lettersOfElsewherePoster.url,
    size: "regular",
  },
  {
    slug: "cage",
    title: "CAGE",
    type: "Experimental Short Film",
    year: "2026",
    role: "Writer / Director",
    credits: "Written and directed by Satyam Chaudhary",
    description:
      "An experimental short about confinement that is chosen rather than imposed. His own film, start to finish — a first authored statement.",
    contributions: ["Writing", "Direction", "Visual concept"],
    image: cagePoster.url,
    size: "tall",
  },
  {
    slug: "this-is-not-a-wedding",
    title: "This Is Not A Wedding",
    type: "Experimental Documentary",
    year: "2026",
    role: "Co-Director · Cinematographer · Editor",
    credits: "Co-directed with Santwana Bayaskar",
    description:
      "An experimental documentary on marriage, shot, co-directed and cut by Satyam — the clearest example of his work across departments.",
    contributions: ["Co-direction", "Cinematography", "Editing"],
    image: weddingPoster.url,
    size: "wide",
  },
  {
    slug: "mera-dost",
    title: "Mera Dost (My Friend)",
    type: "Short Film",
    year: "Pre-Production",
    role: "Writer",
    credits: "Written by Satyam Chaudhary",
    description:
      "A short film in pre-production, built from a script written in Ahmedabad over many quiet evenings.",
    contributions: ["Screenwriting", "Development"],
    image: meraDostPoster.url,
    size: "regular",
  },
];

export const eventWork = [
  {
    title: "MIXTAPE — by MUKT",
    year: "2025",
    role: "Videographer",
    note: "Concert by MUKT band, Ahmedabad.",
    image: mixtapeEvent.url,
  },
  {
    title: "SWASTIK LIVE",
    year: "2026",
    role: "Photographer / Videographer",
    note: "Concert by Swastik The Band.",
    image: swastikLive.url,
  },
  {
    title: "The Kartaal Project",
    year: "2025",
    role: "Photography / Videography",
    note: "By Firoz Khan and the band, at Abhivykti City Arts Festival.",
    image: theatre,
  },
];

export const timeline = [
  { year: "2020", text: "Completed Class 12." },
  {
    year: "2020",
    text: "Cleared NEET. Joined Government Dental College & Hospital, Ahmedabad.",
  },
  {
    year: "2nd Year",
    text: "Left dental school to pursue filmmaking and storytelling.",
  },
  { year: "2024–25", text: "First Assistant Director — Sab Se Khatarnak." },
  { year: "2025", text: "First Assistant Director — Kayantar." },
  {
    year: "2025–",
    text: "1st AD / Assistant Editor / Additional Camera — They Call Her Mafia, I Call Her Mom.",
  },
  { year: "2025–", text: "Assistant Cameraman — Letters of Elsewhere." },
  {
    year: "2025–",
    text: "Professional Improvisational Theatre — Atman Theatre School, Ahmedabad.",
  },
  { year: "2026", text: "Wrote and directed CAGE." },
  { year: "2026", text: "Co-directed, shot and edited This Is Not A Wedding." },
];

export const skills = [
  "Visual Storytelling",
  "Photography",
  "Creative Direction",
  "Videography",
  "Video Editing",
  "Photo Editing",
  "Documentary Editing",
  "Film Production",
  "Production Planning",
  "Crew Coordination",
  "Project Management",
  "Writing",
  "Performing Arts",
  "Narrative Development",
];

export const services = [
  {
    n: "01",
    title: "Creative Direction",
    body: "Concept development, visual language, creative planning and narrative direction — shaping a project from the first idea to the last frame.",
  },
  {
    n: "02",
    title: "Photography",
    body: "Street, documentary, event, portrait and conceptual photography, made with attention to atmosphere and the stories people carry.",
  },
  {
    n: "03",
    title: "Documentary Film Editing",
    body: "Story shaping, narrative structure, pacing and creative post-production for documentary work that needs to find its shape.",
  },
  {
    n: "04",
    title: "Writing",
    body: "Stories, screenplays, concepts, poetry and narrative development — words as the first draft of an image.",
  },
];
