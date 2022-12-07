import { Link } from 'react-router-dom';
import { LandingContainer, LandingHeading, HeadingContainer, SubHeading, LeftBlob, RightBlob } from './landing.styles';
import './landing.styles';


const Landing = () => {

   return (
     <LandingContainer>
       <RightBlob className="third" />
       <RightBlob className="half teal" />
       <RightBlob className="left" />
       <RightBlob className="left one" />
       <RightBlob className="right" />
       <Link to="/home">
         <HeadingContainer>
           <LandingHeading>Cecilia Rossi Garcia</LandingHeading>
           <SubHeading>front-end/ui developer</SubHeading>
         </HeadingContainer>
       </Link>
       <LeftBlob />
       <LeftBlob className="half teal" />
       <LeftBlob className="left" />
       <LeftBlob className="left one" />
       <LeftBlob className="right" />
     </LandingContainer>
   );
}

export default Landing;