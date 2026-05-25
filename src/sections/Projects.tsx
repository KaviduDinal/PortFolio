"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
{
title: "Community Project",
description:
"Ongoing collaborative software project developed as part of community contribution and practical teamwork.",

image: "/projects/community.png",

github:
"https://github.com/KaviduDinal",

live:
"#",
},

{
title: "Smart Bursary",
description:
"Scholarship and bursary management platform designed to simplify applications and student fund management.",

image:
"/projects/bursary.png",

github:
"https://github.com/KaviduDinal",

live:
"#",
},

{
title: "ConfidFace",
description:
"AI powered interview preparation platform with facial analysis and confidence evaluation.",

image:
"/projects/confidface.png",

github:
"https://github.com/KaviduDinal",

live:
"#",
},

{
title: "WorkOra",
description:
"Student internship and job finding platform with employer job posting capabilities.",

image:
"/projects/workora.png",

github:
"https://github.com/KaviduDinal",

live:
"#",
},

{
title: "Test Pilot",

description:
"Automation testing platform for generating tests and validating applications automatically.",

image:
"/projects/testpilot.png",

github:
"https://github.com/KaviduDinal",

live:
"#",
},

{
title: "ScholarSnap",

description:
"Student and professional test summarizer using AI to simplify learning and preparation.",

image:
"/projects/scholarsnap.png",

github:
"https://github.com/KaviduDinal",

live:
"#",
},
];

export default function Projects() {
return (
<section
id="projects"
className="min-h-screen py-24 bg-black"
>
<div className="container mx-auto px-6">

<div className="mb-16">
<h2 className="text-5xl font-bold text-acid-lime mb-4">
PROJECTS
</h2>

<p className="text-gray-400 text-lg">
Some of the projects I built and contributed to.
</p>
</div>

<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>

{projects.map((project, index) => (

<motion.div
key={index}
initial={{
opacity: 0,
y: 30,
}}
whileInView={{
opacity: 1,
y: 0,
}}
transition={{
duration: 0.5,
delay: index * 0.1,
}}
viewport={{
once: true,
}}
>

<div
className="
overflow-hidden
rounded-3xl
bg-white/5
border
border-white/10
hover:border-acid-lime
hover:scale-[1.02]
transition
duration-300
"
>

<div className="relative h-[240px]">

<Image
src={project.image}
alt={project.title}
fill
className="object-cover"
/>

</div>

<div className="p-6">

<h3
className="
text-3xl
font-bold
text-white
mb-3
"
>
{project.title}
</h3>

<p
className="
text-gray-400
mb-6
h-[70px]
"
>
{project.description}
</p>

<div className="flex gap-3">

<a
href={project.github}
target="_blank"
className="
flex
items-center
gap-2
px-4
py-2
rounded-full
border
border-acid-lime
text-acid-lime
"
>
<Github size={18}/>
GitHub
</a>

<a
href={project.live}
target="_blank"
className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-acid-lime
text-black
"
>
<ExternalLink size={18}/>
Live
</a>

</div>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>
);
}