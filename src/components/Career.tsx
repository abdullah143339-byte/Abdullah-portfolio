import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Artificial Intelligence</h4>
                <h5>University Student</h5>
              </div>
              <h3>2024 - PRESENT</h3>
            </div>
            <p>
              Actively developing programming skills through academic coursework, logic design, and hands-on personal coding projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Software Developer</h4>
                <h5>Internship Search</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Seeking internship opportunities to gain practical experience in software development, AI concepts, and contribute to innovative software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
