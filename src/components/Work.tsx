import { useState, useCallback, type ComponentType } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  FaCubes,
  FaGamepad,
  FaRulerCombined,
  FaComments,
  FaMagic,
  FaChartLine,
  FaBrain as FaBrainIcon,
  FaArrowRight,
  FaArrowLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdRadar } from "react-icons/md";
import "./styles/Work.css";

type IconType = ComponentType<{ size?: number | string; className?: string }>;

interface FeatureMetric {
  label: string;
  value: number;
  icon: IconType;
}

interface ProjectData {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
  image: string;
  colorKey: number;
  stats: { status: string; progress: number };
  features: FeatureMetric[];
  url?: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: "mafia",
    label: "Mafia",
    category: "Java Game / OOP",
    title: "Mafia War Game",
    description:
      "A console-based game featuring multiple game mechanics built entirely with Object-Oriented Programming concepts.",
    image: "/images/intro.jpg",
    colorKey: 0,
    stats: { status: "Java Project", progress: 85 },
    features: [
      { label: "OOP Design", value: 92, icon: FaCubes },
      { label: "Game Logic", value: 88, icon: FaGamepad },
    ],
  },
  {
    id: "radar",
    label: "Radar",
    category: "DLD Hardware Project",
    title: "Arduino Radar System",
    description:
      "Detects nearby objects and displays them on a radar-style interface using Arduino and ultrasonic sensing technology.",
    image: "/images/radar.jpeg",
    colorKey: 1,
    stats: { status: "Hardware Project", progress: 100 },
    features: [
      { label: "Detection Accuracy", value: 95, icon: MdRadar },
      { label: "Range Coverage", value: 87, icon: FaRulerCombined },
    ],
  },
  {
    id: "defy",
    label: "Defy",
    category: "AI & NLP",
    title: "Defy AI Chatbot",
    description:
      "An intelligent conversational AI chatbot with natural language processing, context awareness, and multi-domain knowledge support powered by modern LLM APIs.",
    image: "/images/DEFY pic.png",
    colorKey: 2,
    stats: { status: "AI Project", progress: 80 },
    features: [
      { label: "NLP Power", value: 94, icon: FaBrainIcon },
      { label: "Context Memory", value: 90, icon: FaComments },
    ],
  },
  {
    id: "aiforge",
    label: "AIForge",
    category: "AI SaaS Platform",
    title: "AIForge",
    description:
      "A full-stack SaaS platform leveraging AI to automate content creation, featuring subscription billing, dashboard analytics, and real-time collaboration tools.",
    image: "/images/AIForge.png",
    colorKey: 3,
    stats: { status: "SaaS Platform", progress: 70 },
    features: [
      { label: "Automation", value: 91, icon: FaMagic },
      { label: "Analytics", value: 86, icon: FaChartLine },
    ],
  },
  {
    id: "zarya",
    label: "ZARYA",
    category: "AI Social Media Platform",
    title: "ZARYA — Think Beyond Social",
    description:
      "An AI-first social ecosystem combining social interaction, AI learning, creative communities, marketplace, portfolio, and real-time messaging in one platform.",
    image: "/images/zarya.png",
    colorKey: 4,
    stats: { status: "Live Platform", progress: 85 },
    features: [
      { label: "AI Integration", value: 92, icon: FaBrainIcon },
      { label: "Social Features", value: 96, icon: FaMagic },
    ],
    url: "https://futureai-gamma.vercel.app",
  },
  {
    id: "jarvis",
    label: "JARVIS",
    category: "AI Desktop Assistant",
    title: "J.A.R.V.I.S",
    description:
      "A personal Iron Man-style AI desktop assistant with voice-first conversation, transparent HUD display, Claude-powered agentic brain, and persistent memory vault.",
    image: "/images/jarvis.svg",
    colorKey: 5,
    stats: { status: "Open Source", progress: 78 },
    features: [
      { label: "Voice Intelligence", value: 90, icon: FaBrainIcon },
      { label: "HUD Performance", value: 88, icon: FaChartLine },
    ],
    url: "https://github.com/Saic2605/jarvis",
  },
];

const ANIMATIONS: { container: Variants; item: Variants; image: Variants } = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: "blur(5px)" },
  },
  image: {
    initial: { opacity: 0, scale: 1.5, filter: "blur(15px)", x: -80 },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.6, filter: "blur(20px)", transition: { duration: 0.25 } },
  },
};

const BackgroundGradient = ({ colorKey }: { colorKey: number }) => (
  <div className="showcase-bg">
    <motion.div
      animate={{ background: `var(--bg-${colorKey})` }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="showcase-bg-inner"
    />
  </div>
);

const ProjectVisual = ({ data }: { data: ProjectData }) => (
  <motion.div layout="position" className={`project-visual pv-${data.colorKey}`}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="animate-ring"
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="visual-glow"
    />
    <div className="visual-disc">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="visual-inner"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={data.title}
            variants={ANIMATIONS.image}
            initial="initial"
            animate="animate"
            exit="exit"
            className="visual-img"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>
    <motion.div layout="position" className="status-pill">
      <span className={`status-dot dot-${data.colorKey}`} />
      {data.stats.status}
    </motion.div>
  </motion.div>
);

const ProjectDetails = ({ data }: { data: ProjectData }) => (
  <motion.div
    variants={ANIMATIONS.container}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="project-details"
  >
    <motion.span variants={ANIMATIONS.item} className="details-category">
      {data.category}
    </motion.span>
    <motion.h2 variants={ANIMATIONS.item} className="details-title">
      {data.title}
    </motion.h2>
    <motion.p variants={ANIMATIONS.item} className="details-desc">
      {data.description}
    </motion.p>

    <motion.div variants={ANIMATIONS.item} className={`feature-grid`}>
      {data.features.map((feature, idx) => (
        <div className="feature-item" key={feature.label}>
          <div className="feature-header">
            <div className="feature-label">
              <feature.icon size={14} />
              <span>{feature.label}</span>
            </div>
            <span className="feature-value">{feature.value}%</span>
          </div>
          <div className="feature-track">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${feature.value}%` }}
              transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
              className="feature-bar"
            />
          </div>
        </div>
      ))}

      <div className="specs-row">
        {data.url ? (
          <a
            className="specs-btn is-link"
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt size={12} /> View Live
            <FaArrowRight size={12} className="specs-arrow" />
          </a>
        ) : (
          <span className="specs-btn is-coming">
            Coming Soon
            <FaArrowRight size={12} className="specs-arrow" />
          </span>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const Work = () => {
  const [index, setIndex] = useState(0);
  const total = PROJECTS.length;
  const current = PROJECTS[index];

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total]
  );

  return (
    <div className="work-section" id="work">
      <BackgroundGradient colorKey={current.colorKey} />

      <div className="work-heading">
        <h2>
          My <span>Work</span>
        </h2>
      </div>

      <main className={`showcase-main pv-${current.colorKey}`}>
        <div className="nav-side nav-left">
          <button
            type="button"
            className="nav-arrow"
            onClick={() => go(-1)}
          >
            <FaArrowLeft size={20} />
          </button>
        </div>

        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className="showcase-row"
        >
          <ProjectVisual data={current} />
          <motion.div layout="position" className="details-wrap">
            <AnimatePresence mode="wait">
              <ProjectDetails key={current.id} data={current} />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="nav-side nav-right">
          <button
            type="button"
            className="nav-arrow"
            onClick={() => go(1)}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </main>

      <div className="showcase-bottom">
        <span className="showcase-counter">
          0{index + 1} <span className="counter-sep">/</span> 0{total}
        </span>

        <div className="switcher-wrap">
          <motion.div layout className="switcher">
            {PROJECTS.map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setIndex(i)}
                whileTap={{ scale: 0.96 }}
                className={`switcher-btn pv-${project.colorKey}`}
                type="button"
              >
                {index === i && (
                  <motion.span
                    layoutId="island-surface"
                    className="switcher-active"
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  />
                )}
                <span className={`switcher-label ${index === i ? "active" : ""}`}>
                  {project.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;