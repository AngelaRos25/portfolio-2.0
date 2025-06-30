import cat from '../../assets/animal.png';

import './Title.css';
function title({title}) {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <img src={cat} alt="" />
      <div className='line'></div>
    </div>
  );
}
export default title;