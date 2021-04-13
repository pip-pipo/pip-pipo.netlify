import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ABOUT = styled.div`
  margin-top: 1rem;
  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color: #000000;
    border-bottom:2px solid #ececee;
  }
  .container {
    width: 70%;
    padding: 1rem;
    margin: auto;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 2rem;
    font-size: 1.5rem;
    color: #bbb3b3;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .ui{
        i{
            color:#242C37;
              &:hover{
                color:#0b0e11;
            }
        }
    }
    h5{
         &:hover{
          color:#706767;
      }
    }
  }
  #linkabout {
    color: #9e9393;
  }
  .gotoTOp{
    position:fixed;
    bottom:30px;
    right:30px;
    border-radius:2rem;
      background: #3b3939;
    padding:1.10rem;
    &:hover{
    background: #f7f7f7;
    }
  }
  @media screen and (max-width: 800px) {
    .container {
      width: 90%;
    }
  }
`;

const About = () => {
  return (
    <ABOUT id="about">
      <div className="logo">
        <h2>About</h2>
      </div>
      <div className="container">
        <div className="ui">
          <i className="fas fa-user-alt fa-7x" ></i>
        </div>
        <h5>
         Hi I am <strong>Morsalin..</strong> <br/>
         <span>I am a Full Stack Web Developer & Programmer also A Freelancer .. specializiing in mostly JS, React, Mern-Stack, but also write Python, C++ and some other stuff.</span> <br/>
          I build modern web applications professionally. I am a passionate full-stack software developer who  loves ❤  to learn and meet professionals from different areas. <br/> I will help you transform your personal or business concept into a successful based product.
          <Link id="linkabout" to="/">
            Read More
          </Link>
        </h5>

      </div>
      <div className="gotoTOp"><i className="fas fa-angle-up fa-2x"></i></div>
    </ABOUT>
  );
};

export default About;
