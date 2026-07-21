import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Mafia War Game",
    category: "Java Game / OOP",
    description:
      "A console-based game featuring multiple game mechanics built entirely with Object-Oriented Programming concepts.",
    tools: ["Java", "OOP", "Console UI", "Game Logic"],
    image: "/images/intro.jpg",
    url: "",
  },
  {
    title: "Arduino Radar System",
    category: "DLD Hardware Project",
    description:
      "Detects nearby objects and displays them on a radar-style interface using Arduino and ultrasonic sensing technology.",
    tools: ["Arduino Uno", "HC-SR04", "Servo Motor", "Processing IDE"],
    image: "/images/radar.jpeg",
    url: "",
  },
  {
    title: "Defy AI Chatbot",
    category: "AI & NLP",
    description:
      "An intelligent conversational AI chatbot with natural language processing, context awareness, and multi-domain knowledge support powered by modern LLM APIs.",
    tools: ["Python", "OpenAI", "Gemini", "Groq", "FastAPI", "React"],
    image: "/images/DEFY pic.png",
    url: "",
  },
  {
    title: "AIForge",
    category: "AI SaaS Platform",
    description:
      "A full-stack SaaS platform leveraging AI to automate content creation, featuring subscription billing, dashboard analytics, and real-time collaboration tools.",
    tools: ["Next.js", "TypeScript", "Stripe", "OpenAI", "PostgreSQL"],
    image: "/images/AIForge.png",
    url: "",
  },
  {
    title: "3D Portfolio Website",
    category: "Web Development",
    description:
      "An interactive 3D portfolio featuring a rigged character model, smooth scroll animations, cinematic GSAP transitions, and a physics-based tech stack visualization.",
    tools: ["React", "Three.js", "GSAP", "TypeScript", "React Three Fiber"],
    image: "/images/portolio.png",
    url: "",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    const scrollThumb = document.getElementById("workScrollThumb");
    if (scrollThumb) {
      const track = scrollThumb.parentElement;
      if (track) {
        const maxTravel = track.offsetWidth - scrollThumb.offsetWidth;
        timeline.to(
          scrollThumb,
          {
            x: maxTravel,
            ease: "none",
          },
          0
        );
      }
    }

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-card">
                <div className="work-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="work-card-header">
                  <span className="work-number">0{index + 1}</span>
                  <span className="work-category-badge">{project.category}</span>
                </div>
                <div className="work-card-body">
                  <h3 className="work-project-title">{project.title}</h3>
                  <p className="work-description">{project.description}</p>
                </div>
                <div className="work-card-footer">
                  <div className="work-tags-label">Stack</div>
                  <div className="work-tags-row">
                    {project.tools.map((tool, i) => (
                      <span className="work-tag" key={i}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.url !== undefined && (
                    <a
                      href={project.url || "#"}
                      className="work-url-btn"
                      target={project.url ? "_blank" : undefined}
                      rel={project.url ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if (!project.url) e.preventDefault();
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      {project.url ? "View Live" : "Coming Soon"}
                    </a>
                  )}
                </div>
                <div className="work-card-glow"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="work-scroll-indicator">
          <div className="scroll-track">
            <div className="scroll-thumb" id="workScrollThumb"></div>
          </div>
          <span className="scroll-label">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Work;
