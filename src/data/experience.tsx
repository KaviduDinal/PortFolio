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
  { id: 2, name: "AWS Certified AI Practitioner", issuer: "kodeKloud", date: "Feb 2026", url: "#" },
  { id: 3, name: "IX 24 Inter-University Designathon", issuer: " IEEE Student Branch of Informatics Institute of Technology (IIT) ", date: "Sep 2024", url: "#" },
  { id: 4, name: "Hackventure 2024 — Semifinalist ", issuer: "AIESEC in University of Kelaniya", date: "Aug 2024", url: "#" },
  { id: 5, name: "AlgoXplore 1.0-Algorithm & CTF Challenge", issuer: "Hackathon Hub — NSBM Green University", date: "May 2024", url: "#" },
  { id: 6, name: "Appriciation of Technical Assistant-Conference Volunteer(ICMR-2024)", issuer: "Faculty of Management Studies, Sabaragamuwa University of Sri Lanka", date: "Nov 2024", url: "#" },
  { id: 7, name: "Mastering Deep Learning with Hands-on 2024", issuer: "IEEE Computer Society", date: "Aug 2024", url: "#" },
  { id: 8, name: "Google exploreCSR Symposium", issuer: "University of Jaffna", date: "Oct 2024", url: "#" },
  { id: 9, name: "UoJ Coders v3.0", issuer: "University of Jaffna", date: "Oct 2024", url: "#" },
  { id: 10, name: "Introduction to Kubernetes and Cloud Native Technologies", issuer: "LinuxFoundationX", date: "Jun 2024", url: "#" },
  { id: 11, name: "Introduction to Kubernetes", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 12, name: "Introduction to Cloud Infrastructure Technologies", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 13, name: "Introduction to Linux", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 14, name: "Intro to Machine Learning", issuer: "Kaggle", date: "Jun 2024", url: "#" },
  { id: 15, name: "Server-side Web Programming", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 16, name: "Agile Project Management Certifications", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 17, name: "Project Scope and Schedule Management", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 18, name: "Project Communication and Stakeholder Management", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 19, name: "Foundations of Project Management", issuer: "University of Moratuwa", date: "Jun 2024", url: "#" },
  { id: 20, name: "AI/ML Engineer - Stage 2", issuer: "SLIIT", date: "Jun 2024", url: "#" },
  { id: 21, name: "AI/ML Engineer - Stage 1", issuer: "SLIIT", date: "Jun 2024", url: "#" },
  { id: 22, name: "Deep Learning Fundamentals with Keras", issuer: "edX", date: "Jun 2024", url: "#" },
  { id: 23, name: "Front-End Web Development", issuer: "University of Moratuwa", date: "May 2024", url: "#" },
  { id: 24, name: "Python programming", issuer: "University of Moratuwa", date: "May 2024", url: "#" },
  { id: 25, name: "AI for Everyone: Master the Basics", issuer: "edX", date: "Mar 2024", url: "#" },
  { id: 26, name: "Blockchain: Understanding Its Uses and Implications", issuer: "edX", date: "Mar 2024", url: "#" }
];
