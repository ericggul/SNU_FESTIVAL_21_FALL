import styled from 'styled-components';
import { appear } from '@C/jabti/detail/JabtiDetail/styles';

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 500px;
  position: relative;
  margin-top: -2rem;

  ${appear};
  opacity: 0;
  animation-delay: 1s;
`;

export const ResultImage = styled.img`
  position: absolute;
  width: 96%;
  height: auto;
  ${({ over4, over10 }) => over4 && !over10 && 'left: max(1.2w, 6px)'};
  ${({ over4, over10 }) => over4 && over10 && 'left: 0'};
  ${({ over4 }) => !over4 && 'left: min(0.67vw, 3.3px)'};
`;

export const ResultImageText = styled.img`
  position: absolute;
  width: 96%;
  height: auto;
  left: min(2vw, 10px);
  ${({ over4 }) => over4 && 'top: min(30vw, 150px)'};
  ${({ one }) => one && 'left: 0'};
  ${({ four }) => four && 'left: min(0.67vw, 3.3px)'};

`;
