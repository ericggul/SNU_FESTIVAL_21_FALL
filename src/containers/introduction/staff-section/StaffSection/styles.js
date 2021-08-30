import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const Wrapper = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  position: relative;
  ${({ gradient }) => !gradient
    && 'background: #c0b9db'
}
  ${({ gradient }) => gradient
    && 'background-image: linear-gradient(#c0b9db,#111734)'
}


`;

export const StyledStaffSection = styled.div`
  max-width: 800px;
  width: 80%;
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  
  z-index: ${({ theme }) => theme.zIndex.base};
`;
