import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <span className='blue_gradient '>Miguel Gasang</span>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
         <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc '>
      Summarize text online like professional writers with Top Notch AI-Summarizer
      </h2>
    </header>
  );
};

export default Hero;
