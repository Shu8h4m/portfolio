import "./project.css";
const Project = () => {
  return (
    <a
      href="https://capable-brioche-047cbe.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="card">
        <div className="card-image">
          <img src="public\Bhoyar-social-app.png" alt="Project" />
        </div>
        <div className="card-content">
          <h3>Social App</h3>
          <p>A Social media application built with React, where you can...</p>
          <span className="author">by Shubham</span>
        </div>
      </div>
    </a>
  );
};

export default Project;
