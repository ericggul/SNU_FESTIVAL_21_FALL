import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const palette = {

  // 관악의 밤 팔레트

  DARK_PURPLE: '#111734',
  PASTEL_PURPLE: '#9f8ec5',
  LIGHT_PURPLE: '#c0b9db',
  TEXT_PURPLE: '#b975e6',
  BORDER_PURPLE: '#dbddef',
  BLACK_PURPLE: '#0f004e',
  CHOCO_PURPLE: '#9581e9',

  // 홈화면
  HOME_PURPLE: '#260f63',
  HOME_PURPLE2: '#1C0A4D',
  HOME_PURPLE3: '#040036',

  // 행사팀

  STARLIGHT_PURPLE: '#40266B',

  // 미니게임 배경
  SKYLIGHT_BLUE: '#C8E2EF',
  SKYLIGHT_PURPLE: '#E2DDF4',

  HEADER_PURPLE: '#dcbbe6',
  SOFTLIGHT_PURPLE: '#c1b0db',
  PASTELLIGHT_PURPLE: '#c0c3f0',

  RIDDLE_PURPLE: '#e4e8f9',

  RIDDLE_WHITE: '#83AAE2',
  RIDDLE_BLACK: '#06102E',

  HANDWRITING_HEADER: '#7a63b8',
  HANDWRITING_PURPLE: '#352465',

  // 토크쇼
  TALKSHOW_HEADER: '#070c27',

  // 장소
  PLACE_MINT1: '#e7f4c6',
  PLACE_MINT2: '#f0f4d9',
  PLACE_HEADER: '#c2e843',
  PLACE_ARROW: '#b3db2d',
  PLACE_DESCRIPTION: '#606060',

  // 필기
  HANDWRITING_INPUT: '#719dde',
  HANDWRITING_HANDLE: '#5381c5',

  // 포츈쿠키
  FORTUNE_BLUE: '#1A73E8',
  FORTUNE_RED: '#EA4335',
  FORTUNE_YELLOW: '#FBBC05',
  FORTUNE_GREEN: '#34A853',

  // 공모전
  COMPETITION_RED: '#e694a2',
  HIGHLIGHT_RED: '#d9699d',
  TEXT_GRAY: '#707070',
  TEXT_LIGHTGRAY: '#9c9c9c',
  BACKGROUND_LIGHTPINK: '#E7D1D7',
  BACKGROUND_LIGHTORANGE: '#EFD5B7',

  // 오목
  OMOK_PURPLE_BACKGROUND: '#c498ff',
  OMOK_PURPLE: '#9c65f1',
  OMOK_POPUP_PURPLE: '#b286ed',

  // 빛 찾기
  CREAM_PURPLE: '#e5ddff',
  SOFTPASTEL_PURPLE: '#a494d9',
  GUIDE_PURPLE: '#14122D',
  GUIDE_SHADOW_PURPLE: '#434064',
  GUIDE_TEXT_PURPLE: '#CCD3F5',

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
  light: 2000,
  menu: 3000,
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

    overscroll-behavior-y: none;
  }
  
  input, textarea, button {
    font-family: inherit;
  }
`;
