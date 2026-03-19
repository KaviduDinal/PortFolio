export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
  image?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Batch Representative (SOCS)",
    company: "Society of Computer Science – Sabaragamuwa University of Sri Lanka",
    period: "Jun 2024 – Sep 2025",
    description: "Led communication between students and the Society of Computer Science as the Batch Representative, supporting academic and community initiatives. Contributed to organizing student activities and strengthening collaboration within the department.",
    skills: ["Leadership", "Student Representation", "Community Engagement", "Team Coordination"]
  },
  {
    id: 2,
    role: "Team Leader  (Hack Brigade)",
    company: "Hackventure AIESEC, University of Kelaniya",
    period: "Aug 2024 ",
    description: "Led the Hack Brigade team in the Hackventure competition and guided the development of the Expiry Date Tracking System, a solution designed to reduce product waste and improve inventory management. Successfully advanced the team to the semi-final stage.",
    skills: ["Team Leadership", "Hackathon", "Software Development", "Problem Solving", "UI UX Design", "Full Stack Development"]
  },
  {
    id: 3,
    role: "Knowledge Team Leader  (HOPE 2.0)",
    company: "IEEE WIE Affinity Group",
    period: "Aug 2025 ",
    description: "Led educational sessions for Grade 6 and Grade 7 students, introducing basic Microsoft productivity tools and guiding hands-on Arduino projects to promote early interest in technology and programming.",
    skills: ["Team Leadership", "STEM Education", "Arduino", "Presenting", "Community Outreach"]
  },
    {
    id: 4,
    role: "Committee Member (SOCS)",
    company: "Society of Computer Science – Sabaragamuwa University of Sri Lanka",
    period: "Sep 2025 - Present",
    description: "Contributing as a committee member by organizing and supporting technology initiatives, including the Virtual Rival Gaming Event and Widunena, an ICT knowledge session designed to help 2025 A/L students explore computing and technology fields.",
    skills: ["Event Organization", "Community Impact", "ICT Education", "Team Collaboration"]
  }
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "BSc (Hons) in Software Engineering",
    institution: "Sabaragamuwa University of Sri Lanka",
    period: "2023 - 2027",
    description: "Focused on software development, artificial intelligence, and modern web technologies."
  }
];

export const certifications: CertificationItem[] = [
  { id: 1, name: "Work Apreciate Society of Computer Sciences  As The Committee Member in 2024/2025", issuer: "Society of Computer Sciences", date: "Dec 2025", url: "#" },
  { id: 2, name: "AWS Certified AI Practitioner", issuer: "kodeKloud", date: "Feb 2026", url: "#", image: "/assets/images/Two.png" },
  { id: 3, name: "IX 24 Inter-University Designathon", issuer: " IEEE Student Branch of Informatics Institute of Technology (IIT) ", date: "Sep 2024", url: "#", image: "/assets/Certificates/Ix.png" },
  { id: 4, name: "Hackventure 2024 — Semifinalist ", issuer: "AIESEC in University of Kelaniya", date: "Aug 2024", url: "#", image: "/assets/images/Four.png" },
  { id: 5, name: "AlgoXplore 1.0-Algorithm & CTF Challenge", issuer: "Hackathon Hub — NSBM Green University", date: "May 2024", url: "#", image: "/assets/Certificates/Algo.png" },
  { id: 6, name: "Appriciation of Technical Assistant-Conference Volunteer(ICMR-2024)", issuer: "Faculty of Management Studies, Sabaragamuwa University of Sri Lanka", date: "Nov 2024", url: "#" },
  { id: 7, name: "Introdution to AI/ML Toolkit With Kubeflow from The Linux Foundation.", issuer: " Linux Foundation ", date: "Mar 2026", url: "#" },

];
