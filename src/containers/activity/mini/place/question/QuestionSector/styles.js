import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledQuestionSector = styled.div`
  width: 100%;
  ${FlexCenterStyle};
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: ${({ theme }) => theme.zIndex.fullScreen};
`;
