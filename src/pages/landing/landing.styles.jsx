import styled from 'styled-components';

export const LandingContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: var(--main);
   position: relative;
`

export const LandingHeading = styled.h1`
   color: var(--text);
   z-index: 5;
   padding: 5px;
`;

export const HeadingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: font-size 0.5s ease;
`

export const SubHeading = styled.span`
  color: var(--text);
  font-weight: 200;
  font-size: 18px;
  z-index: 5;
  margin: 0 10px;
`;

export const LeftBlob = styled.div`
  background-color: var(--text-three);
  height: 600px;
  width: 610px;
  border-radius: 50%;
  position: absolute;
  bottom: -360px;
  transition: all 0.1s ease-out;
  animation: rotate 20s infinite;

  &.half {
    opacity: 0.5;
    z-index: 2;

    &.teal {
      background-color: var(--text-two);
      left: 40px;
    }
    
  }

  &:hover {
      bottom: -390px;
    }
  }

  &.left {
    left: -90px;
    background-color: var(--text-three);

    &.one {
      bottom: -100px;
      left: -300px;
      &:hover {
        bottom: -120px;
      }
    }
  }

  &.right {
    right: 600px;
    bottom: -500px;
    background-color: var(--text-two);
  }

  @keyframes rotate {
    0% {
      transform: rotate(-360deg);
    }

    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const RightBlob = styled.div`
  background-color: var(--text-three);
  height: 600px;
  width: 610px;
  border-radius: 50%;
  position: absolute;
  top: -360px;
  transition: all 0.1s ease-out;
  animation: rotate 20s infinite;

  &.half {
    opacity: 0.5;
    z-index: 3;

    &.teal {
      background-color: var(--text-two);
      right: 40px;
    }

    &:hover {
      top: -390px;
    }
  }

  &.third {
    &:hover {
      top: -390px;
    }
  }

  &.left {
    right: -90px;
    opacity: 0.7;
    background-color: var(--text-three);

    &.one {
      top: -100px;
      right: -300px;
      &:hover {
        top: -120px;
      }
    }
  }

  &.right {
    left: 600px;
    bottom: -500px;
    background-color: var(--text-two);
  }

  @keyframes rotate {
    0% {
      transform: rotate(-360deg);
    }

    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;