import styled from 'styled-components';
import {useState} from 'react';

const Title = styled.h1`
font-weight: 400;
font-size: 40px;
color: #3E3E3E;
`;

function Form () {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [text, setText] = useState ('');

  const handleNameChange = e => {
    setName (e.target.value);
  };

  const handleEmailChange = e => {
    setEmail (e.target.value);
  };

  const handleTextChange = e => {
    setText (e.target.value);
  };

  async function sendingData (e) {
    e.preventDefault ();
    const API = 'https://ptsv2.com/t/labjq-1649938066/post';

    await fetch (API, {
      method: 'POST',
      body: JSON.stringify ({
        name: name,
        email: email,
        text: text,
      }),
    })
      .then (() => {
        console.log ('Отправлено');
      })
      .catch (() => {
        alert ('Sending error!');
      })
      .finally (() => {
        setName ('');
        setEmail ('');
        setText ('');
      });
  }

  return (
    <div className="form">
      <div className="container" />
      <Title>Reach out to us!</Title>

      <form onSubmit={sendingData}>

        <div className="FormInput">
          <input
            required
            type="text"
            placeholder="Your name*"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="FormInput">
          <input
            required
            type="email"
            placeholder="Your e-mail*"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div className="FormInput">
          <input
            required
            type="text"
            placeholder="Your message*"
            onChange={handleTextChange}
            value={text}
          />
        </div>

        <button>Send message</button>
      </form>
    </div>
  );
}

export default Form;
