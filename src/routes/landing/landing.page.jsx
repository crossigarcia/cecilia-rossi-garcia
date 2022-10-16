import { useState, useEffect } from 'react';
import { LandingContainer, LandingHeading, HeadingContainer, SubHeading } from './landing.styles';
import './landing.styles';


const Landing = () => {
   const [animate, setAnimate] = useState(false);

   // useEffect(() => {
   //    const interval = setInterval(() => {
   //       setAnimate(prev => !prev);
   //    }, 5000);
   //    return () => clearInterval(interval);
   // }, []);

   return (
      <LandingContainer>
         <HeadingContainer className={animate && 'animated'}>
            <LandingHeading>Cecilia Rossi Garcia</LandingHeading>
            <SubHeading>front-end/ui developer</SubHeading>
         </HeadingContainer>
      </LandingContainer>
   )
}

export default Landing;