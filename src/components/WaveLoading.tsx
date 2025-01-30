import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset,
    0 5px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const LoaderBeforeAfter = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 45%;
  top: -40%;
  background-color: #2e2e2e;
  animation: ${waveAnimation} 5s linear infinite;

  &:first-child {
    border-radius: 30%;
    background: rgba(122, 122, 122, 0.4);
  }
`;

const WaveLoading = () => (
    <LoaderWrapper>
        <LoaderBeforeAfter />
        <LoaderBeforeAfter />
    </LoaderWrapper>
);

export default WaveLoading;
