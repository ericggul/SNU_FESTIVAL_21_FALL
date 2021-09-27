import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const palette = {

  // 관악의 밤 팔레트

  DARK_PURPLE: '#111734',
  PASTEL_PURPLE: '#9f8ec5',
  LIGHT_PURPLE: '#c0b9db',
  TEXT_PURPLE: '#b975e6',
  BORDER_PURPLE: `#dbddef`,
  BLACK_PURPLE: '#0f004e',
  CHOCO_PURPLE: '#9581e9',
  
  WHITE: '#fff',

  STAR_YELLOW: '#feee96',
  STAR_YELLOW2: '#fdfccb',
  WHITE_YELLOW: '#ffffe5',
  NEON_YELLOW: '#f6f8c0',

  // 21 봄 페스월드 팔레트
  // NEWTRO
  ORANGE_NEWTRO: '#e05335',
  GRAY_NEWTRO: '#eeeeee',
  WHITE_NEWTRO: '#fff6ed',
  WHITE20_NEWTRO: '#efe7ce',
  BLACK_NEWTRO: '#1c0b01',

  // PASTEL
  RED_PASTEL: '#ffb3ba',
  PINK_PASTEL: '#fddde6',

  ORANGE_PASTEL: '#ffdfba',

  YELLOW_PASTEL: '#ffffba',
  YELLOW20_PASTEL: '#FFD232',
  YELLOW30_PASTEL: '#ffb400',
  YELLOW40_PASTEL: '#ff8200',
  YELLOW50_PASTEL: '#FF9100',
  YELLOW60_PASTEL: '#FF9100',

  GREEN_PASTEL: '#baffc9',

  BLUE_PASTEL: '#bae1ff',
  BLUE20_PASTEL: '#93daff',
  BLUE30_PASTEL: '#50c8ff',
  BLUE40_PASTEL: '#1e96ff',
  BLUE50_PASTEL: '#0a82ff',

  // 21 봄축제 축페이지 전용
  GREEN80: '#40C2D1',
  PURPLE20: '#E5E7FB',
  PURPLE50: '#9397D6',
  PURPLE70: '#777DD6',
  PURPLE75: '#674688',
  PURPLE80: '#485582',
  PURPLE90: '#38395A',
  GRAY100: '#1C1C1C',
  GRAY80: '#707070',
  GRAY90: '#6F7070',
  GRAY60: '#ADADAD',
  PINK20: '#EDD5D2',
};

export const zIndex = {
  base: 1,
  topButton: 30,
  header: 50,
  fullScreen: 100,
  mouseTrail: 200,
  loading: 1000,
};

export const theme = {
  palette,
  zIndex,
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    
    ${media.lessThan('medium')`
       font-size: 12px;
    `};
  }

  body {
    margin: 0;
    // TODO: 웹폰트가 아닌 font-face 로 변경
    // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-family: 'IBM Plex Sans KR', 'sans-serif';
    user-select: none;
    
    & ::selection {
      background-color: ${palette.PINK_PASTEL};
      color: white;
    }
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    & ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  
  input, textarea, button {
    font-family: inherit;
  }
`;
