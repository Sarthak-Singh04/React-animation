import { gsap,CSSPlugin,Expo } from 'gsap';
import React, { useEffect, useState } from 'react';


gsap.registerPlugin(CSSPlugin);


function App() {
  const [counter,setcounter]=useState(0); // assuming you have a counter variable

  useEffect(() => {
    const count = setInterval(() => {
      setcounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          setcounter(100);
          reveal();
          return prevCounter;
        }
      });
    }, 25);
  
    return () => {
      clearInterval(count);
    };
  }, []);
  

  const reveal = () => {
    const t1 = gsap.timeline();
  
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.6,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".title-lines", { display: "block", duration: 0.3 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };
  





  return (
    <div className="Appcontainer w-screen h-screen bg-black relative">
      <div className="Loading h-full w-full bg-gray-900 flex justify-center items-center absolute top-0">
        <div className="follow absolute bg-orange-500 h-2 w-0 left-0 z-2"></div>
        <div className="ProgressBar absolute left-0 bg-white h-2 w-0" id="progress-bar" style={{ width: counter + "%", transition: '0.4s ease-out' }}></div>


        <div className="hide Count absolute text-7xl text-white -translate-y-14 font-medium" id="count">{counter}%</div>
      </div>

      <div className="content h-full w-0 absolute left-0 top-0 bg-gray-900 z-2 flex items-center justify-center flex-col overflow-hidden text-white px-auto">
        <p className="title-lines text-center text-8xl opacity-0 hidden font-medium m-0">The greatest glory in living lies</p>
        <p className="title-lines text-center text-8xl opacity-0 hidden font-medium m-0">not in never falling,</p>
        <p className="title-lines text-center text-8xl opacity-0 hidden font-medium m-0">but in rising every time we fall.</p>
        <p className="title-lines text-center text-8xl opacity-0 hidden font-medium m-0">-Nelson Mandela</p>
      </div>
    </div>
  );
}

export default App;
