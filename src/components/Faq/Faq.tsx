import React from "react";
import styled from "styled-components";
import faq from './Faqs'

const FAQ = styled.div`
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
  .makeHidden {
    display: none;
    visibility: hidden;
    
  }

  .faq_container {
    width: 50%;
    padding: 3rem 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .faqs {
    width: 100%;
    margin: -1rem 0;
    
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #dddcdc;
    flex-direction:column;
color:#7e7a7a;
    padding: 0.9rem 1rem;
    margin:2rem 0;
  }
  .answer {
    width:95%;
    
    color:#7e7a7a;
    background: #eee8e8;
    transition: all 3s linear;
    animation: fadeinout 1s linear ; 
    padding: 0.8rem 1rem;
  }
 
@keyframes fadeinout { 
  50% { opacity: 0; } 
  100%{opacity:1;}
}



@media screen and (max-width:800px){

.faq_container{
  width:90%;
  margin:auto;
}

}

`;
const Faq = () => {
  const makeToggle = (id:number) => {
    const answerElement = document.querySelectorAll('.answer');
    if(answerElement[id]?.classList.contains('makeHidden')){
      answerElement[id].classList.remove("makeHidden")
    }else{
      answerElement[id]!.classList.add("makeHidden")

    }

console.log(id)

  };
  return (
    <FAQ id="faq">
      <div className="logo">
        <h2>FAQ's</h2>
        <i className="far fa-heart fa-7x"></i>
      </div>
      <div className="faq_container">
    {
      faq.map((v,i)=>(
        <div className="faqs">
        <div className="header">
        
        <span>FAQ:  {v.FAQS}  <i onClick={()=>makeToggle(i)} className="fas fa-chevron-down fa-2x"></i></span>
       
           
          <div className="answer makeHidden">
            ANSWER:  {v.ANSWER}
          </div>

          </div>
    </div>
      ))
    }

      </div>
    </FAQ>
  );
};

export default Faq;
