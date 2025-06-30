import './WorkExperience.css';
import { DataWorkExperience } from '../../data/dataWork';

function WorkExperience() {
  return (
    <div className="work-experience">
        <h2>Work Experience</h2>
      {DataWorkExperience.map(Datawork =>
        <div className="work" key={Datawork.title}>
          <p className='time'>{Datawork.time}</p>
          <div className="work-content">
            <div className="work-name">
              <h4>{Datawork.title}</h4>
              <p>{Datawork.company}</p>
            </div>
            <div className="work-task">
              <p>{Datawork.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkExperience;