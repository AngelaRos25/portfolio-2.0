import Form from 'react-bootstrap/Form';
import { useForm } from '@formspree/react';

import './contactMe.css';
function TextControlsExample() {

  const [state, handleSubmit] = useForm("xrbkjkrb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className='contact-me'>
      <p>Se sei interessato al mio profilo, hai domande o vuoi semplicemente scambiare idee, non esitare a contattarmi tramite questo modulo!
        Ti risponderò il prima possibile!
        Oppure puoi contattarmi tramite i social media.</p>
      <Form onSubmit={handleSubmit}>
        <div className='form-container'>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="nome" name='nome' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cognome">
            <Form.Label>Cognome</Form.Label>
            <Form.Control type="cognome" name='cognome' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Indirizzo email</Form.Label>
            <Form.Control type="email" name='email' />
          </Form.Group>
        </div>
        <div className='message-container'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Messaggio</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button disabled={state.submitting}>INVIA MESSAGGIO</button>
        </div>
      </Form>
    </div>
  );
}

export default TextControlsExample;