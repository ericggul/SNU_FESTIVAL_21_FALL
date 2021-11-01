import React from 'react';
import Header from '@F/layout/Header';
import Background from '@F/layout/Background';
import styled from 'styled-components';
import { FlexCenterStyle, ResponsiveHeightStyleTwo, ResponsiveWidthStyleTwo } from '@S/responsive/display';

const Body = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  ${FlexCenterStyle};
  flex-direction: column;
  
  p {
    margin: 3rem 0 0;
    text-align: center;
    line-height: 2;
    color: ${({ theme }) => theme.palette.PURPLE70};
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  ${ResponsiveWidthStyleTwo};
  ${ResponsiveHeightStyleTwo};
`;

function NotFound() {
  return (
    <>
      <Header />
      <Background />
      <Body>
        <VideoWrapper
          widths={[600, 525, 300]}
          heights={[600 / 1.77, 525 / 1.77, 300 / 1.77]}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TN2AUknb64A?autoplay=1"
            title="축하사 홍보영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper>
        <p style={{ color: 'white', textShadow: '0 0 .5rem white' }}>
          404 PAGE NOT FOUND
        </p>
      </Body>
    </>
  );
}
export default NotFound;
