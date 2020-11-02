import styled from "styled-components";
import bg from "../imgs/bg.jpg";

export const SignInWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(#bbbb, #fffb), url(${bg});
  background-size: cover;
  .sign-in-box {
    z-index: 2;
    position: absolute;
    width: 100%;
    max-width: 580px;
    top: 42%;
    left: 50%;
    padding: 20px;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    border: 1.5px solid #aaa;
    border-radius: 5px;
    background-color: white;
  }
`;
