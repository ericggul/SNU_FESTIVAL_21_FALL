import LiteratureOneImage from '@I/activity/competition/literature-1.png';
import CartoonOneImage from '@I/activity/competition/cartoon-1.png';
import CartoonTwoImage from '@I/activity/competition/cartoon-2.png';
import CartoonThreeImage from '@I/activity/competition/cartoon-3.png';
import CartoonFourImage from '@I/activity/competition/cartoon-4.png';
import VideoOneImage from '@I/activity/competition/video-1.png';
import CartoonFourPdf from '@/static/pdf/cartoon-4.pdf';
import CartoonThreePdf from '@/static/pdf/cartoon-3.pdf';
import CartoonTwoPdf from '@/static/pdf/cartoon-2.pdf';
import CartoonOnePdf from '@/static/pdf/cartoon-1.pdf';
import LiteratureOnePdf from '@/static/pdf/literature-1.pdf';

export const CARTOON = 0;
export const LITERATURE = 1;
export const VIDEO = 2;
export const FIELDS = { 만화: CARTOON, 문학: LITERATURE, 영상: VIDEO };
export const FIELDS_IN_ENGLISH = { [CARTOON]: 'cartoon', [LITERATURE]: 'literature', [VIDEO]: 'video' };
export const REVERSED_FIELDS = { [CARTOON]: '만화', [LITERATURE]: '문학', [VIDEO]: '영상' };

export const LIST = [
  {
    competitionId: 1, title: '마스크랑 김태우', author: '유혜인', description: '태우가 짱인 이유!', type: 'pdf', file: CartoonOnePdf, thumbnail: CartoonOneImage, thumbnailSmall: CartoonOneImage, scale: 0.8,
  },
  {
    competitionId: 2, title: '누군가의 노래', author: '이나경', description: '줌에서의 예상하지 못한 고막 힐링 썰!', type: 'pdf', file: CartoonTwoPdf, thumbnail: CartoonTwoImage, thumbnailSmall: CartoonTwoImage, scale: 1.1,
  },
  {
    competitionId: 3, title: '원데이클래스 강사체험기', author: '이나경', description: '비대면 원데이크래스 강사로 겪은 웃픈 코시국 이야기!', type: 'pdf', file: CartoonThreePdf, thumbnail: CartoonThreeImage, thumbnailSmall: CartoonThreeImage, scale: 1.1,
  },
  {
    competitionId: 4, title: '비대면수업에 대한 간단한 고찰', author: '익명', description: '코시국 대학생 훔쳐보기, 무한 공감 썰!', type: 'pdf', file: CartoonFourPdf, thumbnail: CartoonFourImage, thumbnailSmall: CartoonFourImage, scale: 0.85,
  },
];

export const LITERATURE_LIST = [
  {
    competitionId: 1, title: '오공일몽', author: '박현수', description: '즐기다 오, 어리석을 공, 오공일몽!', type: 'pdf', file: LiteratureOnePdf, thumbnail: LiteratureOneImage, thumbnailSmall: LiteratureOneImage, scale: 1,
  },
];

export const VIDEO_LIST = [
  {
    competitionId: 1, title: '코로나 금사빠', author: '익명', description: '마스크 낀 그의 모습과 사랑에 빠진 나! 과연 내 짝사랑의 결말은?', type: 'youtube', youtubeUrl: 'https://www.youtube.com/embed/ox2cR8IlwwY', thumbnail: VideoOneImage, thumbnailSmall: VideoOneImage,
  },
];
