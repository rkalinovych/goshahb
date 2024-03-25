import logo from './logo.svg';
import './App.css';
import Confetti from 'react-confetti';
import { useState, useEffect } from "react";

export default function App() {
  const [yesPressed, setYesPressed] = useState(false);


  function handleButtonClick() {
    setYesPressed(true);
  }  
  return (
    // <Confetti />
    <>
    { 
    yesPressed
      ?
      <>
        <Confetti />
        <video className="content-container video" src="Rick Astley - Never Gonna Give You Up (Video)-dQw4w9WgXcQ.mp4" autoplay="true" controls={true} />
        <span className="content-container text">З Днем Народження, Гошенька! 😘😘😘</span> 
      </>
      : <img onClick={handleButtonClick} className="content-container heart-image" src="sticker.webp" alt="love"/>
      }
    </>
  );
}


