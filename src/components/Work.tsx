import { useState, type ComponentType } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaCubes, FaGamepad, FaRulerCombined, FaBrain, FaComments, FaMagic, FaChartLine, FaCube, FaWaveSquare, FaArrowRight, FaSlidersH } from "react-icons/fa";
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
  stats: {
    status: string;
    progress: number;
  };
  features: FeatureMetric[];
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
      { label: "NLP Power", value: 94, icon: FaBrain },
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
    id: "portfolio3d",
    label: "3D Web",
    category: "Web Development",
    title: "3D Portfolio Website",
    description:
      "An interactive 3D portfolio featuring a rigged character model, smooth scroll animations, cinematic GSAP transitions, and a physics-based tech stack visualization.",
    image: "/images/portolio.png",
    colorKey: 4,
    stats: { status: "Live Website", progress: 100 },
    features: [
      { label: "3D Performance", value: 96, icon: FaCube },
      { label: "Smoothness", value: 93, icon: FaWaveSquare },
    ],
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
    initial: { opacity: 0, scale: 1.5, filter: "blur(15px)", rotate: -30, x: -80 },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotate: 0,
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

    <motion.div variants={ANIMATIONS.item} className={`feature-grid fg-${data.colorKey}`}>
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
        <span className="specs-btn">
          <FaSlidersH size={13} /> View Live
          <FaArrowRight size={13} className="specs-arrow" />
        </span>
      </div>
    </motion.div>
  </motion.div>
);

const Switcher = ({
  activeId,
  onToggle,
}: {
  activeId: string;
  onToggle: (id: string) => void;
}) => (
  <div className="switcher-wrap">
    <motion.div layout className="switcher">
      {PROJECTS.map((project) => (
        <motion.button
          key={project.id}
          onClick={() => onToggle(project.id)}
          whileTap={{ scale: 0.96 }}
          className={`switcher-btn pv-${project.colorKey}`}
          type="button"
        >
          {activeId === project.id && (
            <motion.span
              layoutId="island-surface"
              className="switcher-active"
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            />
          )}
          <span className={`switcher-label ${activeId === project.id ? "active" : ""}`}>
            {project.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  </div>
);

const Work = () => {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);
  const current = PROJECTS.find((p) => p.id === activeId)!;

  return (
    <div className="work-section" id="work">
      <BackgroundGradient colorKey={current.colorKey} />

      <div className="work-heading">
        <h2>
          My <span>Work</span>
        </h2>
      </div>

      <main className={`showcase-main pv-${current.colorKey}`}>
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
      </main>

      <Switcher activeId={activeId} onToggle={setActiveId} />
    </div>
  );
};

export default Work;