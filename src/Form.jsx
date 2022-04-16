import styled from "styled-components";
import { useState } from "react";
import ApercuArabicPro from "./fonts/ApercuArabicPro-Regular.woff";
import ld from "./img/icons/ld.svg";
import tw from "./img/icons/tw.svg";
import fb from "./img/icons/fb.svg";
import pin from "./img/icons/pin.svg";

const API = "http://82.202.168.156:3000";

const FormWrapper = styled.section`
  @font-face {
    font-family: "ApercuArabicPro";
    src: url(${ApercuArabicPro}) format("woff");
  }
  padding: 148px;
  @media (max-width: 1200px) {
    padding: 100px 100px 100px 100px;
    text-align: center;
  }
  @media (max-width: 760px) {
    padding: 80px;
  }
  @media (max-width: 500px) {
    padding: 80px 15px;
  }
  @media (max-width: 400px) {
    
    padding: 80px 5px;
  }
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
  @media (max-width: 760px) {
    min-width: 450px;
  }
  @media (max-width: 600px) {
    min-width: 370px;
    padding: 18px 20px;
  }
  @media (max-width: 400px) {
    min-width: 318px;
    padding: 10px 12px;
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

const SocialIcons = styled.div`
  display: flex;
`;

const SocialLink = styled.button`
  cursor: pointer;
  margin: 13px;
  border: none;
  height: 18px;
  width: 18px;
  background: url(${(props) => props.img}) 100% 100% no-repeat;
`;

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: email,
        text: text,
      }),
    })
      .then((res) => {
        console.log("Отправлено", res.status);
      })
      .catch(() => {
        alert("Sending error!");
      })
      .finally(() => {
        setUsername("");
        setEmail("");
        setText("");
      });
  }

  return (
    <>
      <FormWrapper>
        <Title>Reach out to us!</Title>
        <form onSubmit={sendingData}>
          <div>
            <Input
              required
              type="text"
              placeholder="Your name*"
              onChange={handleUsernameChange}
              value={username}
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
      <footer>
        <SocialIcons>
          <SocialLink img={ld}></SocialLink>
          <SocialLink img={tw}></SocialLink>
          <SocialLink img={fb}></SocialLink>
          <SocialLink img={pin}></SocialLink>
        </SocialIcons>
      </footer>
    </>
  );
}

export default Form;
