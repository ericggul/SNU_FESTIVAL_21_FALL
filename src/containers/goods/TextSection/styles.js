import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTextSection = styled(motion.div)`

`;

export const YellowText = styled.span`
color: ${({ theme }) => theme.palette.STAR_YELLOW};
font-weight: 600;
`;

export const YellowTitle = styled.span`
  color: ${({ theme }) => theme.palette.STAR_YELLOW};
  font-weight: bold;
`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.palette.TEXT_PURPLE};
  font-weight: 600;
`;

export const PurpleTitle = styled.span`
  color: ${({ theme }) => theme.palette.TEXT_PURPLE};
  font-weight: bold;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.p`
  line-height: 1.67;
  font-weight: 500;
  word-break: keep-all;
`;
