import "./home.css";
import { GitHub, LinkedIn, Email, ArrowOutward } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-name">Shubham Bhoyar</h1>
      <section id="intro">
        <h2>Hi, I’m Shubham Bhoyar!</h2>
        <p>
          Welcome to my portfolio! I’m a web developer with a unique
          journey—starting my career as a{" "}
          <strong>Microsoft Dynamics 365 Consultant</strong>, I gained deep
          experience in <strong>CRM systems</strong>. However, my passion for
          coding and development led me to transition into full-stack
          development, and I’ve recently completed a <strong>MERN Stack</strong>{" "}
          course from UpGrad.
        </p>
        <p>
          Now, I’m fully focused on building innovative web applications. I
          enjoy solving complex problems and creating user-friendly experiences
          through clean and efficient code. I’m actively seeking opportunities
          in <strong>web development</strong> where I can apply my skills, grow
          professionally, and contribute to exciting projects.
        </p>
        <p>
          I’m open to <strong>any opportunity</strong> that challenges me and
          helps me push the boundaries of web development. Let's connect and
          create something amazing together!
        </p>
      </section>

      <div className="home-links-container">
        <a href="https://github.com/Shu8h4m" className="home-link">
          <GitHub className="home-link-icon" />
          <span>GitHub</span>
          <ArrowOutward className="home-link-arrow" />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-bhoyar-377a98160/"
          className="home-link"
        >
          <LinkedIn className="home-link-icon" />
          <span>LinkedIn</span>
          <ArrowOutward className="home-link-arrow" />
        </a>
        <a href="mailto:its.me.shubham6866@gmail.com" className="home-link">
          <Email className="home-link-icon" />
          <span>Email</span>
          <ArrowOutward className="home-link-arrow" />
        </a>
      </div>
    </div>
  );
};

export default Home;
