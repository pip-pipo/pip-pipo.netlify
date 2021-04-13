import React, { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 1em 1em;
  position: static;
  background: #0B0E11;
  top: 0;
  left: 0;
  z-index: 1000;

  .logo a {
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
    color: #dee3ae;
    &:hover {
      color: #5fdfa9;
    }
  }
  .bars i {
    cursor: pointer;
    display: block;
    visibility: hidden;
    transition: all linear 0.5s;
    color:#dee3ae;
  }

  @media screen and (max-width: 768px) {
    .bars i {
      display: flex;
      visibility: visible;
    }
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin: 0 1rem;
    a {
      text-decoration: none;
      color: #dee3ae;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #5fdfa9;
      }
    }
  }

  @media screen and (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
`;

const ToggleNav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  margin:0 0 1rem 0;
  padding: 3rem 0;

  background:  #151A21;
  
  li {
    list-style: none;
    height: auto;
    line-height: 4rem;
    button {
      padding: 1rem 3rem;
      background: #151A21;
      outline: none;
      border: 2px solid #ffffff;
      font-size: 1.5rem;
      border-radius: 20px;
      transition: 0.4s all linear;
      color: #ffffff;
      &:hover {
        background: #fff;
        border: 2px solid #000000;
        color: #000000;
      }
    }
    a {
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      font-size: 1.7rem;
      &:hover {
        color: #5fdfa9;
      }
    }
  }
  @media screen and (min-width: 800px) {
    visibility: hidden;
    display: none;
  }
`;

const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <NavBar>
        <div className="logo">
          <Link to="/">PipPipo</Link>
        </div>
        <div className="bars">
          <i
            onClick={() => {
              setToggle(!toggle);
            }}
            className={!toggle ? "fa fa-bars fa-2x" : "fas fa-times fa-2x"}
            aria-hidden="true"
          ></i>
          <i className=""></i>
        </div>

        <Ul className="ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </Ul>
      </NavBar>

      {toggle ? (
        <ToggleNav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <button>Hire Me</button>
          </li>
        </ToggleNav>
      ) : null}
    </>
  );
};

export default Navbar;
