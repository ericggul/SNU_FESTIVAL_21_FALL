import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledOmokGuide = styled.div`

`;
export const OmokBox = styled(motion.div)`
  width: 55vw;
  height: 55vw;
  max-width: 400px;
  max-height: 400px;
  ${FlexCenterStyle};
  flex-direction: column;
  background: white;
  border-radius: 2.4rem;
  padding: 2.4rem;
  justify-content: space-between;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.TEXT_GRAY};
  font-size: 1.1rem;
  font-weight: 500;
  top: 0;
  text-align: left;
`;

export const Button = styled.div`
  bottom: 0;
  margin-bottom: -1rem;
  padding: .5rem 1.8rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  background: ${({ theme }) => theme.palette.OMOK_POPUP_PURPLE};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
