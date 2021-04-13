import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ABOUT = styled.div`
  margin-top: 1rem;
  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color: #000000;
    border-bottom: 2px solid #ececee;
  }


.makehidden{
  display:none;
  /* visibility:hidden; */

}




  .container {
    width: 70%;
    padding: 1rem;
    margin: auto;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 2rem;
    font-size: 1.5rem;
    color: #bbb3b3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ui {
      i {
        color: #242c37;
        &:hover {
          color: #0b0e11;
        }
      }
    }
    h5 {
      &:hover {
        color: #706767;
      }
    }
  }
  #linkabout {
    color: #9e9393;
    padding: 0.5rem 1rem;
    text-decoration: underline;
    margin: 0 1rem;
    &:hover {
      color: #066991;
    }
  }

  .gotoTOp {
    border:none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 2rem;
    background: #3b3939;
    padding: 1.1rem;
    &:hover {
      background: #686b6d;
    }
  }
  @media screen and (max-width: 800px) {
    .container {
      width: 90%;
    }
  }
`;



const About = () => {
  const [readmorebutton,setreadmorebutton] = useState<null|boolean>(false)
 
  const ReadMore = () => {
    const addReadMore = document.getElementById("addReadMore");
     addReadMore!.classList.toggle("makehidden")
     if(addReadMore!.classList.contains("makehidden")){
       setreadmorebutton(false);
       console.log('hi')
     }else{

       setreadmorebutton(true);
     }
  };


  return (
    <ABOUT id="about">
      <div className="logo">
        <h2>About</h2>
      </div>
      <div className="container">
        <div className="ui">
          <i className="fas fa-user-alt fa-7x"></i>
        </div>
        <h5>
          Hi I am <strong>Morsalin..</strong> <br />
          <span>
            I am a Full Stack Web Developer & Programmer also A Freelancer ..
            specializiing in mostly JS, React, Mern-Stack, but also write
            Python, C++ and some other stuff.
          </span>{" "}
          <br />
          I build modern web applications professionally. I am a passionate
          full-stack software developer who loves ❤ to learn and meet
          professionals from different areas. <br /> I will help you transform
          your personal or business concept into a successful based product.
          <div className="readmoreAdd" id="addReadMore">
            <br/>
            <br/>
          Hi I am Morsalin..
          I am a Full Stack Web Developer & Programmer also A Freelancer .. specializiing in mostly JS, React, Mern-Stack, but also write Python, C++ and some other stuff.
          I build modern web applications professionally. I am a passionate full-stack software developer who loves ❤ to learn and meet professionals from different areas.
          I will help you transform your personal or business concept into a successful based product.
          hello
      
          </div>
          <button onClick={ReadMore} id="linkabout" className="readmore">
            {readmorebutton?"Expand Read More":"Read More"}
          </button>
        </h5>
      </div>
      <button className="gotoTOp">
        <i className="fas fa-angle-up fa-2x"></i>
      </button>
    </ABOUT>
  );
};

export default About;
