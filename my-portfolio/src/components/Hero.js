import React from 'react';
import Button from './Button';

import { Download } from 'lucide-react';
import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri';

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='descriptionContainer'>
        <p className='heroTitle'>Software Engineer</p>
        <h1 className='name'>Hello, I am Ali Asjad</h1>
        <p className='description'>I'm a Full Stack developer based in Mississauga, passionate about creating innovative solutions with technologies like AWS, GCP, and Azure. When I'm not coding, you can find me on the soccer field or cricket ground.</p>
        <div className='buttonGroup'>
          <Button href="resume.pdf" variant='primary'>
            Resume   
            <Download size={18}/>
          </Button>
          <Button href="https://www.linkedin.com/in/ali-asjad-412515229/" variant='secondary'> <RiLinkedinFill /></Button>
          <Button href="https://github.com/Ali-Asjad" variant='secondary'> <RiGithubFill/> </Button>
        </div>
      </div>
      <div className='img-container'>
        <div className='bg-shape'></div>
        <div className='dev-img-container'>
          <img
            className='dev-img'
            src='/Icons/Subject.png'
            alt='Developer Toon'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
