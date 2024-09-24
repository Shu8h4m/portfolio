import "./skills.css";
const Skills = () => {
  return (
    <div className="skills-container">
      <table>
        <tr>
          <th>Prog. Languages :</th>
          <td>JavaScript</td>
        </tr>
        <tr>
          <th>Web Development :</th>
          <td>HTML, CSS</td>
        </tr>
        <tr>
          <th>Frameworks:</th>
          <td>Express js, Next.js, Tailwind CSS</td>
        </tr>
        <tr>
          <th>Libraries :</th>
          <td>React.js, Redux, Socket io, NextAuth.js, Material UI</td>
        </tr>
        <tr>
          <th>Database :</th>
          <td>MongoDB</td>
        </tr>
        <tr>
          <th>Other skills :</th>
          <td>Node.js, Git, Vercel</td>
        </tr>
      </table>
    </div>
  );
};

export default Skills;
