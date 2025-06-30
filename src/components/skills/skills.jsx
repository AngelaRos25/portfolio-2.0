import { DataSkills } from '../../data/dataSkills';
import './skills.css';

function skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className='skills-container'>
        {DataSkills.map(skill =>
          <div className="skill-card" key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default skills;