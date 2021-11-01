import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { motion } from 'framer-motion';

export const StyledOmokGuide = styled.div`

`;
export const OmokBox = styled(motion.div)`
  position: relative;
  width: min(50vw, 300px);
  max-width: 400px;
  max-height: 80vh;
  ${FlexCenterStyle};
  flex-direction: column;
  background: white;
  border-radius: 2.4rem;
  padding: 2rem;

`;

export const Description = styled.div`
  ${FlexCenterStyle};
  color: ${({ theme }) => theme.palette.TEXT_GRAY};
  font-size: .9rem;
  font-weight: 500;
  word-break: keep-all;
  top: 0;
  text-align: left;
  margin-bottom: 4rem;

`;

export const Button = styled.div`
  position: absolute;
  bottom: 1rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
  padding: .5rem 1.8rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  background: ${({ theme }) => theme.palette.OMOK_POPUP_PURPLE};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
