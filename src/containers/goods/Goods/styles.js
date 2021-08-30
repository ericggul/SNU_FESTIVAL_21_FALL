import styled from 'styled-components';

export const StyledGoods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.DARK_PURPLE};
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  
  max-width: 1000px;
  color: ${({ theme }) => theme.palette.WHITE};
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const FakeButton = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;  

  @keyframes hint {
    0% { transform: scale(1); }
    10% { transform: scale(1.05); }
    20% { transform: scale(1); }
    30% { transform: scale(1.1); }
    40% { transform: scale(1); }
    50% { transform: scale(1.15); }
    60% { transform: scale(1); }
    70% { transform: scale(1.2); }
    80% { transform: scale(1); }
    90% { transform: scale(1.25); }
    100% { transform: scale(1); }
  }
  
  animation-name: hint;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 20s;
`;
