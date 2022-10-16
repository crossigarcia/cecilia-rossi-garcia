import styled from 'styled-components';

export const LandingContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: var(--main);
`

export const LandingHeading = styled.h1`
   color: var(--text);
   padding: padding: 5px;
`

export const HeadingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: font-size 0.5s ease;

   // &.animated {
   //    font-size: 17px;
   // }
`

export const SubHeading = styled.span`
   color: var(--text);
   font-weight: 200;
   font-size: 18px;
   margin: 0 10px;
`