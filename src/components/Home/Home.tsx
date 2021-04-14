import React, { FC } from "react";

import styled from "styled-components";
import About from "./../About/About";
import Services from './../Services/Services';
import Contact from './../Contact/Contact';
import Faq from './../Faq/Faq';

const FullBg = styled.div`
  width: 100%;
  min-height: 50vh;
  background: #242c37;
  top: 0;
  left: 0;
  .HomeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;

    min-height: 50vh;
    h3 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", "sans-serif";
      font-size: 1.3rem;
      white-space: pre-line;
      font-weight: 900;
      color: #e7e1e1;
    }
    a{
      padding: 1em 2.80em;
      border-radius: 10px;
     border:none;
     text-decoration:none;
     color:#ffffff;
        border: 1px solid #ffffff;
      font-size: 1.20rem;

      &:hover {
        color: #f3f1f1;
        background: #5d7290;
        border: 1px solid #ffffff;
      }
    }
  }

  .round{
    display: flex;
    justify-content: center;
    position: relative;
    top: 50;
    left: 0;

    div{
      background-color: #738b7c;
      clip-path: circle(29.6% at 47% 55%);
      width: 8%;
      height: 10vh;
      margin:0 10px;
    }
    :last-child {
      background: #eeebeb;
    }
  }

@media screen and (max-width:800px){
    .HomeContainer{


        h3{
            font-size:1rem;
            padding:1rem;
            white-space: nowrap;
        }
        button{
            font-size:1rem;
        }
    }
}


@media screen and (max-width:400px){
    .HomeContainer{


        h3{
            font-size:0.90rem;
            padding:1rem;
            white-space: nowrap;
        }
        button{
            font-size:1rem;
        }
    }
}


@media screen and (max-width: 360px) {
  h3{
            font-size:0.60rem;
            padding:0.20rem;
            white-space: nowrap;
        }
        button{
            font-size:0.80rem;
        }

}

`;

const Home: FC = () => {
  return (
    <div>
      <FullBg className="fullHome">
        <div className="HomeContainer">
          <h3>Web Development & Web Programming Services</h3>
          <a href="https://www.fiverr.com/mr_morsalin?up_rollout=true">Hire Me</a>
        </div>
        <div className="round">
          <div></div>
          <div></div>
        </div>
        
      </FullBg>
      <About />
      <Services/>
      <Contact/>
      <Faq/>
    </div>
  );
};

export default Home;
