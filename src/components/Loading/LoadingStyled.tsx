import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const LoadingStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;

  .loader {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 6px;
    top: 10px;
    width: 12px;
    height: 12px;
    color: ${mainTheme.colors.header.dark};
    background: currentColor;
    border-radius: 50%;
    box-shadow: 25px 2px, 10px 22px;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyled;
