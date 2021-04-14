import React from "react";
import styled from "styled-components";
import Fiverr from "./fiverr.png";

const CONTACT = styled.div`
  .logo h2 {
    display: flex;
    height: 4rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #ececee;
  }
  .logo i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social_media {
    h4 {
      text-align: center;
    }
  }
  .contact_from {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    width: 500px;
    margin: auto;
    flex-direction: column;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
    .inputEmail input {
      background: #e4e1e1;
      padding: 0.5rem 5rem;
      font-size: 1.2rem;
      border: none;

      outline: none;
      margin-bottom: 1rem;
      border-bottom: 1px solid #ddd;
      border-radius: 0.3rem;
      &:focus {
        background: #ffffff;
        border-bottom: 2px solid #0f9763;
        box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
      }
    }
    .text_area textarea {
      background: #ddd;
      border: none;
      outline: none;
      font-weight: bold;
      border-radius: 0.3rem;
      font-size: 1.5rem;

      padding: 1rem;
      &:focus {
        background: #ffffff;
        border-bottom: 2px solid #0f9763;
        box-shadow: -1px -2px 40px -7px rgba(0, 0, 0, 0.7);
      }
    }
  }
  .social_media {
    text-align: center;
    border-bottom: 3px solid #108b00;
    width: 8rem;
    margin: 3rem auto 3rem auto;
    padding: 0.4rem;
  }

  .medias {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin:2rem;
    a {
      text-decoration: none;
      color: #263238;
      
      i {
        font-size: 3rem;
        margin: 0 1rem;
      }
    }
  }
  #fiverr {
    width: 50px;
  }

  @media screen and (max-width: 800px) {
    .contact_from {
      width: 70%;
      .inputEmail input {
        padding: 0.5rem 3rem;
      }
    }
  }

 @media screen and (max-width: 360px) {

  .contact_from {
      width: 70%;
      margin:auto;
      .inputEmail input {
        padding: 0.5rem 2rem;
      }
    }


    .medias {
    
    margin:1rem;
    a {
      text-decoration: none;
      color: #263238;
      &:hover{
        color:#0c7567;
      }
      i {
        font-size: 2rem;
        margin: 0 1rem;
      }
    }
  }


 }
  
`;

const Contact = () => {
  return (
    <CONTACT id="contact">
      <div className="container">
        <div className="logo">
          <h2>Contact</h2>
          <i className="fas fa-sms fa-9x"></i>
        </div>
        <div className="contact_from">
          <div className="inputEmail">
            <input type="text" placeholder="Example4@gmail.com" />
          </div>
          <div className="text_area">
            <textarea placeholder="Enter Your Comments"></textarea>
          </div>
        </div>
        <div>
          <h4 className="social_media">My Social Media</h4>
          <div className="medias">
            <a href="https://www.facebook.com/mmmmorsalin1/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/MrMorsalin1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/pyjonathon/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.github.com/pip-pipo">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.fiverr.com/mr_morsalin?up_rollout=true">
              <img id="fiverr" src={Fiverr} alt="" />
            </a>
          </div>
        </div>
      </div>
    </CONTACT>
  );
};

export default Contact;
