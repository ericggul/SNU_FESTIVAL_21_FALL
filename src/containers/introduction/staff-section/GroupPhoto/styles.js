import styled from 'styled-components';

export const StyledGroupPhoto = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: calc(80vw );
  height: calc((80vw ) * 0.5625);

  @media (min-width: 1000px){
    width: 800px;
    height: 450px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
