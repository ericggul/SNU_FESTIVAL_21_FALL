import styled from 'styled-components';
import { CenterImageStyle } from '@S/responsive/display';

export const StyledLoading = styled.div`
    color: white;
    display: flex;
    ${CenterImageStyle};
    flex-direction: column;
    text-align: center;
    margin-top: ${({ theme }) => theme.windowHeight * 0.4}px;
`;
