import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  0% { background-color: #69717d; }
  100% { background-color: transparent; }`;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  .spinner {
    height: 28px;
    position: relative;
    width: 28px;
  }

  .spinner-blade {
    animation: ${fadeAnimation} 1s infinite linear;
    background-color: transparent;
    border-radius: 2px;
    bottom: 0;
    height: 8px;
    left: 50%;
    position: absolute;
    transform-origin: center -8px;
    width: 3px;
  }`;

interface BladeProps {
  index: number;
};
const StyledBlade = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "index"
}) <BladeProps>`
  animation: ${fadeAnimation} 1s infinite linear;
  background-color: transparent;
  border-radius: 1px;
  bottom: 0;
  height: 8px;
  left: 50%;
  position: absolute;
  transform-origin: center -8px;
  width: 3px;

  ${({ index }) => `
    animation-delay: ${index * 0.083}s;
    transform: rotate(${index * 30}deg);
  `}`;

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        {Array.from({ length: 12 }).map((_, i) => (
          <StyledBlade index={i} key={i} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Loading;