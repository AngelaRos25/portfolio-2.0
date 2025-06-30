
import './Content.css';
import { FaArrowRightLong } from "react-icons/fa6";


function Content() {
  return (
    <div className="content">
      <div className='text'>
        <p>Mi chiamo Angela Rosace, sono una <strong>programmatrice front-end</strong> e vivo a Venezia, in Italia.
          <br />
          Dal 2023, ho iniziato il corso di programmatore front-end su <strong>Start2Impact</strong>. Quando non scrivo codice, mi troverete ad accarezzare i miei gatti, ad allenarmi in palestra, a giocare a videogiochi o a leggere.</p>
      </div>
      <div className='vedi-piu'>
        <a href="/about">
          <p>Vedi di più su di me</p>
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
}
export default Content;