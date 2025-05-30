import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "NeuraCraft: AI Art Companion",
    description: "An AI-powered creative assistant that helps artists overcome creative blocks by generating personalized, ethically-sourced inspiration.",
    image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      { name: "AI", color: "#C8B6FF" },
      { name: "Creativity", color: "#FFCAD4" },
      { name: "Ethics", color: "#AFF8DB" }
    ],
    liveUrl: "https://neuracraft.demo",
    githubUrl: "https://github.com/rithikajoshi/neuracraft"
  },
  {
    id: 2,
    title: "Ethical AI Frameworks",
    description: "A comprehensive set of guidelines and tools for developing AI systems with fairness, transparency, and accountability at their core.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      { name: "Ethics", color: "#AFF8DB" },
      { name: "Frameworks", color: "#B8C0FF" },
      { name: "Guidelines", color: "#FFCAD4" }
    ],
    liveUrl: "https://ethicalai.demo",
    githubUrl: "https://github.com/rithikajoshi/ethical-ai"
  },
  {
    id: 3,
    title: "DreamScape: VR Experience",
    description: "An immersive VR experience that uses AI to generate personalized dreamlike environments based on user emotions and preferences.",
    image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      { name: "VR", color: "#FFCAD4" },
      { name: "Immersive", color: "#C8B6FF" },
      { name: "Experience", color: "#B8C0FF" }
    ],
    liveUrl: "https://dreamscape.demo",
    githubUrl: "https://github.com/rithikajoshi/dreamscape"
  },
  {
    id: 4,
    title: "Empathic ML Models",
    description: "Research on developing machine learning models that can better understand and respond to human emotions and contextual nuances.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      { name: "Research", color: "#AFF8DB" },
      { name: "ML", color: "#C8B6FF" },
      { name: "Empathy", color: "#FFCAD4" }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/rithikajoshi/empathic-ml"
  },
  {
    id: 5,
    title: "AIxDesign Collaboration",
    description: "A tool that facilitates meaningful collaboration between AI systems and human designers, enhancing creative workflows.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      { name: "Collaboration", color: "#B8C0FF" },
      { name: "Design", color: "#FFCAD4" },
      { name: "Tools", color: "#AFF8DB" }
    ],
    liveUrl: "https://aixdesign.demo",
    githubUrl: "https://github.com/rithikajoshi/aixdesign"
  },
  {
    id: 6,
    title: "FairyTech Journal",
    description: "A digital publication exploring the intersection of technology, ethics, and whimsy in the evolving landscape of AI research.",
    image: "https://images.pexels.com/photos/7605941/pexels-photo-7605941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      { name: "Publication", color: "#FFCAD4" },
      { name: "Ethics", color: "#AFF8DB" },
      { name: "Research", color: "#C8B6FF" }
    ],
    liveUrl: "https://fairytech.demo",
    githubUrl: ""
  }
];