import React from "react";
import styled from "styled-components";


const SERVICES = styled.div`
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

    .ui{
        i{
            color:#242C37;
            &:hover{
                color:#0b0e11;
            }
        }
    }
  }
  #linkabout {
    color: #9e9393;
  }
  .containerCardServices {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    
.mainMiddle{
  height:600px;
}
  }
  .containerCard {
    background: #fffefe;
    width: 300px;
    min-height:650px;
    border-radius: 1rem;
    display: flex;
    line-height: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
    margin: 1rem;
  transition:all .7s linear;

     
    &:hover{
background: #5d7290;
color:white;
-moz-transform: scale(0.8) skew(-11deg, 0deg);
-webkit-transform: scale(0.8) skew(-11deg, 0deg);
-o-transform: scale(0.8) skew(-11deg, 0deg);
-ms-transform: scale(0.8) skew(-11deg, 0deg);
transform: scale(0.8) skew(-11deg, 0deg);
    }
    
    .heading {
      padding: 1rem 0;
     
    }
    .icon {
      margin: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    .container {
      width: 90%;
      color:white;
    }
    .containerCardServices {
      flex-direction: column;
    }
    .mainMiddle{
  height:auto;
}
    .containerCard {
      width: 70%;
    }
  }


`;

const Services = () => {
  return (
    <SERVICES id="services">
      <div className="logo">
        <h2>Services</h2>
      </div>
      <div className="container">
        <div className="ui">
          <i className="fas fa-user-cog fa-7x "></i>
        </div>
      </div>
      <div>
        <div className="containerCardServices">
          <div className="containerCard">
            <div className="heading">Web Development</div>
            <div className="icon">
              <i className="fas fa-code fa-4x"></i>
            </div>
            <div className="description">
            ♛  If you are looking for Unque , Eye catchy , Super Duper custom design  website you are in the Right Place. <br/>
            <br/>
            <h3>Technology's :</h3>
                -HTML5 & CSS3/javascript <br/>
                -Sass/Scss/or/Tailwind css <br/>
                -Cross-Browser Compatible (Firefox, Chrome, Opera, Safari etc.) <br/>
                -Proper Commented Code  <br/>
                -HAND TYPED Code <br/>
                -Jquery or custom Effects <br/>
                -Upload to Server <br/>
                <br/>
            </div>
          </div>

          <div className="containerCard mainMiddle">
            <div className="heading">Full-Stack Development</div>
            <div className="icon">
              <i className="fas fa-cogs fa-4x"></i>
            </div>
            <div className="description">
            ✔I am a full-stack web development with over 2+ years of experience and a deep passion for programming. <br/> I specialize in responsive web and application development for small to medium size businesses
            <h3>Technology's :</h3>

            * <b> Frontend</b> - HTML/CSS/javascript/typescript/Bootstrap, React.js, Redux,
             jQuery, Material-ui, React-Bootstrap, Tailwind css. <br/>

             * <b> Backend </b>  - Node.js, Express , graphql,  Python , Django , Django-Rest-Framwork <br/>
             * <b>Database </b>  - Firestore, MongoDB, Postgresql, MySQL
            </div>
          </div>

          <div className="containerCard">
            <div className="heading">Mobile Application Development</div>
            <div className="icon">
              <i className="fas fa-mobile-alt fa-4x"></i>
            </div>
            <div className="description">
            ⚡I am  an experienced React Native Developer expert in developing user-friendly Mobile Apps. <br/> I will develop your app from scratch using Expo and React Native. With Expo tools, services, and React, you can build, deploy, and quickly iterate on native Android and iOS apps from the same JavaScript codebase. <br/> You will be able to see and review real-time changes to your app using Expo client application from your smartphone.
            <br/>
            <h3>Framworks :</h3>
            - React-Native
            </div>
          </div>
        </div>
      </div>
    </SERVICES>
  );
};

export default Services;
