import styled from "styled-components";
import { useState } from "react";
import ApercuArabicPro from "./fonts/ApercuArabicPro-Regular.woff";

const API = "https://ptsv2.com/t/labjq-1649938066/post";

const FormWrapper = styled.section`
  @font-face {
    font-family: "ApercuArabicPro";
    src: url(${ApercuArabicPro}) format("woff");
  }
  padding: 150px 150px 174px 150px; ;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: #3e3e3e;
  line height: 52px;
`;

const Input = styled.input`
  min-width: 557px;
  padding: 30px 46px;
  margin-top: 8px;
  font-size: 24px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: ${(props) => props.height};
  &::placeholder {
    color: #2d2d2d;
    font-family: ApercuArabicPro;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.4px;
  }
`;
const Textarea = styled(Input)``;

const Button = styled.button`
  margin-top: 23px;
  color: #fff;
  border: none;
  font-family: ApercuArabicPro;
  font-size: 18px;
  font-weight: 400;
  padding: 23.5px 52px;
  background: #fad34f;
  border-radius: 500px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  async function sendingData(e) {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        text: text,
      }),
    })
      .then(() => {
        console.log("Отправлено");
      })
      .catch(() => {
        alert("Sending error!");
      })
      .finally(() => {
        setName("");
        setEmail("");
        setText("");
      });
  }

  return (
    <FormWrapper>
      <Title>Reach out to us!</Title>

      <form onSubmit={sendingData}>
        <div>
          <Input
            required
            type="text"
            placeholder="Your name*"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div>
          <Input
            required
            type="email"
            placeholder="Your e-mail*"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div>
          <Textarea
            as="textarea"
            required
            type="text"
            placeholder="Your message*"
            onChange={handleTextChange}
            value={text}
            height="189px"
          />
        </div>

        <Button>Send message</Button>
      </form>
    </FormWrapper>
  );
}

export default Form;
