import React, { FC } from "react";
import styled from "styled-components";

const AminationSettings = styled.i`
  color: #d8e6df;
  animation: App-logo-spin infinite 20s linear;
  position: absolute;
  top: 70px;
  left: 390px;
  &:hover {
    color: #ceb3b3;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width:800px){
    font-size:5rem;top: 60px;
  left: 390px;
  }

  @media screen and (max-width:400px){
    font-size:5rem;top: 60px;
  left: 230px;
  }

`;

const StartAnimation = styled.i`
  color: #d8e6df;
  animation: App-logo-spin infinite 20s linear;
  position: absolute;

  top:40px;
  left: 274px;
  &:hover {
    color: #ceb3b3;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width:800px){
    font-size:5rem;top: 260px;
  left: 90px;
  display:none;
  }
`;

const FaceData: FC = () => {
  return (
    <>
      <AminationSettings
        className="fa fa-cog fa-9x makeAnimate"
        aria-hidden="true"
      ></AminationSettings>

      <StartAnimation
        className="fas fa-atom fa-7x"
        aria-hidden="true"
      ></StartAnimation>
    </>
  );
};

export default FaceData;
